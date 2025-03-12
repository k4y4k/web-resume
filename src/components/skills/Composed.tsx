import React from "react";
import ItemTitle from "../section/ItemTitle";
import Bucket from "./Bucket";

interface ComposedTypes {
  heading: string;
  bucket: string[];

  compact: boolean;
}

const Composed = ({ heading, bucket, compact }: ComposedTypes) => {
  if (JSON.stringify(bucket) === "[]") return null;

  if (JSON.stringify(bucket) === '[""]') return null;

  if (heading === "") return null;

  return (
    <div data-testid="skillsComposed" className="my-2">
      {compact ? null : <ItemTitle title={heading} />}
      <Bucket skills={bucket} />
    </div>
  );
};

export default Composed;
