import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PersonalProjectsContent } from "./personal-projects-content";

// The personal-projects scenarios cover the card list, its skill tags, and the
// filtering a tag click performs. What they never do is clear the search box,
// so the branch that routes back to the unfiltered URL went unexercised.
const mockPush = vi.fn();

vi.mock("@tanstack/react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@tanstack/react-router")>();
  return {
    ...actual,
    useRouter: () => ({ history: { push: mockPush, replace: vi.fn() } }),
  };
});

vi.mock("@/features/app-shell/shell/navigation", () => ({
  Navigation: () => React.createElement("div", { "data-testid": "navigation" }, "Navigation"),
}));

const searchBox = () => screen.getByPlaceholderText("Search projects...");

describe("PersonalProjectsContent search URL", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it("routes to a filtered URL when a term is typed", () => {
    render(<PersonalProjectsContent />);
    fireEvent.change(searchBox(), { target: { value: "cli" } });
    expect(mockPush).toHaveBeenCalledWith("/personal-projects?search=cli");
  });

  it("routes back to the bare URL when the term is cleared", () => {
    render(<PersonalProjectsContent />);
    fireEvent.change(searchBox(), { target: { value: "cli" } });
    mockPush.mockClear();
    fireEvent.change(searchBox(), { target: { value: "" } });
    // Not "/personal-projects?search=" — an empty query parameter is a
    // different URL from no parameter, and it would leave the address bar
    // showing a filter the page is no longer applying.
    expect(mockPush).toHaveBeenCalledWith("/personal-projects");
  });

  it("percent-encodes a term containing a space", () => {
    render(<PersonalProjectsContent />);
    fireEvent.change(searchBox(), { target: { value: "static site" } });
    expect(mockPush).toHaveBeenCalledWith("/personal-projects?search=static%20site");
  });

  it("reports no matches for a term nothing satisfies", () => {
    render(<PersonalProjectsContent />);
    fireEvent.change(searchBox(), {
      target: { value: "zzz-no-such-project-zzz" },
    });
    expect(document.querySelectorAll('[id^="project-"]').length).toBe(0);
  });
});
