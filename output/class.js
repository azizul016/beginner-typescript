// class Player {
//   private name: string; //not change beside class and not accessable beside class
//   age: number;
//   readonly country: string; //only readonly field
//   constructor(a: string, b: number, c: string) {
//     this.name = a;
//     this.age = b;
//     this.country = c;
//   }
//   play() {
//     console.log(this.name + " plays: " + this.age + this.country);
//   }
// }
//short cut for class using access modifiers such as private public readonly
// class Player {
//   constructor(
//     private name: string,
//     public age: number,
//     readonly country: string
//   ) {}
//   play() {
//     console.log(this.name + " plays: " + this.age + this.country);
//   }
// }
import { Player } from "./moduleInportExport.js";
const rahim = new Player("rahim", 32, "bangladesh");
const karim = new Player("karim", 42, "india");
// console.log(karim.name);
// console.log(rahim.play());
// // console.log(karim.play());
let players = [];
players.push(karim);
players.push(rahim);
function DrawRectangle3(option) {
    let length = option.length;
    let width = option.width;
    console.log(length, width);
}
let option = {
    length: 23,
    width: 22,
    height: 22,
};
DrawRectangle3(option);
