
var lat = null
var long = null




//
//
//
// ↓↓↓ Creating a li for the "main" weather display ↓↓↓
var cityEl = document.createElement("li");
var cityList = document.querySelector("#conditions-list");

cityEl.textContent = "Words and Stuff";

cityList.appendChild(cityEl);
// ↑↑↑ Creating li end ↑↑↑
//
//
//

// ↑←↓ Fetch geo data fromm Geocoding API  ↓→↑
cityName = "Green bay";
apiKey = "8e937896277dbf3b8a02a76dc6fc7336";
stateCode = "wi";

var api =
  "https://api.openweathermap.org/geo/1.0/direct?q=" +
  cityName +
  "&limit=1&appid=" +
  apiKey;

fetch(api)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data) {
    console.log(data);
    lat = data[0].lat;
    long = data[0].lon;
    console.log(lat);
    console.log(long);
    
  });
  
console.log(lat);
console.log(long);

// ↑←↓ Get current data  ↓→↑
// ↑←↓ Attach current data to li's in "conditions-list"  ↓→↑

// ↑←↓ Get five day weather data  ↓→↑
// ↑←↓ Attach five day weather data to cards  ↓→↑

// ↑←↓ Call localStorage for past searches  ↓→↑
// ↑←↓ Store search history in localStorage  ↓→↑
