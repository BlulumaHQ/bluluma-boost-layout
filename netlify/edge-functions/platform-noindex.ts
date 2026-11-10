// Netlify Edge Function: adds X-Robots-Tag: noindex to HTML only on *.netlify.app
// (and other platform hosts). Custom domains pass through untouched.
const SUFFIXES = [".lovable.app", ".workers.dev", ".pages.dev", ".netlify.app"];

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const response = await context.next();
  const host = new URL(request.url).hostname.toLowerCase().replace(/\.$/, "");
  if (!SUFFIXES.some((s) => host.endsWith(s))) return response;
  if (!(response.headers.get("content-type") ?? "").includes("text/html")) return response;
  response.headers.set("X-Robots-Tag", "noindex");
  return response;
};

export const config = { path: "/*" };
