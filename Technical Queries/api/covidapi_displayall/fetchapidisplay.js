async function pokemonApi(){
    try{
    // var data =await fetch('https://api.covid19api.com/total/dayone/country/india')
    var data =await fetch('https://data.covid19india.org/v4/min/data.min.json')
    console.log(data)
    var res1=await data.json()
    console.log(res1)
    // console.log(res1.AN.total)


    Object.values(res1).forEach(val => {
        // console.log(val);
        console.log(val.total)
      });


    const n1=document.getElementById('pokemonDiv')
   // n1.innerHTML=`<h3>${response.results[0].name}</h3>`





   //for loop
   for(i=0;i<res1.length;i++){

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