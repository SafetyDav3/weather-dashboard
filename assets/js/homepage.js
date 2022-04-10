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
cityName = "Greenbay";
apiKey = "8e937896277dbf3b8a02a76dc6fc7336";
stateCode = "wi";
countryCode = "840";

var api =
  "http://api.openweathermap.org/geo/1.0/direct?q=" +
  cityName +
  "&" +
  countryCode +
  "&appid=" +
  apiKey;






  console.log(api)
// ↑←↓ Get current data  ↓→↑
// ↑←↓ Attach current data to li's in "conditions-list"  ↓→↑

// ↑←↓ Get five day weather data  ↓→↑
// ↑←↓ Attach five day weather data to cards  ↓→↑

// ↑←↓ Call localStorage for past searches  ↓→↑
// ↑←↓ Store search history in localStorage  ↓→↑
