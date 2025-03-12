import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Contact from "../blocks/Contact";
import Header from "../blocks/Header";
import CoverLetterContents from "../cover-letter/CoverLetterContents";
import { letterBody } from "../cover-letter/cover-letter.module.css";
import { container, letterContents } from "./page-styles.module.css";

const CoverLetter = () => {
  const { headerImage } = useStaticQuery(graphql`
    {
      headerImage: file(relativePath: { eq: "unsplash.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [WEBP]
            placeholder: BLURRED
            quality: 90
            height: 2000
            width: 2000
            transformOptions: { rotate: 0, fit: COVER, cropFocus: CENTER }
          )
        }
      }
    }
  `);

  const hdImg = getImage(headerImage);

  return (
    <div className={`${container} p-0 my-8`}>
      <div className={letterContents}>
        {hdImg && (
          <GatsbyImage alt="" style={{ gridArea: "img" }} image={hdImg} />
        )}
        <section style={{ gridArea: "title" }}>
          <Header isCoverLetter />
          <Contact compact={true} />
        </section>
        <div className={letterBody} style={{ gridArea: "body" }}>
          <CoverLetterContents />
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
