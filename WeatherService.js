import axios from 'axios';

const API_KEY = '1635890035cbba097fd5c26c8ea672a1';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

class WeatherService {
  static async getWeatherByCity(city) {
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }
}

export default WeatherService;
