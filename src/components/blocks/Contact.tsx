import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import tw, { css } from "twin.macro";
import getNetworkUsernames from "../../helpers/getNetworkUsernames";
import Address from "../contact/Address";
import Email from "../contact/Email";
import GitHub from "../contact/GitHub";
import LinkedIn from "../contact/LinkedIn";
import Phone from "../contact/Phone";
import SectionContainer from "../section/SectionContainer";

interface PureContactTypes {
  restrictDisplay?: boolean;
  compact?: boolean;
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

const iconStyles = css`
  ${tw`p-0 m-0`}

  .icon {
    ${tw`inline-block mx-1 text-base align-middle text-orchid-700`}
    margin-bottom: 0.125rem;
    max-width: 15px;
  }

  li {
    ${tw`py-1 mx-1 -ml-1 list-none whitespace-nowrap`}

    a {
      ${tw`py-1 text-black no-underline`}
    }

    a:hover {
      ${tw`text-white bg-purple-800 rounded-md`}

      .icon {
        color: white;
      }
    }
  }

  a::after {
    content: " ➜";
    ${tw`mr-1`}
  }
`;

const compactStyles = css`
  .icon {
    ${tw`text-white`}
  }

  a {
    ${tw`pr-1`}
  }

  li,
  a {
    ${tw`text-white!`}
  }

  li {
    ${tw`p-0 m-0 my-4`}

    a::after {
      content: none;
    }
  }

  li:nth-of-type(1) {
    ${tw`mt-0`}
  }
`;

export const PureContact = ({
  restrictDisplay = true,
  compact = false,
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
  return (
    <SectionContainer onCoverLetter={compact} title="Contact">
      <ul css={[iconStyles, compact && compactStyles]} data-testid="contact">
        <Phone phone={phone} />
        <Email email={email} />
        {technical && (
          <>
            {!compact && <GitHub username={github} />}
            <LinkedIn url={linkedinUrl} username={linkedinUser} />
          </>
        )}

        <Address
          restrictDisplay={restrictDisplay}
          city={city}
          region={region}
          countryCode={countryCode}
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
      compact={compact}
      restrictDisplay={restrictDisplay}
    />
  );
};

export default Contact;
