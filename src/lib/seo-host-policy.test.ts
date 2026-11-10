import { expect, test } from "bun:test";
import { applyHostIndexingPolicy, isPlatformHost } from "./seo-host-policy";

const html = () => new Response("<html></html>", { headers: { "content-type": "text/html; charset=utf-8" } });

test("platform hosts are noindexed", () => {
  for (const h of ["bluluma-boost-layout.lovable.app", "x.workers.dev", "x.pages.dev", "x.netlify.app", "X.NETLIFY.APP."])
    expect(isPlatformHost(h)).toBe(true);
});
test("custom domains stay indexable", () => {
  for (const h of ["gloriousbao.com", "www.gloriousbao.com", "lovable.app.example.com", "netlify.app"])
    expect(isPlatformHost(h)).toBe(false);
});
test("header only on HTML from platform hosts, nested routes too", () => {
  expect(applyHostIndexingPolicy(new Request("https://a.lovable.app/menu/x"), html()).headers.get("x-robots-tag")).toBe("noindex");
  expect(applyHostIndexingPolicy(new Request("https://gloriousbao.com/menu"), html()).headers.get("x-robots-tag")).toBeNull();
  const js = new Response("1", { headers: { "content-type": "text/javascript" } });
  expect(applyHostIndexingPolicy(new Request("https://a.lovable.app/a.js"), js).headers.get("x-robots-tag")).toBeNull();
});
