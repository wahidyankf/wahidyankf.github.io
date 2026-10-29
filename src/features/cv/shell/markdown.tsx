import type React from "react";
import { HighlightText } from "@/features/ui/shell";

export const parseMarkdownLinks = (text: string, searchTerm: string): React.ReactNode => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = text.split(linkRegex);

  return parts.map((part, index) => {
    if (index % 3 === 1) {
      // This is the link text
      const linkText = part;
      const linkUrl = parts[index + 1];
      // Array indices are positional here: split() parts keep their order and
      // the same link text may appear twice, so the index is the identity.
      return (
        <a
          key={index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="content-link" // Changed from about-me-link to content-link
        >
          <HighlightText text={linkText} searchTerm={searchTerm} />
        </a>
      );
    } else if (index % 3 === 0) {
      // This is regular text
      // Array indices are positional here: split() parts keep their order and
      // the same text may appear twice, so the index is the identity.
      return <HighlightText key={index} text={part} searchTerm={searchTerm} />;
    }
    return null;
  });
};
