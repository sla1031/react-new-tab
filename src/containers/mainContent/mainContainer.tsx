import * as React from 'react';
import { Row, Col, Accordion, Panel } from 'react-bootstrap';

import Search from '../../components/googleSearch/googleSearch';
import Calendar from '../../components/googleCalendar/googleCalendar';
import Shortcut from '../../components/shortcut/shortcut';
import WeatherContainer from '../weatherContainer/weatherContainer';

import './main.scss';

const CONFIG = require('../../../config.json');

export default class MainContentContainer extends React.Component {
  render() {
    const shortcutPanels = [];
    let i = 0;
    console.log(CONFIG.SHORTCUT_ARRAY);
    const panels = CONFIG.SHORTCUT_ARRAY;
    const panelsLen = panels.length;

    for (i; i < panelsLen; i += 1) {
      const thisShortcuts = [];
      let j = 0;
      const { shortcuts } = panels[i];
      const shortcutLen = shortcuts.length;

      for (j; j < shortcutLen; j += 1) {
        const shortcutKey = `${panels[i].panelName}-${shortcuts[j].title}`;
        thisShortcuts.push(<Shortcut
          key={shortcutKey}
          title={shortcuts[j].title} // title for Shortcut
          imgSrc={shortcuts[j].image} // shortcut image url
          url={shortcuts[j].url} // url shortcut should go to
        />);
      }
      shortcutPanels.push(<Panel
        defaultExpanded
        header={panels[i].panelName}
        eventKey={(i + 2)}
        key={panels[i].panelName}
      >
        {thisShortcuts}
      </Panel>);
    }

    return (
      <Row className="main-content-container">
        <Col xs={6} xsOffset={3}>
          <Search />
          <Panel header="Weather" collapsible defaultExpanded eventKey="0">
            <WeatherContainer
              apiKey={CONFIG.WEATHER.apiKey}
              locationState={CONFIG.WEATHER.locationState}
              locationCity={CONFIG.WEATHER.locationCity}
              locationZip={CONFIG.WEATHER.locationZip}
            />
          </Panel>
          <div className="accordion-container">
            <Accordion defaultActiveKey="1">
              <Panel defaultExpanded header="Google Calendar" eventKey="1">
                <Calendar
                  calendarSrc={CONFIG.GOOGLE_CALENDAR_SRC}
                />
              </Panel>
              {shortcutPanels}
            </Accordion>
          </div>
        </Col>
      </Row>
    );
  }
}
