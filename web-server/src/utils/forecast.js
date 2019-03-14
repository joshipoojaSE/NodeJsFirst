const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/428b2d1a651fce41e3adb8978087ac8a/${lat},${lon}`;

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error){
            callback('Unable to find location', undefined);
        } else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
    }

module.exports = forecast;