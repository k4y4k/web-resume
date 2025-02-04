import "twin.macro";
import * as React from "react";

interface SectionTitleTypes {
  title: string;
  onCoverLetter: boolean;
}

const SectionTitle = ({
  title,
  onCoverLetter,
}: SectionTitleTypes): JSX.Element | null => {
  if (title === "") return null;

  if (onCoverLetter) return null;

  return (
    <h2
      data-testid="sectionTitle"
      tw="font-mono text-lg font-bold uppercase text-orchid-700"
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
