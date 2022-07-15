const url = fetch(
    "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
  );
  url
    .then((data) => data.json())
    .then((value) => {
      console.log(value);
      build(value);
    })
    .catch((err) => console.log(err));
  
  function build(value) {
    var div = document.createElement("div");
    div.setAttribute("class", "container");
    document.body.appendChild(div);
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    div.appendChild(row);
    value.forEach((country) => {
      let col = document.createElement("div");
      col.setAttribute("class", "col-lg-4 col-sm-12");
      row.appendChild(col);
  
      var card = document.createElement("div");
      div.setAttribute("class", "card");
      col.appendChild(card);
  
      let head = document.createElement("h2");
      head.setAttribute("class", "card-header");
      head.innerHTML = country.name;
      card.appendChild(head);
  
      let body = document.createElement("div");
      body.setAttribute("class", "card-body");
      card.appendChild(body);
        console.log(country.flag)
        let imgsrc=country.flag;
        console.log(country)
      let image = document.createElement("img");
      image.setAttribute("class", "flag-image");
      image.setAttribute("src", imgsrc);
      image.setAttribute("alt", "flag");
      body.appendChild(image);
  
      let capital = document.createElement("h6");
      capital.setAttribute("class", "capital");
      capital.innerHTML = `<br> <b>CAPITAL</b>: &nbsp ${country.capital}`;
      body.appendChild(capital);
  
      let region = document.createElement("p");
      region.setAttribute("class", "region");
      region.innerHTML = `<br><b>REGION</b>: &nbsp ${country.region}`;
      body.appendChild(region);
  
      let code = document.createElement("p");
      code.setAttribute("class", "code");
      code.innerHTML = `<br> <b>CODE</b>: &nbsp ${country.alpha3Code}`;
      body.appendChild(code);
  
      let lat = document.createElement("p");
      lat.setAttribute("class", "lat");
      lat.innerHTML = `<br> <b>LAT&LONG</b>: &nbsp ${country.latlng}`;
      body.appendChild(lat);
  
      let weather = document.createElement("button");
      weather.setAttribute("class", "btn btn-primary");
      weather.innerText = " Click for weather";
      weather.addEventListener("click",function(){
          weather.innerText   ="";
          console.log(country.latlng[0], country.latlng[1])
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=8a1aebf6f8ca462a49f5430600ef3890`)
          .then((data) => data.json()).then((value)=>{
              console.log(value);
              let para = document.createElement("div");
          para.innerHTML = `<p>Temperature:${value.main.temp} &#8457;</p>
          <p>Max-temp:${value.main.temp_max} &#8457;</p>
          <p>Min-temp:${value.main.temp_min} &#8457;</p>
          <p>Feels like :${value.main.feels_like} &#8457;</P
          `
          weather.appendChild(para);
      }).catch(err => {console.log(err)});
      })
      body.appendChild(weather);
    });
  }