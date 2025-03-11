import "twin.macro";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

interface AddressGreetingProps {
  letterContents: {
    childMarkdownRemark: {
      frontmatter: {
        recruiterFirstName: string;
        recruiterLastName: string;
        location: string;
        city: string;
        countryCode: string;
        postalCode: string;
        region: string;
      };
    };
  };
}

const AddressGreeting = (): JSX.Element => {
  const { letterContents }: AddressGreetingProps = useStaticQuery(graphql`
    {
      letterContents: file(extension: { eq: "md" }, name: { eq: "letter" }) {
        childMarkdownRemark {
          frontmatter {
            recruiterFirstName
            recruiterLastName
            location
          }
        }
      }
    }
  `);

  const { recruiterFirstName, recruiterLastName, location } =
    letterContents.childMarkdownRemark.frontmatter;

  return (
    <>
      <p tw="pb-0!">
        {recruiterFirstName}{" "}
        {recruiterLastName === "_" ? null : recruiterLastName}
      </p>
      <p tw="pb-0!">{location}</p>

      <h1 tw="mt-4 mb-1 font-bold text-xl">Dear {recruiterFirstName},</h1>
    </>
  );
};

export default AddressGreeting;
