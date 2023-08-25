// let arr = [2,5,1,5,6,8,9,9,5]
// for (i = 1;i<arr.length;i++){
//     if(i%2==0){
//         console.log(i);
//     }
//     // else{
//     //     console.log(i)
//     // }
// // }

// let a = 1;
// let b = 2;
// // let c = a;
// // a=b;
// // b=c;
// [a,b] = [b,a];
// console.log(`The Value of a is ${a} and the value of b is ${b}.`);
// let a =3;
// let b =-4;
// let c =5;
// if (a>0 && b>0 && c>0){
//     console.log("The Sign is +");
// }
// else{
//     console.log("The Sign is -");
// }
// let a = 10;
// let fact = 1;
// for (a;a>=1;a--){
//     fact = fact * a;
//     console.log(fact)
// }
// let obj = {
//     a:"Ayush",
//     b:null,
//     c:"Thakur",
//     d:undefined
// }
// console.log(obj);
// let newObj = Object.entries(obj).filter(([key,value])=>value != null);
// console.log(newObj);
// let aa = Object.fromEntries(newObj);
// console.log(aa);

// let arr = ([
//     ['a',1],
//     ['b',2],
//     ['c',3],
//     ['d',4]
// ])
// let a = Object.fromEntries(arr);
// console.log(a)
// let arr = [22,66,42,99,1,5,6];
// let arr1 = arr.sort((a,b)=>b-a);
// console.log(arr1);
// let arr = [1,3,4,5,5];
// let arr1 = [2,4,6,6,8];
// // // let arr2 =  console.log(arr.concat(arr1));
// // // function removeDuplicate(arr2){
// // //     return arr2.filter((item,index)=>arr2.indexOf(item) === index) 
// // // }
// //console.log(removeDuplicate(arr2));
// let arr2 = [...arr,...arr1];
// arr2.sort((a,b)=>a-b);
// arr2 = [...new Set(arr2)]
// console.log(arr2);
// let a = 2;
// let b = 5;
// [a,b]=[b,a];
// console.log(a);
// let a = [1,2,3,4,5,6];
// for (let value in a){
//     console.log(value)
// }
// function sun(...input){
//     console.log(input);
//     let total = 0;
//     for (let i of input){
//         total += i;
//     }
//     console.log(total);
// }
// sun(1,3,4,5,6,6);
// let arr = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr,4,5,6,...arr2];
// console.log(arr3);
// // console.log(arr);
// let arr1 = [1,2,3,4,5];
// let arr2 = [3,4,5,6,7];
// const intersection = arr1.filter((value)=>{
//     return arr2.includes(value);
// })
// // console.log(intersection);
// const unionArr = [...arr1,...arr2];
// let unionArr1 = [...new Set(unionArr)];
// console.log(unionArr1);
// let obj = {
//     name : 'ayush',
//     age : 22
// }
// let obj2 = {
//     name : 'thakur',
//     age : 23
// }
// console.log({...obj,...obj2});

// let a = [4,8,10,9,5];
// let b = [5,10,8,9,4];
// console.log(a == b);
// console.log(a === b);
// let a = 'ayush';
// console.log(a.split('').reverse().join(''))

// const rev = ((num)=>{
//     let muRev = num.toString().split('').reverse().join('');
//     console.log(muRev);
// })
// rev(-123);
// let num = 4;
// for (fact = 1; num > 1; num--){
//     fact = fact * num;
// }
// console.log(fact);
// let a = [4,9,5];
// let b = [9,4,9,8,4];
// let c =[...a,...b];
// let f = [...new Set(c)];
// console.log(f);
// var a = 10;

// for (let i = 1; i < 10; i++){
//     setInterval(()=>{
//         console.log(i)
//     },3000);
// }
// let a = [1,2,3,4,5,6,7,8,9];
// let s = 0;
// for (i = 0; i < a.length; i++){
//     s = s + a[i];
// }
//  console.log(s);
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let res = 0;
// for (i=0;i<arr1.length;i++){
//     res += arr1[i];
// }
// console.log(res);

// let arr = [1,2,3,4,5,6,7,8,9];
// for (i=0;i<arr.length;i++){
//     if (arr[i]%2==0){
//         console.log(arr[i] + " Even Number");
//     }
//     else{
//         console.log(arr[i] + ' Odd Number')
//      }
//  }
// var arr = [1,2,3,4,5,6,7,8];
// if(arr1 = arr.filter((num)=> num % 2 == 0)){
//     console.log(`Even Number are ${arr1}`);
// }
// if(arr1=arr.filter((num)=> num % 2 != 0)){
//     console.log(`Odd Number are ${arr1}`)
// }
// let arr = [8,9,7,5];
// even = 0;
// odd = 0;
// for (let i = 0;i < arr.length; i++){
//     if (arr[i]%2==0){
//         even = even + arr[i];
//        // console.log(`sum of even number is ${even}`)
//     }
//     else{
//         // console.log(i + "odd number")
//         odd = odd + arr[i];
//     }
// }
// console.log(`sum of even number is ${even}`);
// console.log(`sum of odd number is ${odd}`);
// if (even > odd){
//     console.log("Even is greater by : " , even - odd)
// }
// else{
//     console.log("Odd is greater by  :" , odd - even)
// }

// console.log("Time will tell");
// let sum = ()=>{
//     console.log("Hello World");
// }
// setTimeout(sum,5000);
// console.log("Code End");
// console.log("Script started");
//  setInterval(()=>{
//     console.log(Math.random());
// },2000);
// console.log("Script Ended");

function myFun() {
    console.log("This is function");
}
function myFun2() {
    console.log("This is my second funtion");
    myFun();
}
myFun2();
