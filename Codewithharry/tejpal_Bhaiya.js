// dymanic key question
// let age = prompt("Type here");
// let obj = {
//     name : "ayush",
//     [age] : "22"
// }
// console.log(obj)


// Nested Question
// let arr = [1,2,3,4,5];
// let sum = 0;
// let count=0;
// for (let i = 0; i < arr.length ; i++){
//     for (let j = i+1; j <arr.length; j++){
//         sum = arr[i] + arr[j];
//         if (5<=sum && sum<=7){
//             console.log(sum);
//             count++ 
//         }
//     }
// }console.log(count);

// Median value
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6, 7];
// let arr3 = [...arr1, ...arr2];
// let median;
// if (arr3.length % 2 != 0) {
//     let middleIndex = (arr3.length / 2);
//     median = arr3[Math.floor(middleIndex)];
//     console.log(median);
// }
// else {
//     let middleIndex = (arr3.length / 2);
//     median = arr3[Math.floor(middleIndex)];
//     console.log(median);
// }

// Triplets of array
// let arr = [12,3,4,1,6,9]
// let sum = 24;
// let ind = arr[0]
// for (let i = 1; i < arr.length ; i++){
//     for (let j = i+1; j <arr.length; j++){
//        if(arr[i]+arr[j]+ind == 24){
//         console.log(ind,arr[i],arr[j])
//        }
//     }
// }

let arr = [1,2,3,4,5,6];
let arr1 = [4,5,8,9,10];
let x =[];
for (let i = 0; i < arr.length; i++){
    if (arr1.indexOf(arr[i]) == -1){
        x.push(arr[i]);
    }
}
console.log(x)
