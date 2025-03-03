import "twin.macro";
import * as React from "react";

interface ThanksProps {
  name: string;
  number: string;
}

const Thanks = ({ name, number }: ThanksProps): JSX.Element => {
  return (
    <>
      <p tw="mt-4">Yours sincerely,</p>
      <p tw="pb-0!">{name}</p>
      <p>{number}</p>
    </>
  );
};

export default Thanks;
