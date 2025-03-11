import * as React from "react";
import tw, { css } from "twin.macro";
import transformArrayToBulletPoints from "../../helpers/transformArrayToBulletPoints";
import Dates from "./ItemDates";
import Details from "./ItemDetails";
import Subtitle from "./ItemSubtitle";
import Title from "./ItemTitle";

interface ItemContainerTypes {
  // experience
  title?: string;
  subtitle?: string;
  fromDate: string;
  toDate?: string;
  summary?: string;

  // education
  institution?: string;
  area?: string;
  studyType?: string;
  courses?: string[];

  // link
  link?: string;
  // rawDates?: string;
}

const itemStyles = css`
  ${tw`my-4`}

  :nth-of-type(1) {
    ${tw`mt-2`}
  }
`;

const ItemContainer = ({
  title,
  subtitle,
  fromDate,
  toDate,
  summary,
  institution,
  area,
  studyType,
  courses,
  link,
}: ItemContainerTypes) => {
  let studyTitle = "";
  let studyDetails = "";

  if (studyType !== undefined && area !== undefined) {
    // area and type
    if (studyType !== "" && area !== "") {
      studyTitle = `${studyType} of ${area}`;
    }

    // area but no type (e.g. online cert)
    if (studyType === "" && area !== "") studyTitle = area;

    if (courses !== undefined) {
      studyDetails = transformArrayToBulletPoints(courses);
    }
  }

  let displaySubtitle = true;
  if (subtitle === "" || institution === "") displaySubtitle = false;

  return (
    <div data-testid="sectionItemContainer" css={itemStyles}>
      <Title title={title ?? studyTitle} />
      <div data-testid="byline" tw="italic mb-1">
        {displaySubtitle ? (
          <>
            <Subtitle link={link} subtitle={subtitle ?? institution} />
            {" | "}
          </>
        ) : null}

        <Dates from={fromDate} to={toDate} />
      </div>
      <Details details={summary ?? studyDetails} />
    </div>
  );
};

export default ItemContainer;
