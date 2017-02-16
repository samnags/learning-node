// const yargs = require('yargs')
//
// const geocode = require('./geocode/geocode')
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Enter the address to get weather for',
//       sring: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage)
//   } else {
//     console.log(JSON.stringify(results, undefined, 2))
//   }
// })

// 6b797fb0b1f1e58b103b3af31680a5ca
// https://api.darksky.net/forecast/6b797fb0b1f1e58b103b3af31680a5ca/40.6788319,-73.9506774


const request = require('request')

var getWeather = () => {
  request({
    url: 'https://api.darksky.net/forecast/6b797fb0b1f1e58b103b3af31680a5ca/40.6788319,-73.950677',
    json: true,
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature)
      } else {
        console.log('Unable fetch weather')
      }
    }
  )}


getWeather()
