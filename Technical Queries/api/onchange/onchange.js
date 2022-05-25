let btnShow=document.querySelector('button')
let res=document.querySelector('h1')


function Show(){
    let selected=document.querySelector('input[type=checkbox]:checked')
    res.innerText=selected.value;
}

//var mainDiv=document.getElementsByClassName('.mainDiv')
async function getApi(){
    await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        console.log(data[0].brand)
        desc=data[0].brand;
        const n1=document.getElementById('mainDiv')
        //const heading=`<h3>${data[0].brand}</h3>`
        n1.innerHTML=desc
    })
}
getApi();