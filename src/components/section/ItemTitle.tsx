import React from "react";

interface ItemTitleTypes {
  title: string;
}

const ItemTitle = ({ title }: ItemTitleTypes) => {
  if (title === "") return null;

  return (
    <h1 data-testid="itemTitle" className="mb-1 font-bold text-lg leading-5">
      {title}
    </h1>
  );
};

export default ItemTitle;
