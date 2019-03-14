const request = require('request');

const geocode = (address, callback) => {
    const url = `https://us1.locationiq.org/v1/search.php?&key=4f1c8d4dea64b3&q=${address}&format=json&limit=1`;

    request({ url}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else{
            var data = JSON.parse(body);
            if(data.error){
                callback('Unable to find location', undefined);
            }
            else{
                callback(undefined, {
                    Latitude: data[0].lat,
                    Longitude: data[0].lon,
                    Location: data[0].display_name
                })
            }
        }
    })
}

module.exports = geocode;