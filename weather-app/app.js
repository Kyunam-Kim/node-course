const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address , (error, { latitude, longtitude, location } = {}) => {
        if (error) {
          return console.log(error);
        }
        forecast(latitude, longtitude, (error, forecastData) => {
          if (error) {
            return console.log(error);
          }
          console.log(location);
          console.log(forecastData);
        });
      })
}

//temp
// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address , (error, data) => {
//         if (error) {
//           return console.log(error);
//         }
//         forecast(data.latitude, data.longtitude, (error, forecastData) => {
//           if (error) {
//             return console.log(error);
//           }
//           console.log(data.location);
//           console.log(forecastData);
//         });
//       })
// }

// console.log(process.argv)
// const { Command } = require("commander");
// const program = new Command();


// const url =
//   "http://api.weatherstack.com/current?access_key=13d856b8f875bdde504b3dece76cfaed&query=37.8267, -122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//       console.log("Unable to connect to weather service!")
//   } else if (response.body.error) {
//       console.log("Unable to find location")
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         " It is currently " +
//         response.body.current.temperature +
//         " degrees out. It feels like " +
//         response.body.current.feelslike +
//         " degrees out"
//     );
//   }
// });

// const geocodingUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/12whats.json?access_token=pk.eyJ1Ijoia3l1MTIzIiwiYSI6ImNreXFyZGw0cDBtbXMyd3AyOHBhbDdlNzgifQ.OUPRUvvwILVz0r5p7roJ_g&limit=1";

// request({ url: geocodingUrl, json: true }, (error, response) => {
//   if (error) {
//       console.log("Unable to connect to location services")
//   } else if(response.body.features.length === 0){
//       console.log("No matching result")
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longtitude = response.body.features[0].center[0];
//     console.log(latitude, longtitude);
//   }
// });

// program.argument("<location>", "location to search").action(
//   geocode('${location}' , (error, data) => {
//     if (error) {
//       return console.log(error);
//     }
//     forecast(data.latitude, data.longtitude, (error, forecastData) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log(data.location);
//       console.log(forecastData);
//     });
//   })
// );
