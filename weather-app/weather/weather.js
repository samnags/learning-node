const request = require('request')

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/6b797fb0b1f1e58b103b3af31680a5ca/${lat}, ${lng}`,
    json: true,
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
        })
      } else {
        callback('Unable fetch weather')
      }
    }
  )}

module.exports.getWeather = getWeather
