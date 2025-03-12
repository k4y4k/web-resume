import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface AddressGreetingProps {
  letterContents: {
    childMarkdownRemark: {
      frontmatter: {
        recruiter: string;
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
            recruiter
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
    recruiter,
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
      {recruiter && <p className="!pb-0">{recruiter}</p>}
      {company && <p className="!pb-0">{company}</p>}
      {location && <p className="pb-0">{location}</p>}
      {!location && (
        <>
          {address && <p className="!pb-0">{address}</p>}
          <p>
            {city} {countryCode} {region} {postalCode}
          </p>
        </>
      )}

      <h1 className="my-2 font-bold text-xl">
        Dear {recruiter.split(" ")[0]},
      </h1>
    </>
  );
};

export default AddressGreeting;
