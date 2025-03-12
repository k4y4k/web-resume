import { FiPhone } from "@react-icons/all-files/fi/FiPhone";
import React from "react";

interface PhoneTypes {
  phone: string;
}

const Phone = ({ phone }: PhoneTypes) => {
  if (typeof phone !== "string" || phone.trim() === "") return null;

  return (
    <li>
      <a data-testid="contactEmail" href={`tel:${phone.replace(/ /gi, "")}`}>
        <FiPhone /> {phone}
      </a>
    </li>
  );
};

export default Phone;
