const yargs = require('yargs')
const axios = require('axios')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Enter the address to get weather for',
      sring: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAdresss = encodeURIComponent(argv.address)
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdresss}`

axios.get(geocodeUrl).then((res) => {
  var lat = res.data.results[0].geometry.location.lat;
  var lng = res.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/6b797fb0b1f1e58b103b3af31680a5ca/${lat}, ${lng}`
  console.log(res.data.results[0].formatted_address)
  // making another axios call using data from previous call
  return axios.get(weatherUrl)
}).then((res) => {
  var temperature = res.data.currently.temperature;
  var apparentTemperature = res.data.currently.apparentTemperature;
  console.log(`It's currently: ${temperature}. It feels like ${apparentTemperature}`)
}).catch((e) => {
  if (e.code === 'ECONNREFUSED') {
    console.log('Unable to connect to api servers')
  }
})
