import axios from 'axios';

const API_KEY = '7ac9976bd683e9968e8a455b8bf4fe40';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
export const fetchForecast = async (city) => {
    const response = await axios.get(BASE_URL, {
        params: {
            q: city,
            units: 'metric',
            appid: API_KEY,
        },
    });
    return response.data;
};
