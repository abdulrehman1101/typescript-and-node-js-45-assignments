// Task 1
console.log("Hello World"); 

//Task 2
// let personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

//Task 3 
let personName = "Abdul Rehman Laghari";

// //in lowerCase
console.log("lowerCase:", personName.toLowerCase());

// //in UpperCase
console.log("UpperCase:", personName.toUpperCase());

// //titel Case
console.log("TittelCase:", personName.replace(/\b\w/g,c=> c. toUpperCase()));


//Task 4
let quote = "A Person who never made a mistake never tried anything new.";
let author = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);

Task 5
let famous_person = "Albert Einstein";
let quote = "A Person who never made a mistake never tried anything new.";
let message = `${famous_person} once said ${quote}`;  

console.log(message);  

Task 6
let personName = "\t\n Abdul Rehman \n\t";

console.log("Original:", personName);
console.log("Stripped:", personName.trim());

Task 7

//addition
let val1 = 5;
let val2 = 3;

console.log("Addition:", val1+val2); 

//subtraction
let val3 = 100;
let val4 = 92;

console.log("Subtraction:", val3-val4);

//Multiplication
let val5 = 4;
let val6 = 2;

console.log("Multiplication:", val5*val6);

//devision
let val7 = 64;
let val8 = 8;

console.log("Devision:", val7/val8);

// Task 8
console.log(5+3);
console.log(100-92);
console.log(4*2);
console.log(64/8);

//Task 9
let favoriteNumber = 786;
let message = `My favorite Number is ${favoriteNumber}.`;

console.log(message);

//Task 10
Author: [Abdul Rehman Laghari]
Date: [Monday, feb 19 , 2024]

//printing my favorite number
let favoriteNumber = 786;

// //my favorite number in a message formate
console.log(`My favorite Number is ${favoriteNumber}.`);

//Task 11
const names = ["Muhammad ali", "Asad ali", "Mehtab", "Sagar","Hammad"];
names.forEach(name => console.log(name)); 

//Task 12
const names = ["Muhammad ali", "Asad ali", "Mehtab", "Sagar","Hammad"];
names.forEach(name => console.log(`${name} is my best friend`));

//Task 13
const modeOfTransporation = ["Car", "bicycle", "Motercycle", "scooter"];

modeOfTransporation.forEach(mode => console.log(`I would like to own a ${mode}`));

//Task 14
const guestList = ["Muhammad Ali", "Asad Ali", "Mehtab"];
guestList.forEach(person => console.log(`Dear ${person} : you are invited to dinner! Please join us`));

//Task 15
const guestList = ["Muhammad Ali", "Asad Ali", "Mehtab"];

// //print invitition message to each person
guestList.forEach(person => console.log(`Dear ${person} : you are invited to dinner! Please join us`));

// //name of the quest who can't make it
const canMakeIt = guestList[1];
console.log(`${canMakeIt} can't make it to dinner`);

// //replace the guest who cannot make it with a new person
guestList[1] = "Sagar";

// //print invition message to each remaining person 
guestList.forEach(person => console.log(`Dear ${person} you are invited to dinner Please join us`));


//Task 16
let guests = ["Muhammad ali", "Asad", "Mehtab"];

console.log("Original guest:");
for (let guest of guests) {
console.log(`Dear ${guest} please join us for Dinner`);}

console.log("we found a bigger dinner table");

// //add one new guest to the beigging of the array
guests.unshift("Sagar");

// //add one new guest to the middel of the array
guests.splice(Math.floor(guests.length / 2), 0, "Asif");

// //use append() to add one new guest to the end of the list
guests.push("hammad");

console.log("updated guests:");

for(let guest of guests){
    console.log(`Dear ${guest} please join us for dinner.`);
}

//Task 17
let guests = ["Muhammad ali", "Asad", "Mehtab", "Asif", "hammad", "sagar"];
console.log("updated guests:");

for (let guest of guests) {
console.log(`Dear ${guest} please join us for Dinner`);}

console.log("we can only invite two people for dinner");

