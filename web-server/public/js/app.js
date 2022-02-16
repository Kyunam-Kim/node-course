console.log("Client side javascript file is loadedf");

// fetch("https://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1Ijoia3l1MTIzIiwiYSI6ImNreXFyZGw0cDBtbXMyd3AyOHBhbDdlNzgifQ.OUPRUvvwILVz0r5p7roJ_g&limit=1').then()
fetch("http://localhost:3000/weather?address=boston").then((response) => {
  response.json().then((data) => {
      if (data.error) {
          console.log(data.error)
      } else {
          console.log(data.location)
          console.log(data.forecast)
      }
    })
});

const weatherForm = document.querySelector('form')

weatherForm.addEventListener('submit', () => {
    console.log('testing!')
})
