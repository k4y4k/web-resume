import "twin.macro";
import * as React from "react";

interface ThanksProps {
  name: string;
}

const ThanksForComingToMyTEDTalk = ({ name }: ThanksProps): JSX.Element => {
  return (
    <>
      <p tw="pb-0! mt-4">Thank you,</p>
      <p tw="italic">{name}</p>
    </>
  );
};

export default ThanksForComingToMyTEDTalk;