// //remove guests from the list until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`sorry ${removedGuest} we can't invite you to Dinner`);
}
// //print the last two names from the list
guests.pop();
guests.pop();

console.log("final guest list:");
console.log(guests);

//Task 18
let placesToVisit = ["Saudia", "Iran", "Neatherland", "China", "Swizerland"];

// //print original array
console.log("Original Order:");
console.log(placesToVisit);

// //print array in alphabetical order without modifying original list
console.log("\nAlphabatical order:");
console.log([...placesToVisit].sort());

// //show original order
console.log("\nOriginal order (unchanged)");
console.log(placesToVisit);

// //print array in reverse alphabetical order without modifying original list
console.log("\nReverse Alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// //show original order
console.log("\nOriginal order (unchanged)");
console.log(placesToVisit);

// //Reversed the order of list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

// //reverse the order again to get back to original order
placesToVisit.reverse();
console.log("\nBack to original order");
console.log(placesToVisit);

// //sort array in alphabetical order
placesToVisit.sort();
console.log("\nSorted alphabetically");
console.log(placesToVisit);

// //sort array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);

//Task 19
let invitations = ["Muhammad ali", "Asad"];
let count_Invitations = invitations.length;

console.log(`${count_Invitations} people will come to the dinner`);

//Task 20
let countries = ["Pakistan", "china", "Palestine", "United kingdom", "Australia", "canada", "japan", "USA", "Germany" ];
console.log("List of Countries");
console.log(countries);

//Task 21
let quran: {title: string, author: string, language : string, chapters: number, revelation: string} =
{title: "The Holy Quran", author: "Allah (God)", language: "Arabic", chapters: 114, revelation: "Revealed to prophet muhammad (peace be upon him)"};

console.log(quran);

//Task 22
let myArray = [1, 2, 3, 4, 5];

// //trying to access an index that does'nt excist (out of bounds)
let indexOutOfRange = myArray[10];
// //this will cause an index error

// //this is correct 
let indexOutOfRange = myArray[4];

console.log(indexOutOfRange);
   
//Task 23
let car: string = "honda";
// //Q1 is car == 'honda'? prediction: true
console.log("is car == 'honda'? I prediction True");
console.log(car == 'honda');  

// //Q2 is car == 'Fourtuiner' color is red? prediction: false
console.log("is car == 'fourtuiner' color is red? I prediction True");
console.log(car == "fourtuiner");

// //Q3 is car == 'Civic' is 4 seator? prediction: true
console.log("is car == 'civic' is 4 seator? I prediction True");
console.log(car != "civic");

// //Q4 is car == 'mehran' is 8 seator? prediction: true
console.log("is car == 'mehran' is 8 seator? I prediction True");
console.log(car == "mehran");

let city: string = "islamabad";
// //Q5 is Pakistan capital is != islamabad? prediction: false
console.log("is Pakistan capital is == 'islamabad'? I prediction False");
console.log(city != 'islamabad'); 

// //Q6 is sindh capital is != karachi? prediction: true
console.log("is Sindh capital is == 'karachi'? I prediction true");
console.log(city != 'karachi'); 

// //Q7 is punjab capital is != karachi? prediction: true
console.log("is punjab capital is == 'karachi'? I prediction true");
console.log(city == 'karachi'); 

// //Q8 is karachi is  largest city of == pakistan? prediction: true
console.log("is karachi is  largest city of != 'pakistan'? I prediction true");
console.log(city != 'pakistan');

// //Q9 is hyderbad is  capital city of == balochistan? prediction: true
console.log("is  is hyderabad is capital city of != 'balochistan'? I prediction false");
console.log(city != 'pakistan');

// //Q10 is lahore is 3rd largest city of == pakistan? prediction: true
console.log("is lahore is 3rd largest city of != 'pakistan'? I prediction true");
console.log(city == 'pakistan');

//Task 24
let name_1: string = "rehman";
let name_2: string = "Abdul rehman";
let name_3: string = "Mr Abdul rehman";

if (name_1 == name_3) {
    console.log("names are equal");
} else {
    console.log("name are not equal");
}

if (name_1 != name_2) {
    console.log("name are not equal");
}

if (name_1 != name_3) {
 console.log("name are not equal");
}

let age_1: number = 18;
let age_2: number = 22;

if (age_1 == 18) {
    console.log("eligible for vote");
}

if (age_1 != 22) {
    console.log("eligible for vote in older category");
}

if (age_1 == 18) {
    console.log("eligible for vote");
}

if (age_1 <= age_2) { //less than 
    console.log("younger");
}

if (age_2 >= age_1) { //greater than
    console.log("older");
}

if (age_1 == 18 && age_2 == 22) {
       console.log("person is eligible for vote");
}

if (age_1 == 18 || age_2 != 22) {
    console.log("person is not eligible for vote");
}

const country: string [] = ["Paksitan", "India" , "united State", "china"];
const res = country.includes("Paksitan");

if (res) {
    console.log("Pakistan is in Country list")
}

if (!country.includes("japan")) {
    console.log("japan is not in country list");
} 

//Task 25
let alein_color = "green";

if (alein_color == "green") {
    console.log("congratulation to you just earn 5 points");
}

let alein_color = "red";

if (alein_color == "green") {
    console.log("no output");
}

//Task 26

let alein_color = "green"

if (alein_color == "green") {
    console.log("congratulations! you just earned 5 points for shooting the green alien");

} else {
    console.log("congratulations! you just earned 10 points");
}

let alein_color = "red"

if (alein_color == "green") {
    console.log("congratulations! you just earned 5 points for shooting the green alien");

} else {
    console.log("congratulations! you just earned 10 points");
}

//Task 27
let alein_color = "green";

if (alein_color == "green") {
    console.log("congratulations you just earned 5 points");

} else if (alein_color == "yellow") {
    console.log("congratulations you just earned 10 points");

}  else if(alein_color == "red"){
    console.log("congratulations you just earned 15 points");
}

let alein_color = "yellow";

if (alein_color == "green") {
    console.log("congratulations you just earned 5 points");

} else if (alein_color == "yellow") {
    console.log("congratulations you just earned 10 points");

}  else if(alein_color == "red"){
    console.log("congratulations you just earned 15 points");
}

let alein_color = "red";

if (alein_color == "green") {
    console.log("congratulations you just earned 5 points");

} else if (alein_color == "yellow") {
    console.log("congratulations you just earned 10 points");

}  else if(alein_color == "red"){
    console.log("congratulations you just earned 15 points");
}

//Task 28
 let age = 19;

 if (age < 2) {
    console.log("the person is baby");

 } else if (age >= 2 && age < 4) {
    console.log("the person is toddler");
 
} else if (age >= 4 && age < 13) {
    console.log("the person is kid");

} else if (age >= 13 && age < 20) {
    console.log("the person is teenager");
 
} else if (age >= 20 && age < 65) {
    console.log("the person is adult");
 
} else {
    console.log("the person is elder");
 }

// Task 29
const favorite_fruits = ["Mango", "banana", "Orange"];

if (favorite_fruits.includes("Mango")) {
   console.log("you really like Mango");
}
if (favorite_fruits.includes("apple")) {
    console.log("you really like apple")
} 
if (favorite_fruits.includes("banana")) {
    console.log("you really like banana");
}
if (favorite_fruits.includes("Grappes")) {
    console.log("you really like Grappes");
}
if (favorite_fruits.includes("Orange")) {
    console.log("you really like orange")
}

//Task 30

const usernames: string [] = ["admin", "Eric", "Alice", "john", "admin"];

usernames.forEach(username => {
      if (username.toLowerCase()=== "admin") {
        console.log(`hello Admin, would you like to see a status reports`);

      } else {
        console.log(`hello ${username}, thank you for logging in again`);
      }
});

//Task 31

let users: string [] = ["Eric", "Asad", "Muhammad ali", "admin" ];
 
if (users.length === 0) {
    console.log("we need to find some users!");

} else {
    for(let user of users){
       if(user === "admin") {
        console.log("hello Admin, would you like to see a status reports");
       } else{
        console.log(`hello ${user}, thank you for logging in again`);
       }
    }
}

users = []
if (users.length === 0) {
    console.log("we need to find some users!");
}

//Task 32
const current_users: string [] = ["Eric", "Asad", "Muhammad ali", "Ali"];
const new_users: string [] = ["Asad", "Asif", "Ali", "Muhammad ali", "yasir"];

new_users.forEach(new_user => {
    const isUsed = current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase());

    if (isUsed) {
        console.log(`sorry, ${new_user} is already taken. Please Enter the new username`)

    } else {
        console.log(`Congratulations, ${new_user} is available`);
    }
});

