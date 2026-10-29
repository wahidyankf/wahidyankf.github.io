import { describe, expect, it } from "vitest";
import { serializeRobots } from "@/features/seo/core/seo";
import { Route } from "./robots[.]txt";

describe("robots.txt server route", () => {
  it("serves the crawler directives as plain text", async () => {
    const handlers = Route.options.server?.handlers;
    const get = typeof handlers === "function" ? undefined : handlers?.GET;
    if (typeof get !== "function") {
      throw new Error("Route /robots.txt exports no GET handler.");
    }
    const response = await get({
      request: new Request("https://www.wahidyankf.com/robots.txt"),
    } as never);
    if (!(response instanceof Response)) {
      throw new Error("Route /robots.txt did not return a response.");
    }
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");
    expect(await response.text()).toBe(serializeRobots());
  });
});
