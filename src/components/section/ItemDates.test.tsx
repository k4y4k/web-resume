import * as React from "react";
import { render, screen } from "@testing-library/react";
import ItemDates from "./ItemDates";

describe("<ItemDates />", () => {
  test("handles no dates", () => {
    render(<ItemDates from="" />);

    const dates = screen.queryByTestId("sectionItemDates");
    expect(dates).not.toBeInTheDocument();
    expect(dates).toMatchSnapshot();
  });

  test("handles badly formatted dates", () => {
    render(<ItemDates from="ABCD8" to="2020" />);
    const dates = screen.getByText("Error: Dates Not Valid");

    expect(dates).toBeInTheDocument();
    expect(dates).toMatchSnapshot();
  });

  test("bad from date", () => {
    render(<ItemDates from="2090000" to="2007-05" />);
    const dates = screen.getByText("Error: Dates Not Valid");

    expect(dates).toBeInTheDocument();
  });

  test("bad to and from date", () => {
    render(<ItemDates to="111111" from="29470" />);

    const dates = screen.getByText("Error: Dates Not Valid");
    expect(dates).toBeInTheDocument();
  });

  test("start date -> end date", () => {
    render(<ItemDates from="1970-01-01" to="2021-01-28" />);

    const dates = screen.getByTestId("sectionItemDates");
    expect(dates).toHaveTextContent("Jan 1970 - Jan 2021");
    expect(dates).toMatchSnapshot();
  });

  test("start date -> present (no end date)", () => {
    render(<ItemDates from="2012-05" />);

    const dates = screen.getByTestId("sectionItemDates");
    expect(dates).toBeInTheDocument();
    expect(dates).toHaveTextContent("May 2012 - Present");
    expect(dates).toMatchSnapshot();
  });

  test("day, month, year date expressed as Month, Year", () => {
    render(<ItemDates from="1991-12-25" />);

    const dates = screen.getByTestId("sectionItemDates");
    expect(dates).toBeInTheDocument();
    expect(dates).toHaveTextContent("Dec 1991 - Present");
  });

  test("month, year date expressed as Month, Year", () => {
    render(<ItemDates from="2020-10-27" to="2021-07-19" />);

    const dates = screen.getByTestId("sectionItemDates");
    expect(dates).toBeInTheDocument();
    expect(dates).toHaveTextContent("Oct 2020 - Jul 2021");
    expect(dates).toMatchSnapshot();
  });

  test("dates must make chronological sense", () => {
    render(<ItemDates from="2021-06-14" to="2020-04-22" />);

    const dates = screen.getByText("Error: Dates Not Chronological");
    expect(dates).toBeInTheDocument();
    expect(dates).toMatchSnapshot();
  });

  test("same dates: years", () => {
    render(<ItemDates from="2012-01-01" to="2013-01-01" />);

    const dates = screen.getByTestId("sectionItemDates");
    expect(dates).toHaveTextContent("2012 - 2013");
    expect(dates).toMatchSnapshot();
  });

  test("same dates: just one year", () => {
    render(<ItemDates from="1999-01-01" to="1999-01-01" />);

    const dates = screen.getByTestId("sectionItemDates");
    expect(dates).toHaveTextContent("1999");
    expect(dates).toMatchSnapshot();
  });

  test("same dates: one day event", () => {
    render(<ItemDates from="1899-08-31" to="1899-08-31" />);

    const dates = screen.getByTestId("sectionItemDates");
    expect(dates).toHaveTextContent("1899");
  });

  test("from valid, to invalid", () => {
    render(<ItemDates from="2003-08-04" to="GHOST?" />);

    const date = screen.getByTestId("sectionItemDates");
    expect(date).toHaveTextContent(/valid/gi);
  });
});
