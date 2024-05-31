import "twin.macro";
import * as React from "react";
import Bucket from "./Bucket";
import ItemTitle from "../section/ItemTitle";

interface ComposedTypes {
  heading: string;
  bucket: string[];

  compact: boolean;
}

const Composed = ({
  heading,
  bucket,
  compact,
}: ComposedTypes): JSX.Element | null => {
  // switching the logic was the only way to make this work

  if (JSON.stringify(bucket) === "[]") return null;

  if (JSON.stringify(bucket) === '[""]') return null;

  if (heading === "") return null;

  return (
    <div data-testid="skillsComposed" tw="my-2">
      {compact ? null : <ItemTitle title={heading} />}
      <Bucket skills={bucket} />
    </div>
  );

  // return null
};

export default Composed;
