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
export class Player {
    constructor(name, age, 
    // public age: number,
    country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProprty() {
        return this.age;
    }
    play() {
        console.log(this.name + " plays: " + this.age + this.country);
    }
}
