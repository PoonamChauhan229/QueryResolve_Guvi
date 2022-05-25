async function pokemonApi(){
    try{
    var data =await fetch('https://api.openbrewerydb.org/breweries')
    console.log(data)
    var response=await data.json()
    console.log(response)
   
    const n1=document.getElementById('pokemonDiv')
   // n1.innerHTML=`<h3>${response.results[0].name}</h3>`

   //for loop
   for(i=0;i<response.length;i++){

    n1.innerHTML+=`
    <div class="card-body border">
      <h5 class="card-title">${response[i].id}</h5>
      <p class="card-text">${response[i].name}</p> 
      <p class="card-text">${response[i].brewery_type}</p>
      <p class="card-text">${response[i].city}</p>
    </div>
    
    `

   }
   
    

    }
    catch(error){
        console.log(error)
    }

}
pokemonApi()


