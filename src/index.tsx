import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Raven from "raven-js";
import { AppContainer } from "react-hot-loader";

import LayoutContainer from "./containers/layoutContainer";

const CONFIG = require("../config.json");

Raven
  .config(CONFIG.SENTRY_DSN)
  .install();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root"),
  );
};

Raven.context(function () {
    render(LayoutContainer);
});

// Webpack Hot Module Replacement API
if ((module as any).hot) {
  (module as any).hot.accept("./containers/layoutContainer", () => {
    render(LayoutContainer);
  });
}
