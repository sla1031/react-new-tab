import React from 'react';

import Weather from '../../components/weather/weather';

const CONFIG = require('../../../config.json');

export default class WeatherContainer extends React.Component {
  static checkStatus(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  constructor() {
    super();
    // https://www.wunderground.com/weather/api/d/docs?d=data/forecast&MR=1
    this.apiKey = CONFIG.WEATHER.apiKey;
    this.locationState = CONFIG.WEATHER.locationState;
    this.locationCity = CONFIG.WEATHER.locationCity;
    this.locationZip = CONFIG.WEATHER.locationZip;

    this.state = {
      isLoadingCurrent: true,
      isLoadingForecast: true,
      isError: false,
      txtForecast: [],
      simpleForecast: [],
      current: [],
    };
  }

  componentDidMount() {
    const urlCurrent = `http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.locationState}/${this.locationCity}/${this.locationZip}.json`;

    fetch(urlCurrent)
      .then(this.checkStatus)
      .then(results => results.json())
      .then((data) => {
        console.log(data);
        const current = data.current_observation;
        if (!current || data.error) {
          throw new Error();
        }
        this.setState({
          current,
          isLoadingCurrent: false,
        });
      })
      .catch((error) => {
        console.log(`error ${error}`);
        this.setState = ({
          isLoadingCurrent: false,
          isError: true,
        });
      });

    const urlForecast = `http://api.wunderground.com/api/${this.apiKey}/forecast/q/${this.locationState}/${this.locationCity}/${this.locationZip}.json`;

    fetch(urlForecast)
      .then(this.checkStatus)
      .then(results => results.json())
      .then((data) => {
        console.log(data);
        const txtForecast = data.forecast.txt_forecast.forecastday[0];
        const simpleForecast = data.forecast.simpleforecast.forecastday[0];
        if (!txtForecast || !simpleForecast || data.error) {
          throw new Error();
        }
        this.setState({
          txtForecast,
          simpleForecast,
          isLoadingForecast: false,
        });
      })
      .catch((error) => {
        console.log(`error ${error}`);
        this.setState = ({
          isLoadingForecast: false,
          isError: true,
        });
      });
  }

  render() {
    if (this.state.isError) {
      return (
        <div className="weather-container">
          <span className="error">Error loading weather.</span>
        </div>
      );
    } else if (this.state.isLoadingForecast || this.state.isLoadingCurrent) {
      return (
        <div className="weather-container">
          <span className="loading">loading weather...</span>
        </div>
      );
    }

    const { txtForecast, simpleForecast, current } = this.state;
    return (
      <Weather
        current={{
          iconUrl: current.icon_url,
          condition: current.weather,
          temperature: current.temp_f,
          feelsLike: current.feelslike_f,
        }}
        forecastText={txtForecast.fcttext}
        forecast={{
          iconUrl: txtForecast.icon_url,
          condition: simpleForecast.conditions,
          high: simpleForecast.high.fahrenheit,
          low: simpleForecast.low.fahrenheit,
          snow: simpleForecast.snow_allday.in,
          rain: simpleForecast.qpf_allday.in,
          wind: simpleForecast.avewind.mph,
          windGust: simpleForecast.maxwind.mph,
        }}
      />
    );
  }
}
