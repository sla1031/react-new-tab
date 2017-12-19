import React from 'react';
import PropTypes from 'prop-types';
import Clock from 'react-live-clock';

import './welcome.scss';

export default class Welcome extends React.Component {
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

Welcome.propTypes = {
  name: PropTypes.string,
};

Welcome.defaultProps = {
  name: '',
};
