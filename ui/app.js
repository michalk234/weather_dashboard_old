import { fetchWeather } from '../api/weatherApi.js';
import { mapWeatherData } from '../model/weatherModel.js';

document.getElementById('searchBtn').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value.trim();

  if (!city) {
    document.getElementById('currentWeather').innerHTML = '<p>Enter city name.</p>';
    return;
  }

  try {
    const data = await fetchWeather(city);
    const model = mapWeatherData(data);
    render(model);
  } catch (error) {
    document.getElementById('currentWeather').innerHTML =
      `<p>Could not load weather data: ${error.message}</p>`;
  }
});

function render(model) {
  document.getElementById('currentWeather').innerHTML =
    `<h2>${model.city}</h2><p>${model.temp}°C</p><p>${model.description}</p>`;
}
