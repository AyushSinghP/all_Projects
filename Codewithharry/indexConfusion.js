// let arr = [1,233,344,4,534,6,7,8,90.8];
// let even = 0;
// let odd = 0;
// for (let i = 0; i < arr.length; i++ ){
//     if (arr[i] % 2 == 0){
//         even = even + arr[i];
//     }
//     else{
//         odd = odd + arr[i];
//     }
// }
// console.log(`Sun of Even Number ${even}`);
// console.log(`Sum of Odd Number ${odd}`);
// if (even > odd){
//     console.log(`Even Number is Greater by : ${even - odd}`);
// }
// else{
//     console.log(`Odd Number is Greater by : ${odd - even}`);

// }
// let a = []
// let b = []
// console.log(JSON.stringify(a)==JSON.stringify(b));
// console.log(JSON.stringify(a)===JSON.stringify(b));
// console.log(a == b);
// console.log(a === b);
// let arr = [{
//     a : 2,
//     b : 3,
//     c : 4
// },{
//     f : 0,
//     g : 8,
//     n : 6
// }
// ]
// let arr1 =Object.values(arr)
// console.log(arr1)
// for (let arr1 of Object.values(arr)){
//     console.log(arr1);
// }
// console.log(Object.values(arr[1]))
// let userDetail = {
//   name: "Ayush",
//   age: 22,
//   designation: "SoftWare Engineer",
//   printDetail: function () {
//     console.log(this.name);
//   },
// };
// userDetail.printDetail();

// let userDetail2 = {
//   name: "vijay",
//   age: 22,
//   designation: "SoftWare Engineer",
// };
// let userDetail3 = {
//   name: "Atharva",
//   age: 22,
//   designation: "SoftWare Engineer",
// };
// userDetail.printDetail.call(userDetail2);
// let person = {
//   fullName: function () {
//     return console.log(this.name + " " + this.age);
//   },
// };
// let person1 = {
//   name: "Ayush",
//   age: 22,
// };
// let person2 = {
//   name: "Viay",
//   age: 23,
// };
// person.fullName.call(person1);
let sum = (a) => (b) => (c) => (d) => a + (b * c) / d;
let all = sum(5)(6)(3)(8);
console.log(all);
