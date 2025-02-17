import * as React from "react";
import ReactMarkdown from "react-markdown";
import tw, { css } from "twin.macro";

interface ItemDetailsTypes {
  // accepts markdown
  details?: string;
}

const detailsStyles = css`
  ul {
    ${tw`list-disc list-inside`}
    text-indent: -21px;
    padding-left: 21px;
  }
`;

const ItemDetails = ({ details }: ItemDetailsTypes): JSX.Element | null => {
  if (details === "" || details === undefined) return null;

  // don't return empty bullet points
  if (details === "-  ") return null;

  return (
    <div css={detailsStyles} data-testid="sectionItemDetails">
      <ReactMarkdown>{details}</ReactMarkdown>
    </div>
  );
};

export default ItemDetails;
