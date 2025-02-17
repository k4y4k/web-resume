/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable sort-imports */

import { IconContext } from "@react-icons/all-files";
import * as React from "react";
import { Helmet } from "react-helmet";
import { GlobalStyles } from "twin.macro";
import "../index.css";
import dayjs from "dayjs";
import { graphql, useStaticQuery } from "gatsby";
import Resume from "../components/pages/Resume";

const IndexRoute = (): JSX.Element => {
  const { name }: { name: string } = useStaticQuery(graphql`
    {
      jsonName: file(extension: { eq: "json" }, name: { eq: "data" }) {
        childDataJson {
          basics {
            name
          }
        }
      }
    }
  `).jsonName.childDataJson.basics;

  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <Helmet defer={false}>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{`${name} - Resume - ${dayjs().format("DD-MM-YYYY")}`}</title>
        <meta name="description" content={`${name}'s online resume`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <GlobalStyles />

      <main tw="flex flex-row flex-wrap place-content-evenly">
        <Resume />
      </main>
    </IconContext.Provider>
  );
};

export default IndexRoute;
