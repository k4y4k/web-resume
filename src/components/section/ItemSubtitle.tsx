import * as React from "react";

interface ItemSubtitleTypes {
  subtitle: string | undefined;
  link: string | undefined;
}

const ItemSubtitle = ({
  subtitle,
  link,
}: ItemSubtitleTypes): JSX.Element | null => {
  if (subtitle === "") return null;

  if (link === undefined || link === "")
    return <span data-testid="itemSubtitle">{subtitle}</span>;

  return (
    <a
      href={link}
      style={{
        // FIXME: this isn't twin.macro
        textDecoration: "underline",
        color: "#4d368c",
      }}
    >
      <span data-testid="itemSubtitle">{subtitle}</span>
    </a>
  );
};

export default ItemSubtitle;
