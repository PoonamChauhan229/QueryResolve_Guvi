// eg : name=micheal

async function foo(){
    
    console.log("hi")
    var brand=document.getElementById("text").value;
    console.log(brand);
    let result=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`);
    let final=await result.json();
    console.log(final);
    
    // Object.keys=>Give the key 
    // console.log(Object.keys(final))
    // console.log(Object.keys(final).length)
    let final2=Object.keys(final).length;
    console.log(final2)
    let final3=final.length
    console.log(final3)
    let ele=document.getElementById("container");   
    ele.innerHTML="";

    for(var i=0;i<=final3;i++){
        ele.innerHTML+=`Brand Name:${final[i].id}
                         Name:${final[i].name}   
        `;
    }
}



