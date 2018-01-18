import React from 'react';

import './googleCalendar.scss';

const CONFIG = require('../../../config.json');

export default class GoogleSearch extends React.Component {
  render() {
    return (
      <div className="google-calendar-container">
        <iframe
          title="Google Calendar"
          src={CONFIG.GOOGLE_CALENDAR_SRC} // google calendar source here
          scrolling="no"
        />
      </div>
    );
  }
}
