import React from "react";

interface TitleTypes {
  category: string;
}

const Title = ({ category }: TitleTypes) => {
  if (category === "") return null;

  return <h2 data-testid="skillsTitle">{category}</h2>;
};

export default Title;
