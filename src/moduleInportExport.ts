// export class Player {
//   constructor(
//     private name: string,
//     public age: number,
//     readonly country: string
//   ) {}
//   play() {
//     console.log(this.name + " plays: " + this.age + this.country);
//   }
// }

import { IsPlayer } from "./isPlayer.js";
export class Player implements IsPlayer {
  constructor(
    public name: string,
    public age: number,
    // public age: number,
    readonly country: string
  ) {}
  getProprty(): number {
    return this.age;
  }
  play() {
    console.log(this.name + " plays: " + this.age + this.country);
  }
}
