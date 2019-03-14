const add = (a, b, callback) => {
    setTimeout(() => {
    callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})

// const geocode = (address, callback) => {
//     setTimeout(() => {
//     const data = {
//     latitude: 0,
//     longitude: 0
//     }
//     callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//     const data = {
//     latitude: 0,
//     longitude: 0
//     }
//     return data;
//     }, 2000)
// }

// var data= geocode('Philadelphia');
// console.log(data);