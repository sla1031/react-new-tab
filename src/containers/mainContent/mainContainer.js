import React from 'react';
import { Row, Col, Accordion, Panel } from 'react-bootstrap';

import Search from '../../components/googleSearch/googleSearch';
import Calendar from '../../components/googleCalendar/googleCalendar';
import Shortcut from '../../components/shortcut/shortcut';

import './main.scss';

export default class MainContentContainer extends React.Component {
  render() {
    return (
      <Row className="main-content-container">
        <Col xs={6} xsOffset={3}>
          <Search />
          <div className="accordion-container">
            <Accordion defaultActiveKey="1">
              <Panel expanded defaultExpanded header="Google Calendar" eventKey="1" >
                <Calendar />
              </Panel>
              <Panel header="Shortcuts" eventKey="2">
                <Shortcut
                  title="" // title for Shortcut
                  imgSrc="" // shortcut image url
                  url="" // url shortcut should go to
                />
              </Panel>
            </Accordion>
          </div>
        </Col>
      </Row>
    );
  }
}
