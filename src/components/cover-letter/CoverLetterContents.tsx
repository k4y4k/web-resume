import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import AddressGreeting from "./AddressGreeting";
import DateLine from "./DateLine";
import Thanks from "./Thanks";

const CoverLetterContents = () => {
  const { letterContents, file } = useStaticQuery(
    graphql`
      {
        letterContents: file(extension: { eq: "md" }, name: { eq: "letter" }) {
          childMarkdownRemark {
            excerpt(format: MARKDOWN, pruneLength: 9999)
          }
        }

        file(extension: { eq: "json" }, name: { eq: "data" }) {
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
    <div className="">
      <DateLine />
      <AddressGreeting />
      <div className="max-w-prose">
        <ReactMarkdown>
          {letterContents.childMarkdownRemark.excerpt}
        </ReactMarkdown>
      </div>
      <Thanks name={file.childDataJson.basics.name} />
    </div>
  );
};

export default CoverLetterContents;
