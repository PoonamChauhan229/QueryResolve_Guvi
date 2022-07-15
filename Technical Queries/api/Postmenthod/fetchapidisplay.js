async function pokemonApi(){
    try{
    var data =await fetch('https://api.covid19api.com/total/dayone/country/india')
    console.log(data)
    var res1=await data.json()
    console.log(res1)
   
    const n1=document.getElementById('pokemonDiv')
   // n1.innerHTML=`<h3>${response.results[0].name}</h3>`

   //for loop
   for(i=0;i<10;i++){

    n1.innerHTML+=`          
    <div class="card-body border">
                            <div id="date">Date:${res1[i].Date}</div>
                            <div id="active">Total Active Cases:${res1[i].Active}</div>
                            <div id="recovered">Total Recovered Cases:${res1[i].Recovered}</div>
                            <div id="deaths">Total Death Cases:${res1[i].Deaths}</div> 
    </div>
    
    `

   }
   
    

    }
    catch(error){
        console.log(error)
    }

}
pokemonApi()


{/* <div class="card-body border">
//   <h5 class="card-title">${response[i].id}</h5>
//   <p class="card-text">${response[i].name}</p> 
//   <p class="card-text">${response[i].brewery_type}</p>
//   <p class="card-text">${response[i].city}</p> */}

const data={
    Active: 1,
City: "",
CityCode: "",
Confirmed: 1,
Country: "India",
CountryCode: "",
Date: "2020-01-30T00:00:00Z",
Deaths: "0",
Lat: "0",
Lon: "0",
Province: "",
Recovered: 0,
}

async function postApi(){
    

}