async function pokemonApi(){
    try{
    var data =await fetch('https://restcountries.com/v3.1/all')
    console.log(data)
    var res1=await data.json()
    console.log(res1)
   
    const n1=document.getElementById('restCountries')
   // n1.innerHTML=`<h3>${response.results[0].name}</h3>`

   //for loop
   for(i=0;i<5;i++){

    n1.innerHTML+=`  
        
            <div class="card-body border">                                
                            <div id="date">Area:${res1[i].area}</div>
                            <div id="active">Capital:${res1[i].capital}</div>
                            
                            <div id="deaths">Coat of Arms:<br>${res1[i].coatOfArms.png}</div>
                            <img src=${res1[i].coatOfArms.png} class="card-img-top" alt="...">
                            <div id="deaths">Flags:${res1[i].flags.png}</div>
                            <img src=${res1[i].flags.png} class="card-img-top" alt="...">
                            <button>Click for weather data</button>
                            </div>                             
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