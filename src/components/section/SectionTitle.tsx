import React from "react";

interface SectionTitleTypes {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleTypes) => {
  if (title === "") return null;

  return (
    <h2
      data-testid="sectionTitle"
      className="font-mono text-lg font-bold uppercase text-orchid-600"
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
