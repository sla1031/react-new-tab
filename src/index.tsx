import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import LayoutContainer from "./containers/layoutContainer";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root"),
  );
};

render(LayoutContainer);

// Webpack Hot Module Replacement API
if ((module as any).hot) {
  (module as any).hot.accept("./containers/layoutContainer", () => {
    render(LayoutContainer);
  });
}
