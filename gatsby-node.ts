import type { GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    actions.createTypes(`
      type DataJsonBasics implements Node {
        technical: Boolean
      }
  `);
  };
