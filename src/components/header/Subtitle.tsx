import React from "react";

interface SubtitleProps {
  subtitle: string;
  isCoverLetter?: boolean;
}

const Subtitle = ({ subtitle, isCoverLetter = false }: SubtitleProps) => {
  if (subtitle === "") return null;

  return (
    <h2
      className={`${
        isCoverLetter ? "hidden" : ""
      } text-lg text-orchid-600`.trim()}
      data-testid="headerSubtitle"
    >
      {subtitle}
    </h2>
  );
};

export default Subtitle;
