import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleVisible } from "../../store/modalSlice";
import "./modal-contents.module.css";

export const Modal = () => {
  const modalState = useAppSelector((state) => state.modal.show);
  const dispatch = useAppDispatch();

  const data = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: { eq: "unsplash.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              quality: 95
              formats: [AUTO]
              height: 2000
              width: 2000
              layout: FULL_WIDTH
              transformOptions: { rotate: 180, fit: COVER, cropFocus: CENTER }
            )
          }
        }
      }
    `,
  );

  const bgImage = getImage(data.placeholderImage);

  if (!modalState) return null;

  return (
    <div className="!fixed top-0 z-10 flex justify-center text-center h-screen w-screen bg-[#080818] modal">
      {bgImage && (
        <GatsbyImage
          image={bgImage}
          alt=""
          className="!fixed h-screen w-screen"
        />
      )}
      <div className="bg-white max-w-prose self-center p-8 rounded-md shadow-lg z-20">
        <h1 className="text-2xl font-bold font-mono text-center mb-4">
          Hi there 👋
        </h1>
        <p>
          Please note that the following resume <strong>is not real</strong>. In
          fact, <strong>this person does not exist</strong>.
        </p>
        <p>
          All of this data has been generated with a library called{" "}
          <a href="https://github.com/faker-js/faker">faker</a>. None of it is
          real data, or intended to reflect or mimic a real person. Any
          similarities to people living or dead is purely coincidental.
        </p>
        <p>
          The details in the contact section may not exist. If they do, their
          inclusion in this project <strong>was not intentional</strong> and any
          views that their owners express are their own. Please{" "}
          <strong>do not try to contact them</strong>.
        </p>

        <button
          type="submit"
          onClick={() => dispatch(toggleVisible())}
          className="hover:bg-orchid-900 bg-orchid-700 text-white rounded-md py-2 px-4 mx-auto block my-4"
        >
          I understand
        </button>
      </div>
    </div>
  );
};

export default Modal;
