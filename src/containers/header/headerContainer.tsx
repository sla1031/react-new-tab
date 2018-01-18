import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import Welcome from '../../components/welcome/welcome';

const CONFIG = require('../../../config.json');

export default class HeaderContainer extends React.Component {
  render() {
    console.log(CONFIG.WELCOME_NAME);
    return (
      <Row className="header-container">
        <Col xs={3} xsOffset={9}>
          <Welcome
            name={CONFIG.WELCOME_NAME}
          />
        </Col>
      </Row>
    );
  }
}
