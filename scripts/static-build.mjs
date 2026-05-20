#!/usr/bin/env node
import { spawn } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const clientDir = join(dist, "client");
const serverDir = join(dist, "server");

function log(msg) {
  console.log(`[static-build] ${msg}`);
}

function fail(msg) {
  console.error(`[static-build] ERROR: ${msg}`);
  process.exit(1);
}

if (!existsSync(clientDir)) fail(`Missing ${clientDir}. Run 'vite build' first.`);
if (!existsSync(serverDir)) fail(`Missing ${serverDir}. Run 'vite build' first.`);

// Alias dist/server/index.js -> dist/server/server.js for vite preview's TanStack plugin
const serverIndex = join(serverDir, "index.js");
const serverAlias = join(serverDir, "server.js");
if (existsSync(serverIndex) && !existsSync(serverAlias)) {
  copyFileSync(serverIndex, serverAlias);
  log("Aliased dist/server/index.js -> dist/server/server.js");
}

const port = 4910;
const previewUrl = `http://localhost:${port}/`;

log(`Starting 'vite preview' on port ${port}...`);
const preview = spawn("npx", ["vite", "preview", "--port", String(port)], {
  cwd: root,
  stdio: ["ignore", "inherit", "inherit"],
  env: process.env,
});

let killed = false;
function killPreview() {
  if (killed) return;
  killed = true;
  try {
    preview.kill("SIGTERM");
  } catch {}
}
process.on("exit", killPreview);
process.on("SIGINT", () => { killPreview(); process.exit(1); });
process.on("SIGTERM", () => { killPreview(); process.exit(1); });

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status === 200) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

try {
  await waitForServer(previewUrl);
  log("Preview server ready. Fetching /...");
  const res = await fetch(previewUrl);
  if (res.status !== 200) throw new Error(`Got HTTP ${res.status} from /`);
  const html = await res.text();
  writeFileSync(join(clientDir, "index.html"), html);
  log("Wrote dist/client/index.html");
} catch (err) {
  killPreview();
  fail(err.message || String(err));
}

killPreview();
await new Promise((r) => setTimeout(r, 500));

// Flatten dist/client/* -> dist/
log("Flattening dist/client/* -> dist/...");
for (const entry of readdirSync(clientDir)) {
  const from = join(clientDir, entry);
  const to = join(dist, entry);
  if (existsSync(to)) rmSync(to, { recursive: true, force: true });
  renameSync(from, to);
}
rmSync(clientDir, { recursive: true, force: true });

// Delete dist/server/
log("Removing dist/server/...");
rmSync(serverDir, { recursive: true, force: true });

// Ensure _redirects
const distRedirects = join(dist, "_redirects");
if (!existsSync(distRedirects)) {
  const publicRedirects = resolve(root, "public", "_redirects");
  if (existsSync(publicRedirects)) {
    copyFileSync(publicRedirects, distRedirects);
    log("Copied public/_redirects -> dist/_redirects");
  } else {
    fail("Missing _redirects in dist/ and public/");
  }
}

function countFiles(dir) {
  let n = 0;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) n += countFiles(join(dir, e.name));
    else n++;
  }
  return n;
}

log(`SUCCESS: ${countFiles(dist)} files in dist/`);
