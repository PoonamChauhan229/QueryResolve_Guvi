var covidData=document.getElementById('covidData')
console.log(covidData)
async function foo(){

var cc=document.getElementById('input').value
console.log(cc)   
let res= await fetch(`https://api.covid19api.com/total/dayone/country/${cc}`);
let res1=await res.json();
console.log(res1)

for(i=0;i<10;i++){

    covidData.innerHTML+=`          
    <div class="card-body border">
                            <div id="date">Date:${res1[i].Date}</div>
                            <div id="active">Total Active Cases:${res1[i].Active}</div>
                            <div id="recovered">Total Recovered Cases:${res1[i].Recovered}</div>
                            <div id="deaths">Total Death Cases:${res1[i].Deaths}</div> 
    </div>   
    `
}
}