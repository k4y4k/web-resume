import * as React from "react";
import tw, { css } from "twin.macro";

interface TitleProps {
  title: string;
  isCoverLetter?: boolean;
}

const titleStyles = css`
  ${tw`text-orchid-600 mb-0 mt-2 font-mono text-4xl font-bold`}

  @media print {
    ${tw`m-0 shadow-none m-0`}
  }
`;

const Title = ({ title, isCoverLetter = false }: TitleProps) => {
  if (title === "") return null;

  return (
    <h1
      data-testid="headerTitle"
      css={[titleStyles, isCoverLetter && tw`text-white text-3xl pt-5`]}
    >
      {title}
    </h1>
  );
};

export default Title;
