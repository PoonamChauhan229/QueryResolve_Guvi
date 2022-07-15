// Starting time
let s = [ 1, 3, 0, 5, 8, 5 ];
 
// Finish time
let f = [ 2, 4, 6, 9, 8, 9 ];
 
// Number of meetings.
let n = s.length;

var aCollectiveArray = [];
for(var i=0; i<s.length; i++){
    var aNew = [];
    aNew.push(i + 1);
    aNew.push(s[i]);
    aNew.push(f[i]);
    aCollectiveArray.push(aNew);
}
console.log(aCollectiveArray)
// meetingno,starttime,endtime
//array sorted based on end Time
aCollectiveArray.sort((a,b) => a[2] - b[2]);
console.log(aCollectiveArray)
