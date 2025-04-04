import React from "react";

interface BucketTypes {
  skills: string[];
}

const Bucket = ({ skills }: BucketTypes) => {
  if (skills.length === 1 && skills[0] === "") return null;

  const deDupedSkills = Array.from(new Set(skills));

  return (
    <div data-testid="skillsBucket">
      {deDupedSkills.map((el) => (
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
