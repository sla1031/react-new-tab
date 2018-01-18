import React from 'react';
import PropTypes from 'prop-types';


import './weather.scss';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherSimple: true,
      img: this.props.current.iconUrl,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  getWeatherSimple() {
    return (
      <span>
        Currently {this.props.current.condition},{ ' ' }
        with temperature of {this.props.current.temperature}&deg;,{ ' ' }
        feels like {this.props.current.feelsLike}&deg;<br />
        {this.props.forecastText}
      </span>
    );
  }

  getWeatherLong() {
    const { forecast } = this.props;
    return (
      <div>
        <div>
          <span>condition: </span>
          <span>{forecast.condition}</span>
        </div>
        <div>
          <span>High: </span>
          <span>{forecast.high}&deg;</span>
        </div>
        <div>
          <span>Low: </span>
          <span>{forecast.low}&deg;</span>
        </div>
        <div>
          <span>{(forecast.snow > 0) ? 'Snow' : 'Rain'}:  </span>
          <span>{(forecast.snow > 0) ? forecast.snow : forecast.rain} in</span>
        </div>
        <div>
          <span>Wind: </span>
          <span>
            {forecast.wind} mph
            {
              (forecast.windGust > 0) ?
              `, reaching ${forecast.windGust} mph` :
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
      img: (this.state.weatherSimple) ? this.props.forecast.iconUrl : this.props.current.iconUrl,
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
            src={this.state.img}
            alt={(this.state.weatherSimple) ?
              this.props.current.condition :
              this.props.forecast.condition}
          />
          <div className={`forecast-text ${forecastClassName}`}>
            {weatherText}
            <button
              className="weather-toggle"
              onClick={this.handleToggleClick}
            >
              {(this.state.weatherSimple) ? 'see forecast' : 'see current'}...
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  forecastText: PropTypes.string.isRequired,
  forecast: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
};
