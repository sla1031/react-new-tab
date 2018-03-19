import * as React from "react";
import { Grid, Clearfix } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.scss";
import "../styles/index.scss";

import HeaderContainer from "./header/headerContainer";
import MainContentContainer from "./mainContent/mainContainer";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Grid
          fluid={true}
        >
          <HeaderContainer />
          <MainContentContainer />
        </Grid>
        <Clearfix />
      </div>
    );
  }
}
