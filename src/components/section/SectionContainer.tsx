/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from "react";
import tw, { css } from "twin.macro";
import SectionTitle from "./SectionTitle";

interface SectionContainerTypes {
  title: string;
  children: React.ReactNode;
  onCoverLetter?: boolean;
}

const sectionStyles = css`
  ${tw`p-4 py-2`}
`;

const SectionContainer = ({
  title,
  children,
  onCoverLetter = false,
}: SectionContainerTypes): React.ReactElement => (
  <div data-testid="sectionContainer" css={sectionStyles}>
    <SectionTitle onCoverLetter={onCoverLetter} title={title} />
    {children}
  </div>
);

export default SectionContainer;
