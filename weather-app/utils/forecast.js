const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/428b2d1a651fce41e3adb8978087ac8a/${lat},${lon}`;

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error){
            callback('Unable to find location', undefined);
        } else{
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability
            })
        }
    })
    }

module.exports = forecast;