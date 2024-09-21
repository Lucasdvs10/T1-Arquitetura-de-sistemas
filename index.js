const axios = require('axios');
const city = "Sao Caetano do Sul";
const key = process.env.API_KEY

require('dotenv').config();

async function fetchData() {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();