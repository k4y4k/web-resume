import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import tw from "twin.macro";
import Subtitle from "../header/Subtitle";
import Title from "../header/Title";

interface PureHeaderTypes {
  title: string;
  subtitle: string;
  isCoverLetter: boolean;
}

interface HeaderTypes {
  isCoverLetter?: boolean;
}

export const PureHeader = ({
  title,
  subtitle,
  isCoverLetter,
}: PureHeaderTypes) => (
  <div data-testid="header" tw="text-center">
    <Title isCoverLetter={isCoverLetter} title={title} />
    <Subtitle isCoverLetter={isCoverLetter} subtitle={subtitle} />
    <hr css={[tw`block my-4 bg-white`]} />
  </div>
);

export const Header = ({ isCoverLetter = false }: HeaderTypes) => {
  const data = useStaticQuery(graphql`
    {
      text: file(extension: { eq: "json" }, name: { eq: "data" }) {
        childDataJson {
          basics {
            name
            label
          }
        }
      }
    }
  `);

  const { name, label } = data.text.childDataJson.basics;

  return (
    <PureHeader isCoverLetter={isCoverLetter} title={name} subtitle={label} />
  );
};

export default Header;
