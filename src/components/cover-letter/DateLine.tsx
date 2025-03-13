import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import React from "react";
dayjs.extend(localizedFormat);

const DateLine = () => {
  return (
    <p className="text-orchid-600 font-bold uppercase text-xl font-mono">
      {dayjs().format("LL")}
    </p>
  );
};

export default DateLine;
