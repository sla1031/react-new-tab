import React from 'react';
import PropTypes from 'prop-types';


import './shortcut.scss';

export default class Shortcut extends React.Component {
  render() {
    return (
      <div className="shortcut-container">
        <a
          href={this.props.url}
        >
          <div className="title">
            {this.props.title}
          </div>
          <div className="image">
            <img
              src={this.props.imgSrc}
              alt={this.props.title}
            />
          </div>
        </a>
      </div>
    );
  }
}

Shortcut.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
