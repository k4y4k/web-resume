import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import React from "react";

interface LinkedInTypes {
  username: string | null;
  url: string | null;
}

const LinkedIn = ({ username, url }: LinkedInTypes) => {
  if (!url || !username || url === "" || username === "") return null;

  return (
    <li>
      <a
        data-testid="contactLinkedin"
        rel="noreferrer"
        href={url}
        target="_blank"
      >
        <FiLinkedin /> {url.replace("https://", "")}
      </a>
    </li>
  );
};

export default LinkedIn;
