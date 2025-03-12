import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import getNetworkUsernames from "../../helpers/getNetworkUsernames";
import Address from "../contact/Address";
import Email from "../contact/Email";
import GitHub from "../contact/GitHub";
import LinkedIn from "../contact/LinkedIn";
import Phone from "../contact/Phone";
import SectionContainer from "../section/SectionContainer";
import { block, coverLetter } from "./contact.module.css";

interface PureContactTypes {
  restrictDisplay?: boolean;
  onCoverLetter?: boolean;
  email: string;
  twitter: string | null;
  github: string | null;
  website: string;
  linkedinUser: string | null;
  linkedinUrl: string | null;
  city: string;
  region: string;
  countryCode: string;
  phone: string;
  technical: boolean;
}

interface ContactTypes {
  restrictDisplay?: boolean;
  compact?: boolean;
}

export const PureContact = ({
  restrictDisplay = true,
  onCoverLetter = false,
  email,
  github,
  technical,
  phone,
  linkedinUser,
  linkedinUrl,
  city,
  region,
  countryCode,
}: PureContactTypes) => {
  if (onCoverLetter) {
    return (
      <ul className={coverLetter}>
        <Phone phone={phone} />
        <Email email={email} />
        <LinkedIn url={linkedinUrl} username={linkedinUser} />
      </ul>
    );
  }

  return (
    <SectionContainer title="Contact">
      <ul className={block} data-testid="contact">
        <Phone phone={phone} />
        <Email email={email} />
        {technical && !onCoverLetter && (
          <>
            <GitHub username={github} />
            <LinkedIn url={linkedinUrl} username={linkedinUser} />
          </>
        )}

        <Address
          restrictDisplay={restrictDisplay}
          city={city}
          region={region}
        />
      </ul>
    </SectionContainer>
  );
};

export const Contact = ({ compact, restrictDisplay }: ContactTypes) => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "json" }, name: { eq: "data" }) {
        childDataJson {
          basics {
            email
            website
            phone
            technical
            location {
              city
              region
              countryCode
            }
            profiles {
              network
              username
              url
            }
          }
        }
      }
    }
  `);

  const { email, website, phone, technical } = data.file.childDataJson.basics;

  // extract list of networks
  const { profiles } = data.file.childDataJson.basics;
  const twitter = getNetworkUsernames(profiles, "twitter");
  const github = getNetworkUsernames(profiles, "github");
  const linkedin = getNetworkUsernames(profiles, "linkedin", true);

  const { city, countryCode, region } = data.file.childDataJson.basics.location;

  const props = {
    email,
    website,
    phone,
    technical,
    twitter,
    github,
    linkedinUser: linkedin ? linkedin.username : null,
    linkedinUrl: linkedin ? linkedin.url : null,
    city,
    region,
    countryCode,
  };

  return (
    <PureContact
      {...props}
      onCoverLetter={compact}
      restrictDisplay={restrictDisplay}
    />
  );
};

export default Contact;
