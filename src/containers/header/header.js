import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Welcome from '../../components/welcome/welcome';

export default class Header extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Welcome
            name="" // Add a name here
          />
        </Col>
      </Row>
    );
  }
}
