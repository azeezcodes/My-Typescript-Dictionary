let names: string = "azeez";
let age: number = 78;
let gender: boolean = true;

// ----------------array of object in typescript------------------------

interface reviewedAny {
   name: string;
   age: number;
}

let review: reviewedAny[] = [
   {
      name: "ben",
      age: 8,
   },
   {
      name: "jude",
      age: 11,
   },
   {
      name: "rita",
      age: 3,
   },
];

console.log(review[1].age);

function checklen() {
   return `the number of the people here are ${review.length} and the last person is ${review[0].name}`;
}
console.log(checklen());

// ----------------------------- another method of array  of object

const reviews: {
   name: string;
   stars: number;
   loyaltyUser: boolean;
   date: string;
}[] = [
   {
      name: "Sheia",
      stars: 5,
      loyaltyUser: true,
      date: "01-04-2021",
   },
   {
      name: "Andrzej",
      stars: 3,
      loyaltyUser: false,
      date: "28-03-2021",
   },
   {
      name: "Omar",
      stars: 4,
      loyaltyUser: true,
      date: "27-03-2021",
   },
];
// ----------------------------------------------------------------------another method of array of object with embeded obj

const properties: {
   image: string;
   title: string;
   price: number;
   location: {
      firstLine: string;
      city: string;
      code: number;
      country: string;
   };
   contact: string;
   isAvailable: boolean;
}[] = [
   {
      image: "",
      title: "Colombian Shack",
      price: 45,
      location: {
         firstLine: "shack 37",
         city: "Bogota",
         code: 45632,
         country: "Colombia",
      },
      contact: "marywinkle@gmail.com",
      isAvailable: true,
   },
];

// -------------------------------------------object in typescript-------

let hintObj: {
   firstName: string;
   lastname: string;
   id: number;
} = {
   firstName: "Segun",
   lastname: "kunle",
   id: 76,
};
console.log(hintObj.id);

// -----------------------------------------array
// using union type in the drink variable
let arrObj: {
   food: string[];
   drink: (boolean | string | number)[];
} = {
   food: ["eba", "iyan", "tuwo"],
   drink: ["water", "wine", 707, 89, "juice", true],
};
console.log(arrObj.drink);

//  Note : Every data type must have semi-colon at the back of the declaration

// -----------------------------------------------------------Tuple => is not an array, it allows you to set an array to a fixed number of element
// ----tuple is much like union type but tuple is strict with its position of placement

const contact: [string, number, boolean, string] = [
   "honest@gmail.com",
   +234090339393,
   true,
   "Canada",
];

// -------
// During the DOM usage footer can't take the whole combination of currentlocation, it must be splited by array
// use your location, your current time, and the current temperature of your
// location
let currentLocation: [string, string, number] = ["London", "11:35", 17];
let footerInnerHTML =
   currentLocation[0] + " " + currentLocation[1] + " " + currentLocation[2];

// ----------Enum is way of giving more friendly name to set of values.... it make a strict string value that wont be change with another string value
// makes it look like limited values or drop down

enum permissions {
   ADMIN,
   READ_ONLY,
}

let door = {
   state: "open",
   permission: permissions.ADMIN,
   security: "placed",
};

// .------------------------------ enum challenge with player list

enum positionPlace {
   Striker = "Striker",
   Midfielder = "midfielder",
   Keeper = "keeper",
}

interface playerdetail {
   name: string;
   playerNo: number;
   position: positionPlace;
}

let player: playerdetail[] = [
   {
      name: "Mendy",
      playerNo: 45,
      position: positionPlace.Keeper,
   },
   {
      name: "Drogber",
      playerNo: 10,
      position: positionPlace.Striker,
   },
   {
      name: "Kante",
      playerNo: 7,
      position: positionPlace.Midfielder,
   },
];

console.log(player[2].position);

