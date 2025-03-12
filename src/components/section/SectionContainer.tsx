import React, { type ReactNode, type ReactElement } from "react";
import SectionTitle from "./SectionTitle";

interface SectionContainerTypes {
  title: string;
  children: ReactNode;
}

const SectionContainer = ({
  title,
  children,
}: SectionContainerTypes): ReactElement => (
  <div data-testid="sectionContainer" className="p-4 py-2">
    <SectionTitle title={title} />
    {children}
  </div>
);

export default SectionContainer;
