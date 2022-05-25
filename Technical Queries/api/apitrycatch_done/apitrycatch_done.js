
async function myDisplay() {
    try {
        let res = await fetch("https://www.anapioficeandfire.com/api/books")
            .then((res) => {
                if (!res.ok) {
                    throw Error(`Can't fetch data ${res.status}`)
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
            })

    } 
    catch (err) {
        console.log(err);
    }

}
myDisplay()

