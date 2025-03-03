import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import tw, { css } from "twin.macro";
import AddressGreeting from "./AddressGreeting";
import DateLine from "./DateLine";
import Thanks from "./Thanks";

const coverLetterContentsStyles = css`
  ${tw`py-8 max-w-prose`}

  p {
    ${tw`pb-4`}
  }

  h1 {
    ${tw`pb-1`}
  }
`;

const CoverLetterContents = (): JSX.Element => {
  const { letterContents, jsonName } = useStaticQuery(
    graphql`
      {
        letterContents: file(extension: { eq: "md" }, name: { eq: "letter" }) {
          childMarkdownRemark {
            html
          }
        }

        jsonName: file(extension: { eq: "json" }, name: { eq: "data" }) {
          childDataJson {
            basics {
              name
              phone
            }
          }
        }
      }
    `,
  );

  return (
    <div css={coverLetterContentsStyles}>
      <DateLine />
      <AddressGreeting />
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: letterContents.childMarkdownRemark.html,
        }}
      />
      <Thanks
        number={jsonName.childDataJson.basics.phone}
        name={jsonName.childDataJson.basics.name}
      />
    </div>
  );
};

export default CoverLetterContents;
