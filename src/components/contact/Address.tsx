import { FiMapPin } from "@react-icons/all-files/fi/FiMapPin";
import React from "react";

interface AddressTypes {
  city: string;
  region: string;
  restrictDisplay?: boolean;
}

const Address = ({ city, region }: AddressTypes) => {
  // if there isn't a 123 Example Rd-type datum (non-restricted) or
  // a city (restricted), assume there's nothing else
  if (city === "") return null;

  // restricted mode enabled by default
  return (
    <li
      className="!whitespace-normal flex flex-row flex-nowrap align-middle"
      data-testid="contactAddress"
      id="address"
    >
      <FiMapPin />
      <span className="ml-[3px]">
        {city}, {region}
      </span>
    </li>
  );
};

export default Address;
