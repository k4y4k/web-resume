import dayjs from "dayjs";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
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

  relevant?: boolean;
}

interface two {
  history: ExperienceItem[];
}

export const PureWorkExperience = ({ history }: two) => {
  return (
    <div data-testid="experience">
      <SectionContainer title="Volunteering">
        {history.map((el) => {
          // `relevant` is null if unset, but can be set to `true`
          // to exclude an entry, pass in false
          if (el.relevant === false) return null;

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

export const WorkExperience = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        id
        childDataJson {
          volunteer {
            endDate
            summary
            startDate
            position
            organization
            # bool; show/hide individual experiences
            relevant
          }
        }
      }
    }
  `);

  const { volunteer } = data.file.childDataJson;

  const aggregated = [...volunteer].sort((a, b) =>
    dayjs(a.startDate).isAfter(b.startDate) ? -1 : 1,
  );

  return <PureWorkExperience history={aggregated} />;
};

export default WorkExperience;
