let string = "";
var n=3
var m=5
for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < m; j++) { // internal loop

    if(j === 0) {         
        string += "*"+" ";
    }
    else if(j === m - 1){
      string += "*"; 
    }
    else if(i === 0 ||i === n - 1){
        string += "*"+" ";
      }
      
        else {
          string += " "+" ";
        }
      }
  string += "\n";
}
console.log(string.trim());