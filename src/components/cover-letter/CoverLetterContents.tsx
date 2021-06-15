import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import tw, { css } from 'twin.macro'
import AddressGreeting from './AddressGreeting'
import DateLine from './DateLine'
import ThanksForComingToMyTEDTalk from './Thanks'

const coverLetterContentsStyles = css`
  ${tw`py-8 max-w-prose`}

  p {
    ${tw`pb-4`}
  }
`

const CoverLetterContents = (): JSX.Element => {
  const { letterContents, jsonName } = useStaticQuery(
    graphql`
      {
        letterContents: file(extension: { eq: "md" }, name: { eq: "letter" }) {
          childMarkdownRemark {
            html
          }
        }

        jsonName: file(extension: { eq: "json" }, name: { eq: "data" }) {
          childDataJson {
            basics {
              name
            }
          }
        }
      }
    `
  )

  return (
    <div css={coverLetterContentsStyles}>
      <DateLine />
      <AddressGreeting />
      <div
        dangerouslySetInnerHTML={{
          __html: letterContents.childMarkdownRemark.html,
        }}
      />
      <ThanksForComingToMyTEDTalk name={jsonName.childDataJson.basics.name} />
    </div>
  )
}

export default CoverLetterContents
