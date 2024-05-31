import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import dayjs from "dayjs";
import ItemContainer from "../section/ItemContainer";
import SectionContainer from "../section/SectionContainer";

interface ExperienceItem {
  company: string;
  endDate: string;
  highlights?: string[];
  position: string;
  startDate: string;
  summary: string;
  organization?: string;
  link: string;
}

interface two {
  history: ExperienceItem[];
}

export const PureExperience = ({ history }: two): JSX.Element => {
  return (
    <div data-testid="experience">
      <SectionContainer title="Experience">
        {history.map((el, i: number) => {
          return (
            <ItemContainer
              key={i}
              summary={el.summary}
              fromDate={el.startDate}
              toDate={el.endDate}
              title={el.position}
              subtitle={el.company ?? el.organization}
              link={el.link}
            />
          );
        })}
      </SectionContainer>
    </div>
  );
};

export const Experience = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        id
        childDataJson {
          work {
            startDate
            endDate
            company
            position
            summary
            link
          }
          volunteer {
            startDate
            endDate
            organization
            position
            summary
          }
        }
      }
    }
  `);

  const { work, volunteer } = data.file.childDataJson;

  const aggregated = [...work, ...volunteer].sort((a, b) =>
    dayjs(a.startDate).isAfter(b.startDate) ? -1 : 1,
  );

  return <PureExperience history={aggregated} />;
};

export default Experience;
