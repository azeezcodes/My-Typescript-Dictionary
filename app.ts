// data types =>number, string, void, array, null, undefined,boolean, any,
let hello: string = "please be nice typescript"
let greeting: string = "how are you" 
let getty = 8;
getty =  7;
 let arr: string[] = ['hin','min','pin']; 
 let tupletest: [string, number, number,number, boolean] = ['gin yon min',9,900,88,true]

 enum cake{
     flour = 0,
     egg = 1,
     butter = 2
 }
 function jog(val: any){
     console.log(val);
     
 }


 // union type
 let ghgh: string | number

 ghgh = 2;
 ghgh = 'gug'
//  ghgh = true throws error

// type guard
// function  guard(arg1:number | string, arg2:number | string): number | string {
//    if (typeof arg1 == number) {
       
//    }
// }

function intro(num : number):number{
    return num + 34;
}

console.log(intro(89));

// -----------------------

function  kgTo (weight: number | string):number | string {
    if (typeof weight == "number"){
        return weight * 22
    }else{
        return weight;
    }
}
console.log(kgTo (34));
console.log(kgTo ('78kg'));


// -------------------------- literal making a constant with words literal

type word = 100 | 40 | 78;

let h : word = 40; 
// ----------------------------------------------23/06/2022

