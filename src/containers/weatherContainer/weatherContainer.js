import React from 'react';

import Weather from '../../components/weather/weather';

export default class WeatherContainer extends React.Component {
  constructor() {
    super();
    this.apiKey = '';
    // https://www.wunderground.com/weather/api/d/docs?d=data/forecast&MR=1
    this.locationState = '';
    this.locationCity = '';
    this.locationZip = '';

    this.state = {
      weatherElement: (
        <div className="weather-container">
          <span className="loading">loading weather...</span>
        </div>
      ),
    };
  }

  componentDidMount() {
    const url = `http://api.wunderground.com/api/${this.apiKey}/forecast/q/${this.locationState}/${this.locationCity}/${this.locationZip}.json`
    console.log(url);
    fetch(url)
      .then(results => results.json())
      .then((data) => {
        const txtForecast = data.forecast.txt_forecast.forecastday[0];
        const simpleForecast = data.forecast.simpleforecast.forecastday[0];
        this.setState({
          weatherElement: (
            <Weather
              iconUrl={txtForecast.icon_url}
              forecastText={txtForecast.fcttext}
              conditions={simpleForecast.conditions}
              high={parseInt(simpleForecast.high.fahrenheit, 10)}
              low={parseInt(simpleForecast.low.fahrenheit, 10)}
              snow={simpleForecast.snow_allday.in}
              rain={simpleForecast.qpf_allday.in}
              wind={simpleForecast.avewind.mph}
              windGust={simpleForecast.maxwind.mph}
            />
          ),
        });
      });
  }

  render() {
    return (
      this.state.weatherElement
    );
  }
}
