import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface AddressGreetingProps {
  letterContents: {
    childMarkdownRemark: {
      frontmatter: {
        recruiterFirstName: string;
        recruiterLastName: string;
        company?: string;

        location?: string;

        city?: string;
        countryCode?: string;
        postalCode?: string;
        region?: string;
        address?: string;
      };
    };
  };
}

const AddressGreeting = () => {
  const { letterContents }: AddressGreetingProps = useStaticQuery(graphql`
    {
      letterContents: file(extension: { eq: "md" }, name: { eq: "letter" }) {
        childMarkdownRemark {
          frontmatter {
            recruiterFirstName
            recruiterLastName
            company

            location

            address
            city
            countryCode
            postalCode
            region
          }
        }
      }
    }
  `);

  const {
    recruiterFirstName,
    recruiterLastName,
    location,
    city,
    countryCode,
    postalCode,
    region,
    address,
    company,
  } = letterContents.childMarkdownRemark.frontmatter;

  return (
    <>
      <p className={location ? "" : "!pb-0"}>
        {recruiterFirstName}{" "}
        {recruiterLastName === "_" ? null : recruiterLastName}
      </p>
      <p className="!pb-0">{company}</p>
      {location && <p className="pb-0">{location}</p>}
      {!location && (
        <>
          <p className="!pb-0">{address}</p>
          <p>
            {city} {countryCode} {region} {postalCode}
          </p>
        </>
      )}

      <h1 className="my-2 font-bold text-xl">Dear {recruiterFirstName},</h1>
    </>
  );
};

export default AddressGreeting;
