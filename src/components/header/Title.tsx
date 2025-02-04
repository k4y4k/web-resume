import * as React from "react";
import tw, { css } from "twin.macro";

interface TitleProps {
  title: string;
  lightmode: boolean;
  compact: boolean;
}

const titleStyles = css`
  ${tw`mb-0 mt-2 font-mono text-4xl font-bold`}

  @media print {
    ${tw`m-0 shadow-none m-0`}
  }
`;

const Title = ({
  title,
  lightmode,
  compact,
}: TitleProps): JSX.Element | null => {
  if (title === "") return null;

  return (
    <h1
      data-testid="headerTitle"
      css={[
        lightmode ? tw`text-white` : tw`text-orchid-600`,
        compact && tw`text-3xl`,
        titleStyles,
      ]}
    >
      {title}
    </h1>
  );
};

export default Title;
