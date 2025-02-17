import dayjs from "dayjs";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
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

export const PureWorkExperience = ({ history }: two): JSX.Element => {
  return (
    <div data-testid="experience">
      <SectionContainer title="Experience">
        {history.map((el) => {
          return (
            <ItemContainer
              key={el.organization + el.position}
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

export const WorkExperience = (): JSX.Element => {
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
        }
      }
    }
  `);

  const { work } = data.file.childDataJson;

  const aggregated = [...work].sort((a, b) =>
    dayjs(a.startDate).isAfter(b.startDate) ? -1 : 1,
  );

  return <PureWorkExperience history={aggregated} />;
};

export default WorkExperience;
