import type { ReactNode } from "react";
import { render, screen, within } from "@testing-library/react";
import { Navigation } from "./navigation";
import { describe, it, expect, vi, beforeEach } from "vitest";

let mockPathname = "/";

// The real `Link` needs a router context, so the mock keeps the module intact
// and only swaps the two context-bound pieces: the pathname source and the
// link itself, rendered as a plain anchor with the same destination.
vi.mock("@tanstack/react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@tanstack/react-router")>();
  return {
    ...actual,
    useLocation: () => ({ pathname: mockPathname }),
    Link: ({ to, children, ...rest }: { to: string; children: ReactNode }) => (
      <a href={to} {...rest}>
        {children}
      </a>
    ),
  };
});

describe("Navigation", () => {
  beforeEach(() => {
    mockPathname = "/";
  });

  describe("Mobile Navigation", () => {
    it("renders mobile navigation", () => {
      mockPathname = "/";
      render(<Navigation />);

      const mobileNav = screen.getByTestId("mobile-nav");
      expect(mobileNav).toBeVisible();

      const homeLink = within(mobileNav).getByRole("link", { name: "Home" });
      const cvLink = within(mobileNav).getByRole("link", { name: "CV" });
      const projectsLink = within(mobileNav).getByRole("link", {
        name: "Independent Projects",
      });

      expect(homeLink).toBeDefined();
      expect(cvLink).toBeDefined();
      expect(projectsLink).toBeDefined();
    });

    it("highlights active page in mobile navigation", () => {
      mockPathname = "/cv";
      render(<Navigation />);

      const mobileNav = screen.getByTestId("mobile-nav");
      const activeLink = within(mobileNav).getByRole("link", { name: "CV" });
      const inactiveLink = within(mobileNav).getByRole("link", {
        name: "Home",
      });

      expect(activeLink.className).toContain("text-yellow-400");
      expect(inactiveLink.className).toContain("text-green-400");
    });
  });

  describe("Desktop Navigation", () => {
    it("renders desktop navigation", () => {
      mockPathname = "/";
      render(<Navigation />);

      const desktopNav = screen.getByTestId("desktop-nav");
      expect(screen.getByText("WahidyanKF")).toBeDefined();

      const homeLink = within(desktopNav).getByRole("link", { name: "Home" });
      const cvLink = within(desktopNav).getByRole("link", { name: "CV" });
      const projectsLink = within(desktopNav).getByRole("link", {
        name: "Independent Projects",
      });

      expect(homeLink).toBeDefined();
      expect(cvLink).toBeDefined();
      expect(projectsLink).toBeDefined();
    });

    it("highlights active page in desktop navigation", () => {
      mockPathname = "/cv";
      render(<Navigation />);

      const desktopNav = screen.getByTestId("desktop-nav");
      const activeLink = within(desktopNav).getByRole("link", { name: "CV" });
      const inactiveLink = within(desktopNav).getByRole("link", {
        name: "Home",
      });

      expect(activeLink.className).toContain("text-yellow-400");
      expect(inactiveLink.className).toContain("text-green-400");
    });
  });
});
