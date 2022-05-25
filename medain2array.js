arr1=[1,6]
arr2=[5,10,2]

function median(arr1,arr2){
    var arrconcat=arr1.concat(arr2)
    console.log(arrconcat)

    var arrsort=arrconcat.sort((a,b)=>a-b)
    console.log(arrsort)

    var length=arrsort.length
    console.log(length)

    if(length%2!=0){
        var result=arrsort[Math.floor(length/2)]
        console.log(result)
    }
    else{
        var result=Math.floor((arrsort[length/2]+arrsort[length/2-1])/2)
        console.log(result)
    }
}
median(arr1,arr2)