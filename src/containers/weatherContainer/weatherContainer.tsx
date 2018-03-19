import * as React from "react";

import Weather from "../../components/weather/weather";

const CONFIG = require("../../../config.json");

interface Temperature {
  fahrenheit: number;
}

interface LiquidMeasurement {
  in: number;
}

interface Forecast {
  fcttext: string;
  icon_url: string;
}

interface SpeedMeasurement {
  mph: number;
}

interface SimpleForecast {
  conditions: string;
  high: Temperature;
  low: Temperature;
  snow_allday: LiquidMeasurement;
  qpf_allday: LiquidMeasurement;
  avewind: SpeedMeasurement;
  maxwind: SpeedMeasurement;
}

interface CurrentForecast {
  icon_url: string;
  weather: string;
  temp_f: number;
  feelslike_f: number;
}

interface Props {
  apiKey: string;
  locationState: string;
  locationCity: string;
  locationZip: number;
}

interface State {
  isLoadingCurrent: boolean;
  isLoadingForecast: boolean;
  isError: boolean;
  txtForecast?: Forecast;
  simpleForecast?: SimpleForecast;
  current?: CurrentForecast;
}

interface Response {
  body: any;
  bodyUsed: boolean;
  headers: any;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
  json: any;
}

export default class WeatherContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // https://www.wunderground.com/weather/api/d/docs?d=data/forecast&MR=1

    this.state = {
      isLoadingCurrent: true,
      isLoadingForecast: true,
      isError: false,
    };
  }

  checkStatus(response: Response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  componentDidMount() {
    const urlCurrent = `http://api.wunderground.com/api/${this.props.apiKey}/conditions/q/${this.props.locationState}/${this.props.locationCity}/${this.props.locationZip}.json`;

    fetch(urlCurrent)
      .then(response => this.checkStatus((response)))
      .then(results => results.json())
      .then((data) => {
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
        this.setState({
          isLoadingCurrent: false,
          isError: true,
        });
      });

    const urlForecast = `http://api.wunderground.com/api/${this.props.apiKey}/forecast/q/${this.props.locationState}/${this.props.locationCity}/${this.props.locationZip}.json`;

    fetch(urlForecast)
      .then(this.checkStatus)
      .then(results => results.json())
      .then((data) => {
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
        this.setState({
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
