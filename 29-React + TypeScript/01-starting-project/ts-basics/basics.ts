// Primitives: number,string, boolean, null, undefined, symbols.
// More complex types: arrays, objects.
// Function types, parametres.


// Primitives: number,string, boolean, null, undefined, symbols.

let age: number; //declaring a variable with type assigned. Number refers to Number object not primitive type.

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;


// More complex types: arrays, objects.

// ALL arrays are of the Array type.
// Array actually is a generic type. You could also write the above example liks this:

// let numbers: Array<number> = [1, 2, 3];

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;// Setting types for entire object.

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// };

let people: {
    name: string;
    age: number;
}[];


// Union Type 

let course: string | number = 'React - The Complete Guide';

course = 1231231;


// Functions & types

function add(a: number, b: number) {
    return a + b;
}

//Special return type
function printOutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');