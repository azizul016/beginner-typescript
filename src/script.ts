// console.log("I love bangladesh");
let a: string;
let b: number;
a = "rahim";
b = 3;
// console.log(a, b);
//string array only push string values;
let c: string[] = [];
c.push("rahim");
// console.log(c);

//number array only push number values;
let d: number[] = [];
d.push(22);
// console.log(d);
//string and number in an array, you can push string or number  values together;
let e: (string | number)[] = [];
e.push("karim");
e.push(22);
// console.log(e);

//object part;
let f: object;

f = {
  a: "rahim",
  b: 3,
};

f = [];

let g: {
  name: string;
  age: number;
  owner: boolean;
};
g = {
  name: "rahim",
  age: 3,
  owner: true,
};

// Dynamic Type
let h: any = [];
let i: {
  name: any;
  age: any;
  owner: any;
};
let j: any;
j = 33;
j = "Dynamic";
