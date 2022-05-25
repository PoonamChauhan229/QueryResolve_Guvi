let request = new XMLHttpRequest();
request.open("GET", "https://62826cf1ed9edf7bd8843f17.mockapi.io/RITHU");
request.send();
request.onload=function(){
    console.log(request.response);
    console.log(request.responsetext);
    console.log(request.status);
    console.log(request.statustext);
}
request.onerror=function(){
    console.error("something went wrong");
};
