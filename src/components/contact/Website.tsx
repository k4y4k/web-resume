import { FiGlobe } from "@react-icons/all-files/fi/FiGlobe";
import React from "react";

interface WebsiteTypes {
  url: string;
}

const Website = ({ url }: WebsiteTypes): JSX.Element | null => {
  if (url === "") return null;

  const stripped = url?.replace(/https?:\/\//i, "");

  return (
    <li>
      <a
        data-testid="contactWebsite"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <FiGlobe /> {stripped}
      </a>
    </li>
  );
};

export default Website;
