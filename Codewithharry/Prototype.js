let user = {
    getFulName: function () {
        return `${this.name} ${this.lname}`;
    },
    getAge: function () {
        let age = new Date().getFullYear() - this.birth;
        return age;
    }
}
let student = {
    name: "Ayush",
    lname: "Thakur",
    birth: 2001,
}
let teacher = {
    name: "Sachin",
    lname: "Kumawat",
    birth: 1990,
}
student.__proto__ = user;
teacher.__proto__ = user;

console.log(student.getFulName());
console.log(student.getAge());
console.log(teacher.getFulName());
console.log(teacher.getAge());




// let arr1 = [6,5,4];
// let arr2 = [3,6,7];
// let arr3 = [...arr1,...arr2];
// let arr4 = arr3.sort((a,b)=>a - b)
// let sum = 0;
// for (let i = 0; i < arr4.length; i++){
//     sum = sum + arr4[i];
// }
// console.log(sum)
// let aa = sum.toString().split('').reverse().join('').toString();
// console.log(arr3)
// console.log(aa)
// console.log(arr3)
// console.log(arr4)
// let arr3 = arr1.sort()
// let arr4 = arr2.sort((a,b)=>b -a)
// console.log(arr3)
// console.log(arr4)
// // let arr5 = [...arr3,...arr4]
// let arr5 = arr3.toString()
// console.log(arr5)
// let str1='';
// let str2='';
// for(let i=arr1.length-1;i>=0;i--){
//     str1 += arr1[i];
    
// }
// console.log(str1);
// for(let i=arr2.length-1;i>=0;i--){
//     str2 += arr2[i];
    
// }
// console.log(str2);
// let arr4 = [];
// let arr3=[];
// arr3=String(Number(str1)+Number(str2));
// console.log(arr3.split(''));
// for (let i = arr3.length - 1;i>=0; i--){
// arr4.push(Number(arr3[i]))
// }
// console.log(arr4)
