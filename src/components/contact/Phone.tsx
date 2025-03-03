import { FiPhone } from "@react-icons/all-files/fi/FiPhone";
import * as React from "react";

interface PhoneTypes {
  phone: string;
}

const Phone = ({ phone }: PhoneTypes) => {
  if (phone === "") return null;

  return (
    <li>
      <a
        data-testid="contactEmail"
        href={`tel:${phone}`}
        style={{ fontWeight: 900 }}
      >
        <FiPhone /> {phone}
      </a>
    </li>
  );
};

export default Phone;
