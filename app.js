console.log("Welcome to JavaScript Objects!")

// Declaring Object:
// --- <>
let person = {
    name: "Shay",
    age: 40, 
    job: "Coach"
}

// Another way to type out an object:
let personTwo = {name:"Minnie", age: 17, job: "Party Planner"}

console.log("person:", person)

// If I want to know the keys (Returns Array)
console.log(Object.keys(person))

// If I want to know the values (Returns an Array)
console.log(Object.values(person))
// --- <>

// Objects vs. Arrays
// ---- <>

// When to Use Objects
// ----- <> ----- <>
// 1. Data has key-value pair
// Example : Person info (Student Profile)
// ----- <> ----- <>

// When to Use Array 
// ----- <> ----- <>
// 1. Data is list
// List of your favorite Movies
// ----- <> ----- <>

// Example of an Array with Objects:


let favMovies = ["Goonies", "Good Time", "The Dark Knight", "Back to the Future"]
console.log(favMovies)

// Now lets create a new array with objects:

let goonies = {
    title: "The Goonies",
    release: 1985,
    rating: "PG"
}

let theDarkKnight = {
    title: "The Dark knight",
    release: 2008,
    rating: "R"
}

let grownUps = {
    title: "grown ups",
    release: 2010,
    rating: "PG-13"
}

let objectFavMovies = [goonies, "Good Time", theDarkKnight, grownUps]

// console.log(objectFavMovies)
// ---- <>



// Start Accessing Objects
// ---- <>

let student = {
    name: "Steve",
    age: 18,
    grade: "12th"
}

// Dot Notation
// console.log(student.name)
// console.log(student.age)
// console.log(student.grade)

// Bracket Notion
// console.log("students age", student["age"]);
// ----- <>

// Nested Objects
let user = {
    name: "Liam",
    address: {
        city: "Seoul",
        country: "South Korea"
    },
    items: ["ball", "bat", "glove"]
}

// Dot Notation
// Get info of the City

// Thanks
// console.log(user.address.city);
// console.log(user.items)

// Example Two
let card = {
    type: "basketball", 
    player: "Lebron James", 
    year: 2003
}

let userTwo = {
    name: "William",
    address: {
      city: "Seoul",
      country: "South Korea"
    },
    items:  [card, "bat", "glove"]
}

// console.log(userTwo.items[0])
// console.log(userTwo.items.card)
// console.log(userTwo.items[0])
// ---- <>

// For In Loop
let car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2023
}

// for (key in car) {
//     console.log(`${key}: ${car[key]}`)
// }

// for (key in student) {
//     console.log(`${key}: ${student[key]}`)
//    }
