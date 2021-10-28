const createPassword = (name, age) => '${name}${age}';
createPassword('Jack', 31);

// Argumets type
const createPassword = (name: string, age: number) => '${name}${age}';

//Multiple arguments type
const createPassword = (name: string, age: number | string) => '${name}${age}';

createPassword('Jack', 31);
createPassword('Jack', '31');


// Default arguments
const createPassword = (name: string = 'Max', age: number | string = 20) => '${name}${age}';
createPassword(); //Max20


//Function with two required arguments
const createPassword = (name: string, age?: number | string) => '${name}${age}';

//REST
const createSkills = (name, ...skills) => '${name}, my skills are ${skills.join()}';

//REST type
const createSkills = (name: string, ...skills: Array<string>) => '${name}, my skills are ${skills.join()}';

createSkills('Jack', 'JS', 'ES6');

// Function variable type
let myFunc;

function oldFunc(name: string): void {
    alert('Hello, #{name}, nice to meet you!')
};

myFunc = oldFunc;


// Describe function type
let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
    alert('Hello, #{name}, nice to meet you!')
};

myFunc = oldFunc;
