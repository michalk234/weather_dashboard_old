export function mapWeatherData(data) {
  return {
    city: data.city,
    temp: data.temp,
    description: data.description || ""
  };
}
