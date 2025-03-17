import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Contact from "../blocks/Contact";
import Education from "../blocks/Education";
import Header from "../blocks/Header";
import OpenSource from "../blocks/OpenSource";
import Skills from "../blocks/Skills";
import Volunteer from "../blocks/Volunteer";
import WorkExperience from "../blocks/WorkExperience";
import { container, resumeContents, strip } from "./page-styles.module.css";

const Resume = () => {
  const data = useStaticQuery(
    graphql`
      {
        imageStrip: file(relativePath: { eq: "unsplash.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 95
              formats: [WEBP]
              height: 1333
              width: 200
              transformOptions: { rotate: 180, fit: COVER, cropFocus: CENTER }
            )
          }
        }
      }
    `,
  );

  const bgImage = getImage(data.imageStrip);

  return (
    <section data-testid="resume-root" className={container}>
      {bgImage && <GatsbyImage image={bgImage} alt="" className={strip} />}
      <div className="flex flex-col p-4">
        <Header isCoverLetter={false} />
        <hr className="block my-2 mb-4 bg-white mx-20" />
        <div className={`${resumeContents} overflow-hidden`}>
          <WorkExperience />
          <div style={{ gridArea: "sk" }}>
            <Contact />
            <Skills />
            <Education />
            <OpenSource />
            <Volunteer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
