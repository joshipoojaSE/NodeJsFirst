const https = require('https');

const url = `https://api.darksky.net/forecast/428b2d1a651fce41e3adb8978087ac8a/40,-75`;

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chank) => {
        data = data + chank.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
})

request.on('error', (error) => {
    console.log('An error', error);
})

request.end();
