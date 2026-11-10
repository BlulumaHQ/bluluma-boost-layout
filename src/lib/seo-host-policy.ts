// Platform-provided hostnames that must stay reachable but never be indexed.
// Custom domains are intentionally NOT listed: anything else stays index-eligible.
export const NOINDEX_HOST_SUFFIXES = [".lovable.app", ".workers.dev", ".pages.dev", ".netlify.app"];

export function isPlatformHost(hostname: string): boolean {
  const h = hostname.toLowerCase().replace(/\.$/, "");
  return NOINDEX_HOST_SUFFIXES.some((s) => h.endsWith(s));
}

export function applyHostIndexingPolicy(request: Request, response: Response): Response {
  let hostname: string;
  try {
    hostname = new URL(request.url).hostname;
  } catch {
    return response;
  }
  if (!isPlatformHost(hostname)) return response;
  const type = response.headers.get("content-type") ?? "";
  if (!type.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
