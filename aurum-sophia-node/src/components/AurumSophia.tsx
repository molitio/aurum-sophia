import React from "react";
import { StaticRouter } from "react-router";
import { App } from "./App";
import { AppContextProvider } from "./context/AppContextProvider";

export const AurumSophia: React.FC = ({ location }: any) => {
  return (
    <AppContextProvider>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </AppContextProvider>
  );
};
