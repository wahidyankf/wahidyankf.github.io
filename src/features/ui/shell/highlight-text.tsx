import type React from "react";

interface HighlightTextProps {
  text: string;
  searchTerm: string;
  highlightClassName?: string;
}

export const highlightText = (
  text: string,
  searchTerm: string,
  highlightClassName = "bg-yellow-300 text-gray-900",
): React.ReactNode => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, "gi");
  // Array indices are positional here: split() parts keep their order and a
  // repeated word is a legitimate duplicate, so the index is the identity.
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className={highlightClassName}>
        {part}
      </mark>
    ) : (
      part
    ),
  );
};

export const HighlightText: React.FC<HighlightTextProps> = ({ text, searchTerm, highlightClassName }) => {
  return <>{highlightText(text, searchTerm, highlightClassName)}</>;
};
