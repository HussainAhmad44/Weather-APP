let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let key = "7666ba704f55af45b2361ac8aba38f81";
let searchbox=document.querySelector(".search input" );
let searchbtn=document.querySelector(".search button" );
let i=document.querySelector(".weathericon");
async function checkWeather(city) {
    let res = await fetch(url + city + `&appid=${key}`);
    if(res.status==404){
        document.querySelector(".err").style.display="block";
         document.querySelector(".weather").style.display="none";
    }
    else{
    let data = await res.json();
   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humadity").innerHTML = data.main.humidity + "%"; // fixed spelling
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main=="Clouds"){
    i.src="clouds.png";
}
else if(data.weather[0].main=="Clear"){
    i.src="clear.png";
}

else if(data.weather[0].main=="Drizzle"){
    i.src="drizzle.png";
}

else if(data.weather[0].main=="Mist"){
    i.src="mist.png";
}

else if(data.weather[0].main=="Rain"){
    i.src="rain.png";
}

document.querySelector(".weather").style.display="block";
  document.querySelector(".err").style.display="none";

    }
}
searchbtn.addEventListener("click",()=>{
checkWeather(searchbox.value);
});

