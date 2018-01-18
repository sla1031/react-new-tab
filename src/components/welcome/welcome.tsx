import * as React from 'react';
import * as Clock from 'react-live-clock';

import './welcome.scss';

interface Props {
  name: string;
}

export default class Welcome extends React.Component<Props, {}> {
  render() {
    return (
      <div className="welcome-container">
        <h4 className="message">
          Welcome {this.props.name}
        </h4>
        <div className="time">
          <Clock
            format="dddd, MMMM Mo, YYYY, h:mm:ss A"
            ticking
          />
        </div>
      </div>
    );
  }
}
