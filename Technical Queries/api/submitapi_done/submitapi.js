// eg : name=micheal

async function foo(){
    
    console.log("hi")
    var res=document.getElementById("text").value;
    console.log(res);
    let result=await fetch(`https://api.nationalize.io?name=${res}`);
    let final=await result.json();
    console.log(final);
    
    // Object.keys=>Give the key 
    console.log(Object.keys(final))
    console.log(Object.keys(final).length)
    let final2=Object.keys(final).length;
    let ele=document.getElementById("container");   
    ele.innerHTML="";

    for(var i=0;i<=final2;i++){
        ele.innerHTML=`country:${JSON.stringify(final.country[i].country_id) }`;
    }
}



