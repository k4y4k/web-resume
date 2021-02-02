import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import SectionContainer from '../section/SectionContainer'
import Composed from '../skills/Composed'

interface SkillsItem {
  keywords: string[]
  name: string
}

interface SkillsList {
  skills: SkillsItem[]
}

export const PureSkills = ({ skills }: SkillsList): JSX.Element => {
  return (
    <div data-testid='skills'>
      <SectionContainer title='Skills'>
        {skills.length > 0 &&
          skills.map(el => (
            <Composed key={el.name} heading={el.name} bucket={el.keywords} />
          ))}
      </SectionContainer>
    </div>
  )
}

const Skills = (): JSX.Element => {
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
  `)

  const { skills } = data?.file.childDataJson

  return <PureSkills skills={skills} />
}

export default Skills
