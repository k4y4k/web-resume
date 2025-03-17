import dayjs from "dayjs";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import ItemTitle from "../section/ItemTitle";
import SectionContainer from "../section/SectionContainer";

interface OpenSource {
  forge: string;
  userRepo: string;
  description: string;
  rawDates?: string;
  relevant?: boolean | null;
}

export const PureOpenSource = ({
  openSource,
}: {
  openSource: OpenSource[];
}) => {
  if (openSource.length === 0) return null;

  return (
    <div data-testid="open-source">
      <SectionContainer title="Open Source">
        {openSource.map(({ forge, userRepo, description, rawDates }) => {
          return (
            <div
              data-testid="sectionItemDetails"
              key={JSON.stringify({ userRepo })}
            >
              <ItemTitle title={userRepo} />

              <div className="italic mb-1">
                <span>
                  {`https://${forge}.com/${userRepo}`}
                  {`${rawDates ? ` | ${rawDates}` : ""}`}
                </span>
              </div>

              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          );
        })}
      </SectionContainer>
    </div>
  );
};

export const OpenSource = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        id
        childDataJson {
          openSource {
            forge
            userRepo
            description
            relevant
            rawDates
          }
        }
      }
    }
  `);

  const { openSource }: { openSource: OpenSource[] } = data.file.childDataJson;

  const aggregated = [...openSource].filter((el) => {
    // `relevant` is null if unset, but can be set to `true`
    // to exclude an entry, pass in false
    return el.relevant !== false;
  });

  return <PureOpenSource openSource={aggregated} />;
};

export default OpenSource;
