import * as React from "react";
import tw from "twin.macro";

interface SubtitleProps {
  subtitle: string;
  lightmode: boolean;
  compact: boolean;
}

const Subtitle = ({
  subtitle,
  lightmode,
  compact,
}: SubtitleProps): JSX.Element | null => {
  if (subtitle === "") return null;

  return (
    <h2
      css={[
        tw`my-2 text-2xl `,
        lightmode ? tw`text-white` : tw`text-orchid-600`,
        compact && tw`text-2xl`,
      ]}
      data-testid="headerSubtitle"
    >
      {subtitle}
    </h2>
  );
};

export default Subtitle;
