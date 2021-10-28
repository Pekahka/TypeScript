// Object type using any
let user: any = {
    name: 'Yahen',
    age: 30,
};
user = 'test';

// Define object type
let user: {name: string, age: number} = {
    name: 'Yashen',
    age: 43,
};

// Using type for objects structure
type Person = {name: string, age: number, nickName: string};

let user: Person = {
    name: 'Yahen',
    age: 30,
    nickName: 'Lol',
};

let admin: Person = {
    name: 'Max',
    age: 30,
    nickName: 'Loles',
};


// Updating type 
type Person ={
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string,
};
