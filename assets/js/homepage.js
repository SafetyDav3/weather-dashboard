// var lat = null;
// var long = null;
var todaysDate = new Date()
var cords = [];
//
//
//
// ↓↓↓ Creating a li for the "main" weather display ↓↓↓
var cityEl = document.createElement("li");
var cityList = document.querySelector("#conditions-list");

var cityNameEl = document.querySelector('.main-weather-title')
// var cityNameDateEl = document.createElement('span').setAttribute('id', 'main-date').appendChild(cityNameEl)

cityEl.textContent = "";

cityList.appendChild(cityEl);
// ↑↑↑ Creating li end ↑↑↑
//
//
//
// ↑←↓ Fetch geo data fromm Geocoding API  ↓→↑
var cityName = "Green bay";
var apiKey = "8e937896277dbf3b8a02a76dc6fc7336";
var stateCode = "wi";

var api =
  "https://api.openweathermap.org/geo/1.0/direct?q=" +
  cityName +
  "&limit=1&appid=" +
  apiKey;

var getLatLong = function () {
  fetch(api)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      var lat = data[0].lat;
      var long = data[0].lon;

      cords[0] = {lat: lat, long: long}
      cords[1] = {some: "text", other: "words"}

      // console.log(cords);
      cityEl.textContent = lat;
      cityList.appendChild(cityEl);
      // cityNameDateEl.innerText = '04/12/2022'
      cityNameEl.innerText = cityName + " " + todaysDate.toLocaleString()
      testFunc()
      // console.log(lat);
      // console.log(long);
    });
};

var testFunc = function(){
  console.log(cords[1].some)
  console.log(cords[0].lat)
  console.log(cords[0].long);
  console.log(todaysDate)
}
 

// console.log(lat);
// console.log(long);

getLatLong();
// console.log(cords[0].lat)
// console.log(lat);
// console.log(long);

// ↑←↓ Get current data  ↓→↑
// ↑←↓ Attach current data to li's in "conditions-list"  ↓→↑

// ↑←↓ Get five day weather data  ↓→↑
// ↑←↓ Attach five day weather data to cards  ↓→↑

// ↑←↓ Call localStorage for past searches  ↓→↑
// ↑←↓ Store search history in localStorage  ↓→↑

