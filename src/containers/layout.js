import React from 'react';
import { Grid, Clearfix } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.scss';

import Header from './header/header';
import MainContent from './main_content/main';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Grid
          fluid
        >
          <Header />
          <MainContent />
        </Grid>
        <Clearfix />
      </div>
    );
  }
}
