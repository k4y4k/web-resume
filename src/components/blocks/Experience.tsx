import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ItemContainer from '../section/ItemContainer'
import SectionContainer from '../section/SectionContainer'

interface ExperienceItem {
  company: string
  endDate: string
  highlights?: string[]
  position: string
  startDate: string
  summary: string
}

interface two {
  history: ExperienceItem[]
}

export const PureExperience = ({ history }: two): JSX.Element => {
  console.log(history.length)
  return (
    <div data-testid='experience'>
      <SectionContainer title='Experience'>
        {history.map((el, i: number) => {
          return (
            <ItemContainer
              collectionLength={history.length}
              currentIndex={i}
              key={i}
              details={el.summary}
              fromDate={el.startDate}
              toDate={el.endDate}
              title={el.position}
              subtitle={el.company}
            />
          )
        })}
      </SectionContainer>
    </div>
  )
}

const Experience = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        id
        childDataJson {
          work {
            company
            endDate
            position
            startDate
            summary
          }
        }
      }
    }
  `)

  const { work } = data?.file.childDataJson

  return <PureExperience history={work} />
}

export default Experience
