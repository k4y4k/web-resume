import React from "react";

interface BucketTypes {
  skills: string[];
}

const Bucket = ({ skills }: BucketTypes): JSX.Element | null => {
  if (skills.length === 1 && skills[0] === "") return null;

  return (
    <div data-testid="skillsBucket">
      {skills.map((el) => (
        <p
          style={{
            marginRight: "0.66rem",
            marginBottom: "0.2rem",
            display: "inline-block",
            lineHeight: "1.15",
          }}
          key={el}
        >
          {`${el}`}
        </p>
      ))}
    </div>
  );
};

export default Bucket;
