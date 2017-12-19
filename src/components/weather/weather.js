import React from 'react';
import PropTypes from 'prop-types';


import './weather.scss';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherSimple: true,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  getWeatherSimple() {
    return (
      <span>
        {this.props.forecastText}
      </span>
    );
  }

  getWeatherLong() {
    return (
      <div>
        <div>
          <span>Conditions: </span>
          <span>{this.props.conditions}</span>
        </div>
        <div>
          <span>High: </span>
          <span>{this.props.high}&deg;</span>
        </div>
        <div>
          <span>Low: </span>
          <span>{this.props.low}&deg;</span>
        </div>
        <div>
          <span>{(this.props.snow > 0) ? 'Snow' : 'Rain'}:  </span>
          <span>{(this.props.snow > 0) ? this.props.snow : this.props.rain} in</span>
        </div>
        <div>
          <span>Wind: </span>
          <span>
            {this.props.wind} mph
            {
              (this.props.windGust > 0) ?
              `, reaching ${this.props.windGust} mph` :
              ''
            }
          </span>
        </div>
      </div>
    );
  }

  handleToggleClick() {
    this.setState({
      weatherSimple: !this.state.weatherSimple,
    });
  }

  render() {
    const weatherText = (this.state.weatherSimple) ?
      this.getWeatherSimple() :
      this.getWeatherLong();
    const forecastClassName = (this.state.weatherSimple) ?
      'forecast-short' :
      'forecast-long';
    return (
      <div className="weather-container">
        <div>
          <img
            className="condition-icon"
            src={this.props.iconUrl}
            alt={this.props.conditions}
          />
          <div className={`forecast-text ${forecastClassName}`}>
            {weatherText}
            <button
              className="weather-toggle"
              onClick={this.handleToggleClick}
            >
              {(this.state.weatherSimple) ? 'more' : 'less'}...
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  iconUrl: PropTypes.string,
  forecastText: PropTypes.string.isRequired,
  conditions: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  snow: PropTypes.number,
  rain: PropTypes.number,
  wind: PropTypes.number,
  windGust: PropTypes.number,
};


Weather.defaultProps = {
  iconUrl: 'https://icons.wxug.com/i/w/layout/logo-responsive.png',
  snow: 0,
  rain: 0,
  wind: 0,
  windGust: 0,
};
