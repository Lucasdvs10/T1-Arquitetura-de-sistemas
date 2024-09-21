require('dotenv').config();

const axios = require('axios');
const key = process.env.API_KEY


async function getCoordsByName(cityName) {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${key}`);
        let latitude = response.data["0"]["lat"]
        let longitude = response.data["0"]["lon"]

        return {
            latitude,
            longitude
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function weatherByName(cityName) {
    try {

        const coords = await getCoordsByName(cityName)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${key}`)

        const feelsLike = response.data["main"]["feels_like"]
        const description = response.data["weather"]["0"]["description"]

        return {
            feelsLike,
            description
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}

weatherByName(process.argv[2]).then(data => console.log(data))