//Task 33
const numbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(number => {

    let ordinal: string;

     if (number === 1) {
        ordinal = "st";
     } else if (number === 2) {
        ordinal = "nd";
     } else if (number === 3) {
        ordinal = "rd";
     } else {
        ordinal = "th";
     }
        console.log(`${number}${ordinal}`);
     
});

//Task 34
const favorite_pizzas: string [] = ["Fajita", "BBQ chicken", "Chicken Tikka", "Pepperoni"];

for (let i = 0; i < favorite_pizzas.length; i++) {
    console.log(`I like ${favorite_pizzas[i]} Pizza`);   
} 
console.log("I really love pizza!");

Task 35
let animals: string [] = ["Cat", "Dog", "Rabbit"];

for (let animal of animals) {
    console.log(animal);
}
    console.log("\n");

for (let animal of animals) {
    console.log(`A ${animal} has a tail`);
}    
   console.log("\n all of these are great pets! But i love Dog more");  

//Task 36
function make_shirt(size: string, text: string): void{
    console.log(`/n you order a ${size} shirt that says ${text}`);
}

make_shirt("XL-Size","Pakistan zindabad");
make_shirt("Small Size","i love karachi");

//Task 37
function make_shirt(size: string = "large", text: string = "i love typescript"): void {
    console.log(`you have order a ${size}, shirt that says ${text}`);
}

