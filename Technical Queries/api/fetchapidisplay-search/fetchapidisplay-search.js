
const searchBar = document.getElementById('searchBar')
let responseBrewery = [];
searchBar.addEventListener("keyup", function (e) {
  // console.log(e.target.value)
  const searchString = e.target.value.toLowerCase();
  console.log(searchString)
//  console.log(responseBrewery)
 const filterResponse=responseBrewery.filter((brewery)=>{

   return(
  brewery.name.toLowerCase().includes(searchString) ||
  brewery.brewery_type.toLowerCase().includes(searchString)||
  brewery.city.toLowerCase().includes(searchString)||
  brewery.id.toLowerCase().includes(searchString)
  );
 });
  console.log(filterResponse)
  displayBrewery(filterResponse)
})

async function loadBrewery() {
  try {
    var data = await fetch('https://api.openbrewerydb.org/breweries')
    console.log(data)
    responseBrewery = await data.json()
    console.log(responseBrewery)
    displayBrewery(responseBrewery)
  }
  catch (error) {
    console.log(error)
  }
}

function displayBrewery(breweryDetails){
  const n1 = document.getElementById('breweryDiv')
   
  // display brewerylist
  const list=breweryDetails.map(element => {
   return `
  <div class="card-body border newDiv">
    <h5 class="card-title">${element.id}</h5>
    <p class="card-text">${element.name}</p> 
    <p class="card-text">${element.brewery_type}</p>
    <p class="card-text">${element.city}</p>
  </div>
  `
  });
n1.innerHTML=list;
}
loadBrewery()

// links to refer
// https://www.youtube.com/watch?v=wxz5vJ1BWrc
