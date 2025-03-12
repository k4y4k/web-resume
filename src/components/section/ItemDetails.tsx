import React from "react";
import ReactMarkdown from "react-markdown";

interface ItemDetailsTypes {
  // accepts markdown
  details?: string;
}

const ItemDetails = ({ details }: ItemDetailsTypes) => {
  if (details === "" || details === undefined) return null;

  // don't return empty bullet points
  if (details === "-  ") return null;

  return (
    <div data-testid="sectionItemDetails">
      <ReactMarkdown skipHtml={!false}>{details}</ReactMarkdown>
    </div>
  );
};

export default ItemDetails;
