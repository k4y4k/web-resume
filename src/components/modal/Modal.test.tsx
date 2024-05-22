/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PureModal } from "./Modal";

jest.mock("short-uuid");

describe("<PureModal />", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  const data = {
    fluid: {
      src: "/static/55019b471591030c02c094b138609888/1a09b/unsplash.jpg",
      srcSet:
        "/static/55019b471591030c02c094b138609888/c4ac9/unsplash.jpg 250w,\n/static/55019b471591030c02c094b138609888/3d684/unsplash.jpg 500w,\n/static/55019b471591030c02c094b138609888/1a09b/unsplash.jpg 1000w",
      sizes: "(min-width: 1000px) 1000px, 100vw",
      srcSetAvif:
        "/static/55019b471591030c02c094b138609888/b4a16/unsplash.avif 250w,\n/static/55019b471591030c02c094b138609888/819e2/unsplash.avif 500w,\n/static/55019b471591030c02c094b138609888/97459/unsplash.avif 1000w",
      srcAvif: "",
      srcSetWebp:
        "/static/55019b471591030c02c094b138609888/7a308/unsplash.webp 250w,\n/static/55019b471591030c02c094b138609888/22b76/unsplash.webp 500w,\n/static/55019b471591030c02c094b138609888/00280/unsplash.webp 1000w",
      srcWebp: "",
      base64:
        "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYEBQcD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgQF/9oADAMBAAIQAxAAAAFLjZ31VWhFiSaKei6YlX5EcrAj/8QAHRAAAQQDAQEAAAAAAAAAAAAAAwABAgQFEhQRJP/aAAgBAQABBQIVvrFSMOxP60YugaF0lcj6xWRx7HZ20n0tNWRuImSD4Rf/xAAaEQEAAQUAAAAAAAAAAAAAAAABAAIDEBEh/9oACAEDAQE/AS8nIBqVY//EABkRAQEBAAMAAAAAAAAAAAAAAAEAAhESQf/aAAgBAgEBPwFyM82j27N//8QAIBAAAQMDBQEAAAAAAAAAAAAAAgABAxEhMRASIkFhUf/aAAgBAQAGPwKUnjCMLs91PHTcEd2cHyuZsfx6KSP6d3QsB7G79XLPiKeHPY170qWU167k5+00/8QAHhAAAgMAAgMBAAAAAAAAAAAAAREAITFBYVFxgbH/2gAIAQEAAT8hpqJWPsIcCMYYR/RkLG84Rsd1DARZi/x1PWqjaYzPJ1cEJ8gjlENJHI4dx5h9yUca8iCB9/dOKf/aAAwDAQACAAMAAAAQV+MA/8QAGxEBAAICAwAAAAAAAAAAAAAAAQARIUGBsfD/2gAIAQMBAT8QLvk31Ehp9zBsls//xAAbEQEBAAEFAAAAAAAAAAAAAAABABEhMVGB8P/aAAgBAgEBPxBvhkFNPdRbLHf/xAAfEAEAAgICAgMAAAAAAAAAAAABESEAMUFxUWGBkfD/2gAIAQEAAT8QqC4BqCCWmxn3g+AsHWPGg4Md43QJbyqp4GVq4omsTqhDbgenfjJwDFDKakdh+tySPIC0QkyksMzhD5ChYZCRak9/OMlr1fCMx94ORmeVcYib2EkdC4e5nEFCg8pga9ViRz//2Q==",
      aspectRatio: 0.6666666666666666,
    },
  };

  test("does not render if GATSBY_SHOW_MODAL is false", () => {
    const uuid = require("short-uuid");
    uuid.generate.mockImplementation(() => "73WakrfVbNJBaAmhQtEeDv");

    const { container } = render(<PureModal modalBg={data} />);

    expect(container).toMatchSnapshot();
  });

  test("does not render if GATSBY_SHOW_MODAL is ''", () => {
    process.env.GATSBY_SHOW_MODAL = "";
    const uuid = require("short-uuid");
    uuid.generate.mockImplementation(() => "73WakrfVbNJBaAmhQtEeDv");

    const { container } = render(<PureModal modalBg={data} />);

    expect(container).toMatchSnapshot();
  });

  test("renders OK otherwise", () => {
    process.env.GATSBY_SHOW_MODAL = "true";

    const uuid = require("short-uuid");
    uuid.generate.mockImplementation(() => "73WakrfVbNJBaAmhQtEeDv");

    const { container } = render(<PureModal modalBg={data} />);

    expect(container).toMatchSnapshot();
  });

  test("button makes it go away ", () => {
    process.env.GATSBY_SHOW_MODAL = "true";

    const uuid = require("short-uuid");
    uuid.generate.mockImplementation(() => "73WakrfVbNJBaAmhQtEeDv");

    const { container } = render(<PureModal modalBg={data} />);

    screen.getByText("I understand", { exact: false }).click();

    expect(container).toMatchSnapshot();
  });
});
