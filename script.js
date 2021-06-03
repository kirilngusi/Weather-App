// const searchInput = document.querySelector(".search");
const App_ID = 'a6f275c1c5fcf63200ec318f00acdbc0';
const DEFAULT1 = '-_-';

const form = document.querySelector(".form");
const search = document.querySelector(".search");

const main = document.getElementById("main");
const location1 = document.querySelector("#city");
const temp = document.querySelector("#temp");
const info = document.querySelector("#info");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${App_ID}&units=metric`;

async function getWeather (city) {
    const resp = await fetch(url(city));
    const data = await resp.json();
    addWeather(data);
}
// searchInput.addEventListener("submit", (e) => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${App_ID}&units=metric`)
//         .then(async res => {
//             const data = await res.json();
            // console.log(data);
//             location1.innerHTML = `${data.name || DEFAULT1}`; 
//             temp.innerHTML = `Nhiệt Độ: ${data.main.temp || DEFAULT1}°C`;
//             windSpeed.innerHTML = `Speed: ${data.wind.speed || DEFAULT1} km/h`;
//             humidity.innerHTML = `Độ Ẩm: ${data.main.humidity || DEFAULT1}%`;
//             info.innerHTML = `${data.weather[0].main || DEFAULT1}`;
//         });
// })
function addWeather(data) {
    location1.innerHTML = `${data.name || DEFAULT1}`; 
    temp.innerHTML = `Nhiệt Độ: ${data.main.temp || DEFAULT1}°C`;
    windSpeed.innerHTML = `Speed: ${data.wind.speed || DEFAULT1} km/h`;
    humidity.innerHTML = `Độ Ẩm: ${data.main.humidity || DEFAULT1}%`;
    info.innerHTML = `${data.weather[0].main || DEFAULT1}`;

    //clean
    search.value= '';

    // main.appendChild()
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;
    if (city) {
        getWeather(city);
    }
})


var typed = new Typed('#type', {
    strings:["Hi I'm Kiril","I'm Newbie","Nice to meet you ~"],
    typeSpeed :120,
    backSpeed: 40,
    loop:true,
    showCursor: false,
  });