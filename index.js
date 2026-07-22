"use strict"
//Part 1: Coding Questions
//1. Convert the string "123" to a number and add 7.
let sum =(Number("123")+7);
console.log(sum) //130
//---------------------------------------------------------------------
//2. Check if the given variable is falsy and return "Invalid" if it is.
function falsyValues (value){
if (!Boolean(value)){
return "invalid"
}
else{
    return "valid"
}
}
console.log(falsyValues(1)); //valid
//---------------------------------------------------------------------
//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
function isEven(i){
return (i&1)===0;
}                           
 for(let i=1;i<=10;i++){
    if (isEven(i)) continue; 
    console.log(i) // 1 3 5 7 9
 }
 //---------------------------------------------------------------------
//4. Create an array of numbers and return only the even numbers using filter method.
function getEven(arr){
let evenNumbers = arr.filter(isEven) //isEven function from q3
console.log(evenNumbers);
}
getEven([1,10,50,5,60]) //[ 10, 50, 60 ]
//---------------------------------------------------------------------
//5. Use the spread operator to merge two arrays, then return the merged array.
function mergeArrays(arr1,arr2){
let mergedArrays= [...arr1,...arr2]
return mergedArrays

}
console.log(mergeArrays([1,2,5],[6,7,8])) //[ 1, 2, 5, 6, 7, 8 ]
//---------------------------------------------------------------------
//6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).
function getDay(num){
    switch (num) {
        case 1:
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
    }
}
console.log(getDay(2)) //Monday
//---------------------------------------------------------------------
//7. Create an array of strings and return their lengths using map method
function getLength (arr){
let arrLength=arr.map((string)=>string.length)
console.log(arrLength)

}
getLength(["ab","abc","a"]) //[ 2, 3, 1 ]
//---------------------------------------------------------------------
//8. Write a function that checks if a number is divisible by 3 and 5.
function isDivisible(num){
if (num % 3 === 0 && num % 5 === 0) {
        console.log("Divisible by both");
    } else {
        console.log("Not divisible by both");
    }
}
isDivisible(50) //Not divisible by both
//---------------------------------------------------------------------
//9. Write a function using arrow syntax to return the square of a number
const square = (num)=> num**2; 
console.log(square(10)) //100
//---------------------------------------------------------------------
//10.Write a function that destructures an object to extract values and returns a formatted string.
function formatObject(obj) {
const {name, age} = obj;
return `${name} is ${age} years old ` 
}
const person = {name: 'John', age: 25}
console.log(formatObject(person)) //John is 25 years old 
//---------------------------------------------------------------------
//11.Write a function that accepts multiple parameters (two or more) and returns their sum.
function sumParameters(...parameters) {
  let sum = 0;
  for (const parameter of parameters) {
    sum += parameter;
  }
  return sum;
}
console.log(sumParameters(1, 2, 3)); //6
//---------------------------------------------------------------------
//12.Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function printSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

printSuccess().then(message => {
    console.log(message); //Success after 3s
});
//---------------------------------------------------------------------
//13. Write a function to find the largest number in an array.
function getMax(arr) {
    return Math.max(...arr);
}

console.log(getMax([1, 3, 7, 2, 4])); //7
//---------------------------------------------------------------------
//14. Write a function that takes an object and returns an array containing only its keys.
function getKeys(obj) {
    let keys = [];

    for (let key in obj) { // for in loops over the keys, but for of loops over values
        keys.push(key);
    }


    return keys;
}
console.log(getKeys({name:"omar", age:15})) //[ 'name', 'age' ]
//---------------------------------------------------------------------
//15. Write a function that splits a string into an array of words based on spaces.
function splitString (str){
   let arr=str.split(" ");
   console.log(arr)
}
splitString("Arwa Tawfik") //[ 'Arwa', 'Tawfik' ]

//Part 2: Essay Questions:
/**
 * 1. What is the difference between forEach and for...of? When would you use each?
 * forEach() is an array method that executes a callback function once for each element in an (array). 
 * It (cannot be stopped) early using break or continue, and it does not work directly with await in the way a for...of loop does.
 * 
 * for...of is a loop statement that iterates over the values of an (iterable object, such as arrays, strings, maps, sets, and generators).
 * It (supports) break, continue, and await inside async functions.
 * 
 * I use forEach() when I want to perform an action on every element of an array and don't need to stop the loop early.
 * 
 * I use for...of when I need more control over the loop, such as using break, continue, await,
 * or when iterating over an iterable object, whether it is an array or another iterable object.
 **/
//---------------------------------------------------------------------
/**2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
 * hoisting is the behavior of js to move declaration of variables and functions to the top of their scope.
 * Variables declared with var are hoisted and initialized with undefined.
 * Variables declared with let and const are also hoisted, but they remain in the Temporal Dead Zone (TDZ) until they are initialized.
 * The Temporal Dead Zone (TDZ) is the period between entering a scope and the initialization of a let or const variable. During this period, the variable exists but cannot be accessed.
 * Examples:
*/
//Example of Function declarations hoisting and Variables declared with var
test() //10
function test() {
    x=10;
    console.log(x); 
    var x;
}

console.log(test2) //udefined  //Variable declared with var are hoisted and initialized with undefined
var test2 =() => {
  //  x=10; //ReferenceError dead zone
   // console.log(x);  //TDZ
    let x;

}

//---------------------------------------------------------------------
/**3. What are the main differences between == and ===?
 *  == compare between values only. Ex. 5=="5" equal true.
 *  === compare between values and types. EX. 5===5 equal true.
 */
//---------------------------------------------------------------------
/**4. Explain how try-catch works and why it is important in async operations.
 * The code that might throw an error is placed inside the try block. If an error occurs, JavaScript immediately stops executing the rest of the try block and jumps to the catch block, where the error can be handled.
 * it is important to use it with async operation because the await keyword causes the function to pause and wait for the asynchronous operation to complete.
 * and any errors that occur during the asynchronous operation can be caught in a try-catch block to solve it.
 */
//---------------------------------------------------------------------
//5. What’s the difference between type conversion and coercion? Provide examples of each.
/**
 * type conversion: when developer convert type of variable from type to another type.
 * //Number("5");
 * type coercion: when js convert type of variable from type to another type.
 * Ex:
 * console.log("5"+5)
 * console.log(true+5)
 */


