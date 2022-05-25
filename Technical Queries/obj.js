const obj={
    "foo":"bar",
    "baz":"42",
    "name":"Uday",
    "studies":{
        "college":"Jeppiar"
    }
}


Object.entries(obj).forEach((key)=>{console.log(key)})

let student= {
    name:'John doe',
    age:21,
    year:2022,
    marks:{
        science:92,
        arts:91
    },
    attendance:['mon','tue','wed']
}

Object.keys(student).forEach(key => {
    console.log(key, student[key]);
  });

Object.values(student).forEach(val => {
    console.log(val);
  });