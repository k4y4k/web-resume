import { IconContext } from "@react-icons/all-files";
import dayjs from "dayjs";
import { graphql } from "gatsby";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import Modal from "../components/modal/Modal";
import CoverLetter from "../components/pages/CoverLetter";
import Resume from "../components/pages/Resume";
import { store } from "../store";

const isDev = process.env.NODE_ENV?.toLowerCase().includes("dev");

const IndexRoute = () => {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <ReduxProvider store={store}>
        <main className="flex flex-row flex-wrap content-evenly">
          {!isDev && <Modal />}

          <Resume />
          <CoverLetter />
        </main>
      </ReduxProvider>
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
      <title>{`${name} - Resume - ${dayjs().format("YYYY")}`}</title>
    </>
  );
}

export default IndexRoute;
