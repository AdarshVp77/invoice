const axios = require('axios');

// OpenWeatherMap API Key
const apiKey = '9ec1e49e3aa316703e74826ea463362d';

// City name or zip code
const city = 'London';
const countryCode = 'uk'; // For example, 'us', 'uk', 'fr'

// API endpoint
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;


// Fetch weather data
axios.get(apiUrl)
  .then(response => {
    // Handle success
    console.log('Weather:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching weather:', error);
  });