// ----------------------------any data type => its used whenever you dont want to  assign a particular value a data type or dont want a TypeError
let language: any[] = [
   {
      name: "french",
      count: 45,
      dislike: null,
   },
   {
      name: "yoruba",
       count: 45,
      dislike: null
   },
];
// ------------------------exclusive union type  (number | string) means number "OR" string

function add(firstValue: number | string, secondValue: number | string) {
   let result;
   if (typeof firstValue === "number" && typeof secondValue === "number") {
      result = firstValue + secondValue;
   }
   if (typeof firstValue === "string" && typeof secondValue === "string") {
      result = firstValue + " " + secondValue;
   }
   if (typeof firstValue === "number" && typeof secondValue === "string") {
      console.log("cannot perform this addition");
   }
   if (typeof firstValue === "string" && typeof secondValue === "number") {
      console.log("cannot perform this addition");
   }
}

const combinedReviews: void = add(5, 1);
const firstNameLastName = add("Ania", "Kubow");

// ----------------------- literal type "or" using type alias

type price = 200 | 270 | 290

let benz: {
    name: string;
    amount: price;
    color: "blue" | "red";
} = {
    name: "Muhammed",
    amount: 270,
    color: "blue"
}

// ---------------------------------------- functon type => for describing your function, making use of typescript to assign the type of value we expect from a function

function addition (firstValue: number, secondValue: number): number {
   return firstValue + secondValue;
}

// the ":number" indicate that our end result must be number BUT its not neccesary


// ------------------------void => when we are not returning anything in a function ......void is used where there is no data.

let hin: void = undefined;
function emp(): void {
    console.log("empty");
    
}
let you = (): void => {
    console.log("we are the one ");
}
// .----------------------------------------------------

let date: Date = new Date()

let old: number = date.getTime()

console.log(old);
// ----------------------------

interface User {
    dob: string;
    age: number;
    stackAdmin: boolean;
    class: string[];
    score: number[]
}

const user: User = {
   dob: "Thu Jan 14 2021 02:08:58 GMT+0100 (West Africa Standard Time)",
   age: 89,
   stackAdmin: false,
   class: ["NodeJS", "TypeScript"],
   score: [70, 90, 60, 10],
};

// .---------------------------generic it works well with array

function getArray<T>(item: T[]): T[]{
   return new Array<T>().concat(item);
}
let NumArr = getArray<number>([1, 3, 4, 3])
let letter = getArray<string>(["da", "fa", "er"]);

NumArr.push(32);
letter.push("ja")

// -------example 2

let last = <ele>(arr: ele[])=> {
   return arr[arr.length -1]
}
let digit = last<number>([2, 3, 44])
let word = last<string>(["fan", "dsa"])

// ----example 3

let create = <g>(value: g) => {
   return [value]
}
let nuum = create(3)
let wooor = create("night")

//--------this can take 2 diif data types in the function--------4
let double = <one, two>(x: one[], y: two[]) => {
   return `${x} is with ${y}`
}
let jungle = double<number,number>([23, 45], [83, 33])
let alfa = double(["aa", "ee"], ["apple", "mango"])
let gok = double<number,string>([56, 85], ["year", "old"])
console.log(gok);
// ----------------------------------------- if the other side will be null so assign a data type to it
let black = <one, two=string>(x: one[], y: two[]) => {
   return `${x} is with ${y}`;
};
let jun = black<number, number>([23, 45], [83, 33]);
let alf = black(["aa", "ee"], ["apple", "mango"]);
let go = black<number | null>([56, 85], ["j","k"]);

// -----------------------------------------generic 

const makeFullName = (obj: { firstName: string; lastName: string }) => {
   return {
      ...obj,
      fullName: obj.firstName + "" + obj.lastName,
   };
};
// ------------------------ extend generic in advance generic

let hh = <T extends {firstname: string, lastname: string}>(obj: T) => {
   return {
      ...obj,
      fullname : obj.firstname + '.' + obj.lastname
   }
}

//---------------------------------------------------------------generic with interface

interface Table<T> { 
   boss: string;
   positions: number;
   data: T,
}

type TableworK = Table<string >;
