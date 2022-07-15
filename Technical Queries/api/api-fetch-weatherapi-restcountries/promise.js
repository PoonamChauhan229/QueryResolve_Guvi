fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.length);
    console.log(data);
    // console.log(data[0].languages)
    createcard(data);
  });

function createcard(data) {
  for (let i = 0; i < 3; i++) {
    
    //   console.log(i)
    let flag = data[i].flags.svg;
    let name = data[i].name.official;
    let capital = data[i].capital;
    let region = data[i].region;

    let lang=Object.values(data[i].languages).map((key) => key)
    // console.log((lang[0]))
    
    const Values = Object. values(data[i].languages)
    // console.log(Values[0])

    const myValues = Object.keys(data[i].languages).map(key => data[i].languages[key])
    console.log(myValues[0])

    let latitude = data[i].latlng[0];
    let longitude = data[i].latlng[1];
    let countryCode = data[i].region;
    const container = document.getElementById("contt");
    const card = document.createElement("div");
    card.setAttribute(`class`, `card border-sucess`);
    card.style.maxWidth = "18rem";
    card.innerHTML = `
        <div class="card-header bg-transparent border-success">
              <h5 class="card-title">${data[i].name.official}</h5>
            </div>
            <div class="card-body text-success">
              <img src="" alt="flag" /> 
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${capital}</li>
                <li class="list-group-item">${region}</li>
                <li class="list-group-item">${latitude}</li>
                <li class="list-group-item">${longitude}</li>
                <li class="list-group-item">${countryCode}</li>
                
                <li class="list-group-item">${myValues[0]}</li>
                <li class="list-group-item">${lang[0]}</li>
                
                                
                <li class="list-group-item">
                  <button class="btn-btn-primary" onclick="getWeather(${latitude},${longitude})">
                  Get Weather Data
                  </button>
                </li>
              </ul>
          </div>
      </div>`;
    container.appendChild(card);
  }
}
var weatherid=document.getElementById('weather')
async function getWeather(lat,lon){
  const weather=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=68efa0885519a6f01d76917c463ada68`)
  const weatherjson=await weather.json()
  console.log(weatherjson)
  weatherid.innerHTML=`
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Weather Data</h5>
    <p class="card-text">Humidity:${weatherjson.main.humidity}</p>
  </div>
</div>
  `



}
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=68efa0885519a6f01d76917c463ada68

{/* <a href="https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${appid}">click here for weather</a> */}
                  

{/* <a href="https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=68efa0885519a6f01d76917c463ada68" target="_blank">click here for weather</a> */}
                 