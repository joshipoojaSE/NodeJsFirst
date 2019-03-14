const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

var address = process.argv[2];

if(!address){
    console.log('Please provide an address');
}
else{
    geocode(address, (error, {Latitude, Longitude, Location}) => {
        if(error){
            return console.log('Error', error);
        }
    
        forecast(Latitude, Longitude, (error, forecastData) => {
            if(error){
                return console.log('Error', error);
            }
            console.log(Location);
            console.log(forecastData);
    
        });
    });
}