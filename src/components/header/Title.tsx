import * as React from "react";
import tw from "twin.macro";

interface TitleProps {
  title: string;
  lightmode: boolean;
  compact: boolean;
}

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
        tw`mb-0 font-mono text-6xl font-bold`,
        lightmode ? tw`text-white` : tw`text-orchid-600`,
        compact && tw`text-5xl`,
      ]}
    >
      {title}
    </h1>
  );
};

export default Title;
