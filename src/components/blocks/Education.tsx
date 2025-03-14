import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ItemContainer from "../section/ItemContainer";
import SectionContainer from "../section/SectionContainer";

interface EducationItem {
  courses: string[];
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
}

interface two {
  history: EducationItem[];
}

export const PureEducation = ({ history }: two) => {
  return (
    <div data-testid="education">
      <SectionContainer title="Education">
        {history.map((el) => {
          return (
            <ItemContainer
              key={`${el.institution}${el.startDate}${el.endDate}${JSON.stringify(el.courses)}`}
              courses={el.courses}
              institution={el.institution}
              area={el.area}
              studyType={el.studyType}
              fromDate={el.startDate}
              toDate={el.endDate}
            />
          );
        })}
      </SectionContainer>
    </div>
  );
};

export const Education = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        childDataJson {
          education {
            institution
            area
            studyType
            startDate
            endDate
            courses
          }
        }
      }
    }
  `);

  const { education } = data.file.childDataJson;

  return <PureEducation history={education} />;
};

export default Education;
