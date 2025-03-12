import React from "react";

interface TitleProps {
  title: string;
  isCoverLetter?: boolean;
}

const Title = ({ title, isCoverLetter = false }: TitleProps) => {
  if (title === "") return null;

  return (
    <h1
      data-testid="headerTitle"
      className={
        // [INFO] notice that the modifiers come first, before the base styles
        `${
          isCoverLetter ? "text-3xl pt-5" : ""
        } text-orchid-600 font-mono text-3xl font-bold print:m-0 print:shadow-none`.trim()
      }
    >
      {title}
    </h1>
  );
};

export default Title;
