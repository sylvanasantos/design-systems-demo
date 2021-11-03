import { theme, GamutProvider } from "@codecademy/gamut-styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GamutProvider theme={theme}>
      <App />
    </GamutProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
