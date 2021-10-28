// Array Type
let list1: number[] = [1,2,3];

let list: Array<number> = [1,2,3]; //Genetic type

//Tuple Type
//Multiple lines
let x: [string, number];
x = ['hello', 10];

//One line
let y: [string, number] = ['good', 12];

// Error
// x = [10, 'wow'];

//Any type
//Any type for array
let f: [any, any] = ['good', 42];
let z: Array<any> = [10, 'hello'];

//Any type for string
let notSure: any = false;

//Issue case
notSure = true; //boolean
notSure = 42; // number
notSure = 'hello'; // string


// Enum type
enum Directions { 
    Up,
    Down,
    Left,
    Right
}

Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3


// Custom Index for Enum elements
enum Directions { 
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}

Directions.Up;
Directions.Down;
Directions.Left;
Directions.Right;

//Never Type
//Function return Error
const msg = 'hello';
const error = (msg: string): never => {
    throw new Error(msg);
};

//Function infinite loop
const infinityLoop = (): never => {
    while (true) {
    }
};

//Object Type
const create = (o: object | null): void => { };
create(1);
create('420');
create({obj: 1});

// Multiple Types for one value
let id: number | string;

id = 10;
id = '42';
id = true;


//Type
type Name = string;
let id: Name;
id = '42';
id = 10;
