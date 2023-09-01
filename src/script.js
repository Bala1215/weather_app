//store apikey and it's url
const apiKey="30a2328c2af18edde2d7b4f45b7de496";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


var city = document.querySelector('.search-input');
var weather_icon = document.querySelector('.weather-icon');

//call whenever the search button is clicked
async function checkWeather(city){
try{
const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
var data = await response.json();

console.log(data);
/*console.log(data.main);
console.log(data.name);
console.log(data.main.temp);
console.log(city);
*/

document.querySelector('.city').innerHTML = data.name;
document.querySelector('.temp').innerHTML = data.main.temp+" °C";
document.querySelector('.humidity').innerHTML = "humidity : "+data.main.humidity+" %";
document.querySelector('.wind').innerHTML = "wind : "+data.wind.speed+" km";

console.log(data.weather[0].main);

if(data.weather[0].main == "Clouds"){
weather_icon.src="./weather-app-img/images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
weather_icon.src="./weather-app-img/images/clear.png";
}
else if(data.weather[0].main == "Drizzle"){
weather_icon.src="./weather-app-img/images/drizzle.png";
}
else if(data.weather[0].main == "Humidity"){
weather_icon.src="./weather-app-img/images/humidity.png";
}
else if(data.weather[0].main == "Rain"){
weather_icon.src="./weather-app-img/images/rain.png";
}
else if(data.weather[0].main == "Mist"){
weather_icon.src="./weather-app-img/images/mist.png";
}
else if(data.weather[0].main == "Snow"){
weather_icon.src="./weather-app-img/images/snow.png";
}
else if(data.weather[0].main == "Wind"){
weather_icon.src="./weather-app-img/images/wind.png";
}

// city.value=" ";
}
catch(err){
alert("Enter Valid name or check your spelling");
}

} 

//call checkWeather() and pass input tag value when button is clicked

document.querySelector('.search-btn').addEventListener("click",()=>{
checkWeather(city.value);
})