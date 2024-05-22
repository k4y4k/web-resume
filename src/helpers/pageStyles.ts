/* eslint-disable @typescript-eslint/no-var-requires */
import tw, { css } from "twin.macro";

const paperSizes = require("@5no/paper-sizes");
const paperOptions = { dpi: 300, type: "mm" };
export const a4Data = paperSizes("A4", paperOptions);

const pageStyles = css`
  ${tw`p-12 my-12 shadow-lg `}
  width: ${a4Data.widthToMillimeters()}mm;
  max-width: ${a4Data.widthToMillimeters()}mm;
  height: ${a4Data.heightToMillimeters()}mm;
  max-height: ${a4Data.heightToMillimeters()}mm;

  @media print {
    ${tw`m-0`}
  }

  @media screen and (min-width: 1200px) {
    ${tw`my-12`}
  }
`;

export default pageStyles;
