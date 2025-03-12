import { FiMail } from "@react-icons/all-files/fi/FiMail";
import React from "react";

interface EmailTypes {
  email: string;
}

const Email = ({ email }: EmailTypes) => {
  if (email === "") return null;

  return (
    <li>
      <a data-testid="contactEmail" href={`mailto:${email}`}>
        <FiMail /> {email}
      </a>
    </li>
  );
};

export default Email;
