import * as React from "react";

import "./googleCalendar.scss";

interface Props {
  calendarSrc: string;
}

export default class GoogleSearch extends React.Component<Props, {}> {
  render() {
    return (
      <div className="google-calendar-container">
        <iframe
          title="Google Calendar"
          src={this.props.calendarSrc} // google calendar source here
          scrolling="no"
        />
      </div>
    );
  }
}
