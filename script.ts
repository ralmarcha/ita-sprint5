
const showJoke = (apidata) => {
    document.getElementById('loading')?.innerHTML = JSON.stringify(apidata.value);
};
  
let loading = document.getElementById('loading')?.innerHTML;

const dadJoke = () => {
  fetch('https://api.chucknorris.io/jokes/random')
  //  fetch('https://icanhazdadjoke.com/api')
    .then(res => res.json())
    .then(data => showJoke(data));
};

dadJoke();



  const loadJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    //  fetch('https://icanhazdadjoke.com/api')
      .then(res => res.json())
      .then(data => showJoke(data));
  };
  
  loadJoke();
  
document.getElementById("acudit")?.addEventListener("click", loadJoke);


let lat = 41.3828939;
let lon = 2.1774322;
 
const appId = '3356a3346fdf41242690eef93099bd6f';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;


let city = "Barcelona";
let countryCode = "ES";

const url2 = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&appid=${appId}`;

fetch(url2)
.then(res => res.json())
  .then(data2 => mostrarCoord(data2));
  function mostrarCoord(data2) {
    const [{lat}] = data2;
   
  }
  const mostrarCiudad = async () => {
    const res = await fetch(url2);
    const data2 = await res.json();
    const [{name}] = data2;
   
    document.getElementById('ciudad')?.innerHTML = name;
  }
//-----------------//
//https://openweathermap.org/weather-conditions

const mostrarClima = async () => {
  const res = await fetch(url);
  const data = await res.json();
  let temp = data.main.temp
  const { weather } = data;
let icon = `https://openweathermap.org/img/wn/${
  weather[0]["icon"]
}@2x.png`;
  
  let centigrados = `${(temp - 273.15).toFixed(0)} ºC`;

  document.getElementById('temperatura')?.innerHTML = centigrados;
  document.getElementById('icon')?.src = icon;
}


//puntuar

const d = new Date()
let dateToday = d.toISOString() 



const reportAcudits:any = [];
let report =
{
  joke: loading,
  score: 0,
  date: dateToday
};
reportAcudits.push(report);



function puntuar(score: number) {
  reportAcudits[reportAcudits.length -1].score = score;
  console.log("report jokes score", reportAcudits);
  loadJoke();
};


