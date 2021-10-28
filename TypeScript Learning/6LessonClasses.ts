// // Simple class  example
// class User {

// }

// // class Types
// class User {
    
//     name: string;
//     age: number;
//     nickName: string;
// }

// Class types, including constructor
// class User {
//     name: string;
//     age: number;
//     nickName: string;

//     constructor(name: string, age: number, nickName: string) {
//         this.name = name;
//         this.age = age;
//         this.nickName = nickName;
//     }

// }

// const yauhen = new User('Yauhen', 31, 'lol');

// yauhen;


// // Class types modification
// class User {
//     public name: string;
//     protected age: number;
//     private nickName: string;
//     readonly pass: number;

//     constructor(name: string, age: number, nickName: string, pass: number) {
//         this.name = name;
//         this.age = age;
//         this.nickName = nickName;
//         this.pass = pass;
//     }   

// }

// const yauhen = new User( 'Yauhen', 42, "kek", 123);


// // Minimization class property

// class User {
//     constructor(
//         public name: string,
//         public age: number,
//         public nickName: string,
//         public pass: number
//     ) {}
// }

// get acces to privat property

class User {
    private age: number = 20;

    constructor(public name: string) {}

    setAge(age:number) {
        this.age = age;
    }

    set myAge(age: number) {
        this.age = age;
    }
}

const yauhen = new User('Yauhen');
yauhen.setAge(30);
yauhen.myAge = 31;