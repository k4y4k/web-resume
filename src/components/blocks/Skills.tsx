import "twin.macro";
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Composed from "../skills/Composed";
import SectionContainer from "../section/SectionContainer";

interface SkillsItem {
  keywords: string[];
  name: string;
}

interface SkillsList {
  skills: SkillsItem[];
}

export const PureSkills = ({ skills }: SkillsList): JSX.Element => {
  let compact = false;
  if (skills.length <= 1) compact = true;

  return (
    <div data-testid="skills">
      <SectionContainer title="Skills">
        {skills?.map((el) => (
          <Composed
            compact={compact}
            key={el.name}
            heading={el.name}
            bucket={el.keywords}
          />
        ))}
      </SectionContainer>
    </div>
  );
};

export const Skills = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        childDataJson {
          skills {
            name
            keywords
          }
        }
      }
    }
  `);

  const { skills } = data.file.childDataJson;

  return <PureSkills skills={skills} />;
};

export default Skills;
