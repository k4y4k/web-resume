import "twin.macro";
import * as React from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const DateLine = (): JSX.Element => {
  return (
    <p
      tw="text-orchid-700 font-bold uppercase text-xl font-mono "
      style={{ fontSize: "21px" }}
    >
      {dayjs().format("LL")}
    </p>
  );
};

export default DateLine;
