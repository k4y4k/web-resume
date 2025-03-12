const path = require("node:path");

const isDev = process.env.NODE_ENV.toLowerCase().includes("dev");

module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    DETECT_NODE_MUTATIONS: isDev,
  },
  graphqlTypegen: true,
  pathPrefix: "/web-resume",
  siteMetadata: {
    title: "online resume",
  },
  trailingSlash: "always",
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:400,900", "Inconsolata:400,900"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: path.join(__dirname, "/src/data/"),
      },
    },
  ],
};
