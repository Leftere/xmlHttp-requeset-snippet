function setup() {
    createCanvas(800,200);
    loadJSON('https://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=89507e2493037008684adbeadb131c19&units=metric', gotData);

}

var weather;
let city = document.getElementById("city");


function gotData(data) {
     weather = data;    
 
}

// console.log(weather)

function draw() {
    background(0);
    
    console.log(weather)
    // if (weather) {
    //     ellipse(200,100, weather.main.temp, weather.main.temp);
    //     ellipse(100,100, weather.main.humidity, weather.main.humidity)
    // }
}