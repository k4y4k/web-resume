import React from "react";

interface ItemSubtitleTypes {
  subtitle: string | undefined;
  link: string | undefined;
}

const ItemSubtitle = ({ subtitle, link }: ItemSubtitleTypes) => {
  if (!subtitle || subtitle === "") return null;

  if (!link || link === "")
    return <span data-testid="itemSubtitle">{subtitle}</span>;

  return (
    <a href={link} className="underline text-[#4d368c]">
      <span data-testid="itemSubtitle">{subtitle}</span>
    </a>
  );
};

export default ItemSubtitle;
