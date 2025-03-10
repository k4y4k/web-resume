import { IconContext } from "@react-icons/all-files";
import * as React from "react";
import { GlobalStyles } from "twin.macro";
import "../index.css";
import dayjs from "dayjs";
import { graphql } from "gatsby";
import CoverLetter from "../components/pages/CoverLetter";
import Resume from "../components/pages/Resume";
import Modal from "../components/modal/Modal";

const IndexRoute = () => {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <GlobalStyles />

      <main
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "place-content-evenly",
        }}
      >
        <Modal />

        <Resume />
        <CoverLetter />
      </main>
    </IconContext.Provider>
  );
};

export const query = graphql`
  {
    jsonName: file(extension: { eq: "json" }, name: { eq: "data" }) {
      childDataJson {
        basics {
          name
        }
      }
    }
  }
`;

export function Head({ data }) {
  const { name } = data.jsonName.childDataJson.basics;

  return (
    <>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{`${name} - Resume - ${dayjs().format("DD-MM-YYYY")}`}</title>
    </>
  );
}

export default IndexRoute;
