import { IconContext } from "@react-icons/all-files";
import { type RenderOptions, render } from "@testing-library/react";
import React, { type ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </IconContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
