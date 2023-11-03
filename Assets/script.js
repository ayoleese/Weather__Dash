

let weather = {
  "APIKey": "8d6aa84e348dbf5d83a70595cb0e3d21",
  fetchWeather: function (city){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&cnt=5&appid=" + this.APIKey)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },

  displayWeather: function(data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    // console.log(name,icon,description,temp,humidity);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp;
    document.querySelector(".humidity").innerText = humidity;

  },
  search: function (){
    this.fetchWeather(document.querySelector(".input").value);
  }
};

document.querySelector(".buttons").addEventListener("click", function (){
  weather.search();
});

document.querySelector(".input").addEventListener("keyup", function (event){
  if (event.key == "Enter"){
    weather.search();
  }
});
