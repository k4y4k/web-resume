import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import tw, { css } from "twin.macro";
import Contact from "../blocks/Contact";
import Header from "../blocks/Header";
import Skills from "../blocks/Skills";
import Volunteer from "../blocks/Volunteer";
import WorkExperience from "../blocks/WorkExperience";
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
  marginRight: 1rem;
`;

const Resume = () => {
  const data = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: {eq: "unsplash.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 90
              formats: [AUTO, WEBP, AVIF]
              height: 1333
              width: 200
              transformOptions: {rotate: 180, fit: COVER, cropFocus: CENTER}
            )
          }
        }
      }
    `,
  );

  const bgImage = getImage(data.placeholderImage);

  return (
    <section data-testid="resume-root" tw="bg-white" css={pageContainerStyles}>
      {bgImage && <GatsbyImage image={bgImage} alt="" css={imageStripStyles} />}
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
