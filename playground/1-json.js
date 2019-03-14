const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
//    };

// // Covert JavaScript object into JSON string
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name ="Pooja Joshi";
data.age = "22 years and 8 months"
fs.writeFileSync('1-json.json', JSON.stringify(data));
