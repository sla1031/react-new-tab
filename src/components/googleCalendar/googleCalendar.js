import React from 'react';

import './googleCalendar.scss';

export default class GoogleSearch extends React.Component {
  render() {
    return (
      <div className="google-calendar-container">
        <iframe
          title="Google Calendar"
          src="" // google calendar source here
          scrolling="no"
        />
      </div>
    );
  }
}
