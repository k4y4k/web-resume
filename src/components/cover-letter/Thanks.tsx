import "twin.macro";
import * as React from "react";

const Thanks = ({ name }: { name: string }) => {
  return (
    <>
      <p tw="mt-4">Yours sincerely,</p>
      <p tw="pb-0!">{name}</p>
    </>
  );
};

export default Thanks;
