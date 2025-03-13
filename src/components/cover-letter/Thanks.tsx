import React from "react";

const Thanks = ({ name }: { name: string }) => {
  return (
    <>
      <p className="mt-4 !pb-0">Sincerely,</p>
      <p className="pb-0">{name}</p>
    </>
  );
};

export default Thanks;
