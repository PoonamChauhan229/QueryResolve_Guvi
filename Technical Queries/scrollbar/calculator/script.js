let screen =document.getElementById("screen");
// let buttons = document.querySelectorAll("buttton");
let buttons = document.querySelectorAll("button");
console.log(buttons)
let screenValue="";
for (item of buttons){
    item.addEventListener("click",(e)=>{
    buttonText =e.target.innerText;
    console.log('Button text is',buttonText);
    if(buttonText =="X"){
        buttonText = "*";
        screenValue += buttonText;
        screen.value =screenValue;
    }
    else if (buttonText =="C"){
        screenValue = "";
        screen.value = screenValue;
    }
    // else if (buttontext == "="){
        else if (buttonText == "="){

        screen.value = eval(screenValue);
    }
    else{
        // screenValue += buttonnText;
        screenValue += buttonText;

        screen.value = screenValue;
    }
})
}