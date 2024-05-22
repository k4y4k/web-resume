import * as React from "react";
import DateLine from "./DateLine";
import MockDate from "mockdate";
import { render } from "@testing-library/react";

beforeEach(() => {
  MockDate.set(new Date("2021-06-15"));
});

afterEach(() => {
  MockDate.reset();
});

describe("DateLine", () => {
  test("renders OK", () => {
    const { container } = render(<DateLine />);

    expect(container).toMatchSnapshot();
  });
});
