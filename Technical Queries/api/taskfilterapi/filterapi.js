
// async function country() {
//     try {
//         let url = "https://restcountries.com/v2/all/";
//         var response = await fetch(url);
//         console.log(response)
//         var responseJSON = await response.json();
//         console.log(responseJSON)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// country()


// // responseJSON.filter((x) => {
// //     for (i = 0; i < x.currencies.length; i++) {
// //         if (x.currencies[i].code === "USD") {
// //             console.log(`${x.name}`);

// //         }
// //     }
// // });

let url = "https://restcountries.com/v2/all/"

async function country(url) {
    try {
        var response = await fetch(url);
        var responseJSON = await response.json();
        responseJSON.filter((x) => {
            for (i = 0; i < x.currencies.length; i++) {
                if (x.currencies[i].code === "USD") {
                    console.log(`${x.name}`);

                }
            }
        });
    }
    catch(err){
        console.log(err)
    }
}
country(url)