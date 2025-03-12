import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import AddressGreeting from "./AddressGreeting";
import DateLine from "./DateLine";
import Thanks from "./Thanks";

// const coverLetterContentsStyles = css`
//   ${tw`py-8 max-w-prose`}
//
//   p {
//     ${tw`pb-4 last-of-type:pb-0`}
//   }
//
//   h1 {
//     ${tw`pb-1`}
//   }
// `;

// const coverLetterTextStyles = css`
//   ul {
//     ${tw`list-disc mb-4`}
//   }
// `;

const CoverLetterContents = () => {
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
    <div
    // css={coverLetterContentsStyles}
    >
      <DateLine />
      <AddressGreeting />
      <div
        // css={coverLetterTextStyles}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: letterContents.childMarkdownRemark.html,
        }}
      />
      <Thanks name={jsonName.childDataJson.basics.name} />
    </div>
  );
};

export default CoverLetterContents;
