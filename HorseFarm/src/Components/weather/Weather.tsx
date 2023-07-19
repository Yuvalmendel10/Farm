import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import WeatherIcon from "./WeatherIcon";
import { WeatherData } from "../../types/types";

const Weather: FC = () => {
  const { t } = useTranslation();
  const api = {
    key: "e811fca4d5150788f3c0c4e274369119",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const query = "kiryat bialik";
  const lat = "32.841740";
  const lon = "35.092232";
  const [weather, setWeather] = useState<WeatherData>({
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: "",
    sys: {
      country: "",
      sunrise: 0,
      sunset: 0,
    },
    weather: {
      id: 200,
      main: "",
      description: "",
      icon: "",
    },
    wind: {
      deg: 0,
      speed: 0,
    },
  });

  useEffect(() => {
    fetch(
      `${api.base}weather?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }, []);

  return (
    <div className="">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "30px",
          marginLeft: "30px",
        }}
      >
        {/* <WeatherIcon code={weather.weather[0].id} /> */}
        <span>
          <h2>{Math.floor(weather.main.temp)}°</h2>
        </span>
        <div>{<WeatherIcon code={weather.weather.id} />}</div>
      </div>
    </div>
  );
};

export default Weather;
