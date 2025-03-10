import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import tw, { css } from "twin.macro";
import Contact from "../blocks/Contact";
import Header from "../blocks/Header";
import CoverLetterContents from "../cover-letter/CoverLetterContents";
import { a4Data, pageContainerStyles } from "./Resume";

const coverLetterContentStyles = css`
  ${tw`grid grid-flow-row-dense grid-cols-2 text-sm `}
  height: ${a4Data.heightToMillimeters()}mm;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "header txt";
`;

// FIXME: Netlify can't handle AVIF files at all
const CoverLetter = (): JSX.Element => {
  const { headerImage } = useStaticQuery(graphql`
    {
      headerImage: file(relativePath: { eq: "unsplash.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [WEBP]
            placeholder: BLURRED
            quality: 90
            height: 1333
            width: 500
            transformOptions: { rotate: 0, fit: COVER, cropFocus: CENTER }
          )
        }
      }
    }
  `);

  const hdImg = getImage(headerImage);

  return (
    <div css={pageContainerStyles} tw="bg-white p-0 my-8">
      <div css={coverLetterContentStyles}>
        {hdImg && (
          <GatsbyImage alt="" style={{ gridArea: "header" }} image={hdImg} />
        )}
        <section style={{ gridArea: "header", zIndex: 2 }}>
          <Header isCoverLetter />
          <Contact restrictDisplay={false} compact={true} />
        </section>
        <div style={{ gridArea: "txt" }} tw="px-12">
          <CoverLetterContents />
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
