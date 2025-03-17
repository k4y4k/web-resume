import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import React from "react";

interface GitHubTypes {
  username: string | null;
}

const GitHub = ({ username }: GitHubTypes) => {
  if (username === "" || username === null) return null;

  return (
    <li>
      <a
        data-testid="contactGithub"
        rel="noreferrer"
        target="_blank"
        href={`https://github.com/${username}`}
      >
        <FiGithub /> github.com/{username}
      </a>
    </li>
  );
};

export default GitHub;