make_shirt();
make_shirt(medium)

// //different message
make_shirt("Small", "i need a big shirt to wear");

//Task 38
function describe_city(city: string, country: string = "default country"): void {
         console.log(`${city} is in ${country}`);
}
// // calling  the function for three different cities
describe_city("karachi","Pakistan");
describe_city("Paris","France");
describe_city("New York");

//Task 39
function city_country(city: string, country: string): string{
     return `${city}, ${country}`;
}

// // calling  the function with three different city-country pairs

console.log(city_country("lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));

//Task 40
function makeAlbum(artist: string, titel: string): { artist: string; titel: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        titel: titel.charAt(0).toUpperCase() + titel.slice()
    };
      return dictionaries;
} 
    let album = makeAlbum("ali" , "light")
    console.log(album);

    album = makeAlbum("hamza" , "red wave")
    console.log(album);

    album = makeAlbum("bilal" , "light wave")
    console.log(album);

//Task 41
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    }); 
}

//Arrays of magicians's names
const magicians: string[] = ["Harry Houdini", "David copperfield", "pen jillette", "Teller"];

//calling the function to show the names of magicans
show_magicians(magicians); 


//Task 42
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {

         magicians[i] = magicians[i] + " the great"
        
    }
}
const magicians2: string[] = ["Harry Houdini", "David copperfield", "pen jillette", "Teller"];
make_great(magicians2);
show_magicians(magicians2);



//Task 43
 function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the great");
     }
     return greatMagicians;
 }

 const magicians3: string[] = ["Harry Houdini", "David copperfield", "pen jillette", "Teller"];
 const greatMagicians2: string[] = make_great2(magicians3);
 show_magicians(magicians3);
 show_magicians(greatMagicians2);

//Task 44

function sandwich(...items: string[]): void{
    console.log("Sandwich order");

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}
console.log("enjoy your sandwich Abdul Rehman laghari");

sandwich("capsicum", "tomato", "chiken");
sandwich("beef", "cheese");
sandwich("garlic chicken", "mayo sauce" );

//Task 45
type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar: car = createCar("toyota", "corolla", {color: "silver", year: "2024"})
console.log(mycar);