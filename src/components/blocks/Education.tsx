import 'twin.macro'
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ItemContainer from '../section/ItemContainer'
import SectionContainer from '../section/SectionContainer'

interface EducationItem {
  courses: string[]
  institution: string
  area: string
  studyType: string
  startDate: string
  endDate: string
}

interface two {
  history: EducationItem[]
}

export const PureEducation = ({ history }: two): JSX.Element => {
  return (
    <div data-testid='education'>
      <SectionContainer title='Education'>
        {history.map((el, i: number) => {
          return (
            <ItemContainer
              key={i}
              courses={el.courses}
              institution={el.institution}
              area={el.area}
              studyType={el.studyType}
              fromDate={el.startDate}
              toDate={el.endDate}
            />
          )
        })}
      </SectionContainer>
    </div>
  )
}

export const Education = (): JSX.Element => {
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
  `)

  const { education } = data.file.childDataJson

  return <PureEducation history={education} />
}

export default Education
