import React from "react";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

function WeatherDashboard({ params: { city, lat, long } }: Props) {
  return <div>WeatherDashboard {city}</div>;
}

export default WeatherDashboard;
