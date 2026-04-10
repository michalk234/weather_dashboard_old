const BACKEND_BASE_URL = "https://weather-gateway-service.onrender.com";

export async function fetchWeather(city) {
  const url = new URL("/api/weather/current", BACKEND_BASE_URL);
  url.searchParams.set("city", city);

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`Backend error: ${res.status}`);
  }

  return res.json();
}
