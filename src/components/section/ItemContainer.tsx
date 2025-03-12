import React from "react";
import transformArrayToBulletPoints from "../../helpers/transformArrayToBulletPoints";
import Dates from "./ItemDates";
import Details from "./ItemDetails";
import Subtitle from "./ItemSubtitle";
import Title from "./ItemTitle";
import "./item.module.css";

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

  rawDates?: string;
}

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
    <div data-testid="sectionItemContainer" className="border border-red-400">
      <Title title={title ?? studyTitle} />
      <div data-testid="byline" className="italic mb-1">
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
