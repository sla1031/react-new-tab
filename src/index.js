import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import LayoutContainer from './containers/layoutContainer';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(LayoutContainer);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/layoutContainer', () => {
    render(LayoutContainer);
  });
}
