import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw, { css } from "twin.macro";
import { toggleVisible } from "../../store/modalSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const modalStyle = css`
  p {
    ${tw`mb-2`}
  }

  a {
    ${tw`p-1 mx-1 underline cursor-pointer rounded-md`}

    &::after {
      content: " ➜";
    }

    &:hover {
      ${tw`text-white bg-orchid-800`}
    }
  }

  span {
    ${tw`mb-2 whitespace-nowrap`}
  }

  .icon {
    ${tw`inline-block align-middle`}
    margin-bottom: 0.125rem;
  }
`;

const modalContainerStyle = css`
  ${tw`fixed! top-0 z-10 flex justify-center text-center`}
  height: 100vh;
  width: 100%;
  background-color: #080818;
`;

const imageStyle = css`
  ${tw`fixed!`}
  height: 100vh;
  width: 100vw;
`;

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
    <div css={modalContainerStyle}>
      {bgImage && <GatsbyImage image={bgImage} alt="" css={imageStyle} />}
      <div
        css={modalStyle}
        tw="bg-white max-w-prose self-center p-6 rounded-md shadow-md z-20"
      >
        <h1 tw="text-2xl font-bold font-mono text-center mb-4">Hi there 👋</h1>
        <p>
          Please note that the following resume <strong>is not real</strong>. In
          fact, <strong>this person does not exist</strong>.
        </p>
        <p>
          All of this data has been generated with a library called{" "}
          <a href="https://github.com/marak/Faker.js/">faker.js</a>. None of it
          is real or intended to reflect or mimic a real person. Any
          similarities to people living or dead is purely coincidental.
        </p>
        <p>
          The accounts in the contact section may not exist. If they do, their
          inclusion in this project <strong>was not intentional</strong> and any
          views that their owners express are their own. Please{" "}
          <strong>do not try to contact them</strong>.
        </p>

        <button
          type="submit"
          onClick={() => dispatch(toggleVisible())}
          tw="hover:bg-orchid-900 bg-orchid-700 text-white rounded-md py-2 px-4 mx-auto block my-4"
        >
          I understand
        </button>
      </div>
    </div>
  );
};

export default Modal;
