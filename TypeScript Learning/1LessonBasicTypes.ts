// boolean Type
let isCompleted: boolean = false;

// Error
// isCompleted = 42;
// isCompleted = '42';

isCompleted = true;


// Number type
const decimal: number = 6;
const integer: number = 7.10;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

//String type
const name1: string = 'Yahen';

const setnence: string = 'hello, my name is ${ name1 }!';

// Null and underfind
const u: undefined = undefined;
const n: null = null;


//Void type
//Needs for unwrite types
const greatUser = (): void => {
    alert('Hello, nice to meet u!');
};


//for greatUser
//error
// const greatUser: void = () => {
//     alert("Hello!");
// };
