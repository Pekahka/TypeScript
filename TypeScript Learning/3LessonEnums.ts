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

//
enum Directions { 
    Up,
    Down,
    Left,
    Right
}

Directions.[0]; // Up
Directions.[1]; // Down
Directions.[2]; // Left
Directions.[3]; // Right

//
enum Directions { 
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8
}

Directions.Up; // 
Directions.Down; // 4
Directions.[6]; // Left
Directions.[8]; // Right

//Custom name for Keys
enum links {
    youtube = 'httpsStototam',
    vk = 'httpsStototam1',
    facebook = 'httpsStototam2'
}

//Using
links.vk
links.youtube


// const enum without using
const enum links {
    youtube = 'httpsStototam',
    vk = 'httpsStototam1',
    facebook = 'httpsStototam2'
}
// Compiled code is empty

