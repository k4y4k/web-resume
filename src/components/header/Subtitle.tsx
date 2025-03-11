import * as React from "react";
import tw from "twin.macro";

interface SubtitleProps {
  subtitle: string;
  isCoverLetter?: boolean;
}

const Subtitle = ({ subtitle, isCoverLetter = false }: SubtitleProps) => {
  if (subtitle === "") return null;

  return (
    <h2
      css={[
        tw`my-2 text-2xl `,
        tw`text-orchid-600`,
        isCoverLetter && tw`text-white text-xl px-6`,
      ]}
      data-testid="headerSubtitle"
    >
      {subtitle}
    </h2>
  );
};

export default Subtitle;
