
let appID = "89507e2493037008684adbeadb131c19";
let units = "metric";
let searchMethod;
function getSearchMethod(searchTerm) {
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm) {
        searchMethod = "zip";
    } else {
        searchMethod = "q"
    }
}
function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appID}&units=${units}`)
    .then(result => {
        return result.json();
    })
    .then(result => {
        init(result);
    })
}


function init(resultFromServer) {
    document.getElementById('app').style.color = "#fff";
    switch(resultFromServer.weather[0].main){
         case 'Clear':
         document.body.style.backgroundImage = 'url("images/clear.jpeg")';
         
         break;   
         case 'Clouds':
         document.body.style.backgroundImage = 'url("images/clouds.jpeg")';
         break;   
         case 'Rain':

         case 'Drizzle':
         case 'Mist':
         document.body.style.backgroundImage = 'url("images/clouds.jpeg")';
         break;   

         case 'ThunderStorm':
         document.body.style.backgroundImage = 'url("images/storm.jpeg")';
         break;

         case 'Snow':
         document.body.style.backgroundImage = 'url("images/snow.jpeg")';
         break;
         default: 
         break

    } 
    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
let temperatureElement = document.getElementById('temperature');
let humidityElement = document.getElementById("humidity");
let windSpeedElement = document.getElementById('windSpeed');
let cityHeader = document.getElementById('cityHeader');
let weatherIcon = document.getElementById('docIcon')


weatherIcon.src = `http://openweathermap.org/img/w/` + resultFromServer.weather[0].icon + '.png';

let resultDescription = resultFromServer.weather[0].description;

weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';

windSpeedElement.innerHTML = "Winds at " + Math.floor(resultFromServer.wind.speed) + "m/s"

cityHeader.innerHTML = resultFromServer.name;

humidityElement.innerHTML = "Humidity levels at " + resultFromServer.main.humidity + "%"
 
    console.log(resultFromServer)

    setPositionForWeatherInfo()
}

function setPositionForWeatherInfo() {
    let weatherContainer = document.getElementById('weatherContainer');
    let weatherContainerHeight = weatherContainer.clientHeight;
    let weatherContainerWidth = weatherContainer.clientWidth;

    weatherContainer.style.left = `calc(50%-${weatherContainerWidth /2}px)`;
    weatherContainer.style.top = `calc(50%-${weatherContainerHeight /1.3}px)`;
    weatherContainer.style.visibility = "visible";
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm) {
        searchWeather(searchTerm);
    }
})


// function setup() {

//     loadJSON('https://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=89507e2493037008684adbeadb131c19&units=metric', gotData);

// }


// let weathter;
// function gotData(data) {
//     weather = data;
// }