let page = 1
let totalimge = 0
let loadimage = 0



apikey = 'EOeSQIpAFbFV2Qf40EWtO2lw1aNKnlrZjFpaA_YOYH0'

function scrollfunc(){
    loadimage++
    console.log('image loaded',loadimage);
    console.log('totalimge = ',totalimge);
    if (loadimage===totalimge){
        loadimage = 0
        page++
    }
}

const func = async ()=>{
    console.log('page the page is: ',page);
    apiURL = `https://api.unsplash.com/photos/?client_id=${apikey}&page=${page}`
    let response =  await fetch(apiURL)
    data = await response.json()
    totalimge = data.length
    for(let i of data){
        let image = document.createElement('img')
        image.setAttribute('src',i.urls.thumb)
        image.addEventListener('load',scrollfunc)
        document.body.append(image)
    }
}

window.addEventListener('scroll',()=>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100){
        func()
    }
})

// console.log(window.innerHeight);
// console.log(window.scrollY);
// console.log(document.body.offsetHeight);

func()

// https://gist.github.com/MagiMagesh/3a33f8e6f77ad4eb3b3d718f6e4bc990