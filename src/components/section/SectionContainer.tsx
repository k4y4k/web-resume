import React, { type ReactNode, type ReactElement } from "react";
import SectionTitle from "./SectionTitle";

interface SectionContainerTypes {
  title: string;
  children: ReactNode;
  onCoverLetter?: boolean;
}

const SectionContainer = ({
  title,
  children,
  onCoverLetter = false,
}: SectionContainerTypes): ReactElement => (
  <div
    data-testid="sectionContainer"
    className="p-4 py-2 border-blue-400 border"
  >
    <SectionTitle onCoverLetter={onCoverLetter} title={title} />
    {children}
  </div>
);

export default SectionContainer;
