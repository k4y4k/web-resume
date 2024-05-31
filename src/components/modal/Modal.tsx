import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import tw, { css } from "twin.macro";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import { FiGlobe } from "@react-icons/all-files/fi/FiGlobe";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";
import { getImage } from "gatsby-plugin-image";

const modalStyles = css`
  p {
    ${tw`mb-2`}
  }

  a {
    ${tw`p-1 mx-1 underline cursor-pointer rounded-md`}

    &::after {
      content: ' ➜';
    }

    &:hover {
      ${tw`text-white bg-purple-800`}
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

const modalBgStyles = css`
  ${tw`fixed! top-0 z-40 flex justify-center text-center bg-purple-900`}
  height: 100vh;
  width: 100%;
`;

interface modalTypes {
  modalBg: unknown;
}

export const PureModal = ({ modalBg }: modalTypes): JSX.Element | null => {
  const [open, isOpen] = React.useState(true);

  const showModal = process.env.GATSBY_SHOW_MODAL ?? "";

  if (showModal === "") return null;

  if (!open) return null;

  return (
    <BackgroundImage
      css={modalBgStyles}
      Tag="div"
      {...modalBg}
      preserveStackingContext
    >
      <div
        css={modalStyles}
        tw="bg-white max-w-prose self-center p-6 rounded-md shadow-md"
      >
        <h1 tw="text-2xl font-bold font-mono text-center mb-4">Hi there 👋</h1>
        <p>
          Looks like you've found{" "}
          <a href="https://github.com/k4y4k/web-resume">k4y4k/web-resume</a>!
        </p>
        <p>
          Please note that the following resume <strong>is not mine</strong>. In
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
          views that their owners express are not mine. Please{" "}
          <strong>do not try to contact them</strong>. They aren't me.
        </p>
        <p>
          If you do want to contact me, you can find me on Twitter:
          <span>
            <a href="https://twitter.com/mynameis_kayak">
              <FiTwitter /> @mynameis_kayak
            </a>
          </span>
          or view my website
          <span>
            <a href="https://kayak.rocks">
              <FiGlobe /> kayak.rocks
            </a>
          </span>
          .
        </p>

        <button
          onClick={() => isOpen(false)}
          tw="hover:bg-purple-900 bg-purple-700 text-white rounded-md py-2 px-4 mx-auto block my-4"
        >
          I understand
        </button>
      </div>
    </BackgroundImage>
  );
};

const Modal = (): JSX.Element | null => {
  const { placeholderImage } = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "unsplash.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
            transformOptions: {
              duotone: { shadow: "#000000", highlight: "#ffffff", opacity: 50 }
              rotate: 180
            }
          )
        }
      }
    }
  `);

  const modalBg = convertToBgImage(getImage(placeholderImage));

  return <PureModal modalBg={modalBg} />;
};

export default Modal;
