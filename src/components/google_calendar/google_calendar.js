import React from 'react';

import './google_calendar.scss';

export default class GoogleSearch extends React.Component {
  render() {
    return (
      <div className="google-calendar-container">
        <iframe
          title="Google Calendar"
          src="https://calendar.google.com/calendar/b/1/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=samantha%40digitalrelab.com&amp;color=%232952A3&amp;src=13.tragic.with.a.capital.t.22%40gmail.com&amp;color=%23875509&amp;ctz=America%2FNew_York"
          scrolling="no"
        />
      </div>
    );
  }
}
