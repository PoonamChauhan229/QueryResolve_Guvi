// setInterval(Anim, 1000)

// function Anim() {
//     console.log("hello")
// }


// var a=10;
// var id=setInterval(anim2, 100)

// function anim2(){
//     a=a+10;
//     console.log(a)
//     if(a==300){
//         clearInterval(id)
//     }
//     else{
//         var target = document.getElementById('test')
//     target.style.marginLeft=a+"px";
//     }
    
// }


var id=setInterval(count,2000)
   let  count1=0;
    function count(){
        var target = document.getElementById('test')
        target.style.visibility="visible"

        count1++;
        console.log(count1)
        var target = document.getElementById('test')
            target.innerText=count1;
        if(count1>=10){
            clearInterval(id)            
        }
        if(count1==10){
            console.log("Happy New Year")
            var target = document.getElementById('test')
            target.innerText="Happy New Year"
        }       
        
    }

