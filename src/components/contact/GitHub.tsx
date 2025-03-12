import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import React from "react";

interface GitHubTypes {
  username: string | null;
}

const GitHub = ({ username }: GitHubTypes): JSX.Element | null => {
  if (username === "" || username === null) return null;

  return (
    <li>
      <a
        data-testid="contactGithub"
        rel="noreferrer"
        target="_blank"
        href={`https://github.com/${username}`}
      >
        <FiGithub /> {username}
      </a>
    </li>
  );
};

export default GitHub;
