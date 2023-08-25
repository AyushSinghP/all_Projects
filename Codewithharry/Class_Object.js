// class student{
//     constructor(name,age,classes){
//         this.names = name;
//         this.ages = age;
//         this.class = classes;
//     }
//     Biodata(){
//         return `Hi i am a class method of ${this.names} age is ${this.ages} and class is ${this.class}`;
//     }
// }
// class Player extends student{
//     constructor(name,age,classes,game){
//         super(name,age,classes);
//         this.games = game;
//     }
//     Bio(){
//         return `${super.Biodata()} I am a player of this game ${this.games}.`;
//     }

// }
// let obj1 = new Player("Ayush",22,"Finel Year");
// let obj2 = new Player("Ayush",22,"Finel Year","Cricket");
// obj1.Biodata();
// console.log(obj2.Bio());


class Ayush {
    constructor(name, mname, lname) {
        this.name = name;
        this.Mname = mname;
        this.Lname = lname
    }
    Bio_data() {
        return `My Name is ${this.name} ${this.Mname} ${this.Lname}.`
    }
}
class Father extends Ayush {
    constructor(name, mname, lname, nname) {
        super(name, mname, lname)
        this.Fname = nname;
    }
    Fbio_data() {
        return `${super.Bio_data()} My Father Name is ${this.Fname}.`
    }
}
let obj = new Father("Ayush", "Singh", "Panwar");
let obj1 = new Father("Ayush", "Singh", "Panwar", "Bhagwan Singh Panwar");
// console.log(obj.Bio_data());
console.log(obj1.Fbio_data());