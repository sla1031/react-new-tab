import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Layout from './containers/layout';


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Layout);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/layout', () => {
    render(Layout);
  });
}
