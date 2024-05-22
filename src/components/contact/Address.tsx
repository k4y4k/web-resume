import * as React from "react";
import tw, { css } from "twin.macro";
import { FiMapPin } from "@react-icons/all-files/fi/FiMapPin";

interface AddressTypes {
  city: string;
  countryCode: string;
  region: string;
  restrictDisplay?: boolean;
}

const AddressStyles = css`
  ${tw`whitespace-normal! flex flex-row flex-nowrap align-middle`}

  .icon {
    ${tw`flex-grow`}
    margin-right: 8px;
  }
`;

const Address = ({
  city,
  countryCode,
  region,
}: AddressTypes): JSX.Element | null => {
  // if there isn't a 123 Example Rd-type datum (non-restricted) or
  // a city (restricted), assume there's nothing else
  if (city === "") return null;

  // restricted mode enabled by default
  return (
    <li css={AddressStyles} data-testid="contactAddress" id="address">
      <FiMapPin />
      <span>
        {city}, {region + ","} {countryCode}
      </span>
    </li>
  );
};

export default Address;
