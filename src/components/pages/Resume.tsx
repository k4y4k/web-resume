import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import tw, { css } from "twin.macro";
import Contact from "../blocks/Contact";
import { convertToBgImage } from "gbimage-bridge";
import WorkExperience from "../blocks/WorkExperience";
import { getImage } from "gatsby-plugin-image";
import Header from "../blocks/Header";
import Skills from "../blocks/Skills";
import Volunteer from "../blocks/Volunteer";
import BackgroundImage from "gatsby-background-image";
const paperSizes = require("@5no/paper-sizes");
const paperOptions = { dpi: 300, type: "mm" };
export const a4Data = paperSizes("A4", paperOptions);

const resumeContentStyles = css`
  ${tw`grid grid-flow-row-dense grid-cols-2 text-sm `}
  max-height: calc( ${a4Data.heightToMillimeters()}mm * 0.8 );
  grid-template-rows: content content content;
  grid-template-areas:
    "ex sk"
    "ex sk"
    "ex sk";
`;

export const pageContainerStyles = css`
  ${tw`my-12 shadow-lg flex`}
  width: ${a4Data.widthToMillimeters()}mm;
  max-width: ${a4Data.widthToMillimeters()}mm;
  height: ${a4Data.heightToMillimeters()}mm;
  max-height: ${a4Data.heightToMillimeters()}mm;

  @media print {
    ${tw`m-0 shadow-none m-0`}
  }

  @media screen and (min-width: 1200px) {
    ${tw`my-12`}
  }
`;

const imageStripStyles = css`
  height: ${a4Data.heightToMillimeters()}mm;
  width: 30mm;
  marginright: 1rem;
`;

const Resume = (): JSX.Element => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: { eq: "unsplash.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              placeholder: BLURRED
              quality: 90
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { rotate: 180 }
            )
          }
        }
      }
    `
  );

  const bgImage = convertToBgImage(getImage(placeholderImage));
  return (
    <section tw="bg-white" css={pageContainerStyles}>
      <BackgroundImage Tag="aside" {...bgImage} css={imageStripStyles} />
      <div tw="flex flex-col p-4">
        <Header />
        <div css={resumeContentStyles}>
          <WorkExperience />
          <div style={{ gridArea: "sk" }}>
            <Contact />
            <Skills />
            <Volunteer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
