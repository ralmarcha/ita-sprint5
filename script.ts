//dad jokes
const header: any = {
	method: 'GET',
	headers: {
		Accept: 'application/json'
	}
};
const loadJoke = async() => {
  const dadJoke = await fetch('https://icanhazdadjoke.com', header);
  const data = await dadJoke.json();
  document.getElementById('loading')?.innerHTML = data.joke;
  };

//chuck Norris Jokes
async function chuckJoke() {
  const data = await fetch('https://api.chucknorris.io/jokes/random');
  const json = await data.json();
  document.getElementById('loading')?.innerHTML = json.value;
}

//alternar
function showRandomJoke(){
  let option = Math.round(Math.random() * 10);
  let random= (option > 5)? chuckJoke() : loadJoke();
}

document.getElementById("acudit")?.addEventListener("click", showRandomJoke);

//meteo
let lat = 41.3828939;
let lon = 2.1774322;
 
const appId = '3356a3346fdf41242690eef93099bd6f';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

let city = "Barcelona";
let countryCode = "ES";

const url2 = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&appid=${appId}`;

const mostrarCiudad = async () => {
    const res = await fetch(url2);
    const data2 = await res.json();
    const [{name}] = data2;
    document.getElementById('ciudad')?.innerHTML = name;
}

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


//score
const d = new Date()
let dateToday = d.toISOString() 
const reportAcudits:any = [];

const puntuar= (score: number) => { 
	let report = {
	  joke: document.getElementById('loading')?.innerHTML,
	  score: score,
	  date: dateToday,
	};
  reportAcudits.push(report);
	console.log("score", reportAcudits);
};

