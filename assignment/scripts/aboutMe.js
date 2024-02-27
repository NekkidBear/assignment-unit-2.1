// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Jason';
console.log( `My Name is ${firstName}`);
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = "King-Lowe";
console.log(`My surname is ${lastName}`);

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
//     (remember, you already have variables for this, can you use those?)
//     Console log the value of `fullName`
let fullName = firstName.concat(" ", lastName);
console.log(`My full name is ${fullName}`);

// 4 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
//     Console log the value of `luckyNumber`
let luckyNumber = Math.floor(Math.random()*5);
console.log(`Today's lucky number is ${luckyNumber}`);

// 5 - Create a variable `introduction` and using the variables from above,
//     give it the value of:
//     'My name is (full name), and I think (lucky number) is a winner!'.
//     Refer back to the videos if you need help with this one.
//     Console log the value of `introduction`
let introduction = `My name is ${fullName}, and I think ${luckyNumber} is a winner!.`;
console.log(introduction);

// 6 - Create a variable named `adventurous` and set it to a boolean value (true or false)
//     Console log the value of `adventurous`
let adventurous = true;
if (adventurous) {
  console.log(`${adventurous} I am adventurous.`);
} else {
  console.log(`${adventurous} I am not adventurous.`);
};


// 7 - Create a variable named `food`, and set its value to a string of your favorite food
//     Console log the value of `food`

let food = 'junk food';
console.log(`I like ${food}.`);

// 8 - Create a variable called `pets` and set it to the value of the number of pets you have
//     Console log the value of `pets`
let pets = Math.floor(Math.random() *3);
console.log(`Pets: ${pets}`);


// 9 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = Math.floor((Math.random()*5)+1);
console.log(`Currently my friend has ${friendsPets} pets.`);
// 10 - Add two pets to your `pets` variable
pets +=2;
console.log(`One pet had twins. Now I have ${pets}.`)

// 11 - Create a constant variable called `allowedPets` and set it to a number value of your choice
let allowedPets = Math.floor((Math.random()*10)+1);
console.log(`The lease allows us to have ${allowedPets} pets in our homes.`);

// 12 - Create a variable called `result`. Create a conditional:
//      if adventurous is true, set `result` to be "Adventures are great!", 
//      if it's not true,  set `result` to be "How about we stay home?"
//      Console log the value of `result`
let result = "";
if (adventurous) {
  result = "Adventures are great!";
} else {
  result = "How about we stay home?";
};
console.log(result);


// 13 - Create a variable called `diceRoll` and set it to the value of "Try again later.".
//      Create a compound conditional: 
//      if luckyNumber is 2 and adventurous is true,
//      set `diceRoll` to be "Roll the dice!"
//      Console log the value of `diceRoll`

let diceRoll = "Try again later.";
if (luckyNumber===2 && adventurous) {
  diceRoll = "Roll the dice!";
};
console.log(diceRoll);


// 14 - Create a variable called `petStatus`. 
//      Write a conditional that covers the following:
//      if the value of `pets` is less than the value of `allowedPets`,
//      set `petStatus` to the value of "I can have more pets" 
//      if the value of `pets` is equal to the value of `allowedPets`,
//      set `petStatus` to the value of "I have enough pets" 
//      if the value of `pets` is greater than the value of `allowedPets`.
//      set `petStatus` to the value of "Oh no, I have too many pets!"

let petStatus = "";
if (pets > allowedPets) {
  // More than the max allowed
  petStatus = "Oh no, I have too many pets!";
} else if(pets == allowedPets){
  // At max number of pets
  petStatus = "I have enough pets";
} else if (petStatus < allowedPets) {
  // less than the allowed number
  petStatus = "I can have more pets";
} else {
  //if all other cases fail; shouldn't be triggered unless an error happens
  petStatus = "I need a pet";
};

console.log(petStatus);


// STRETCH GOALS:

// 15 - Make a variable called `mostPets` and a conditional that
//      correctly checks the `pets` and `friendsPets` variables, and
//      assigns the highest value to `mostPets`. There's several possibilities --
//      be sure to think through all the scenarios. 
//      console.log `mostPets` after the conditional has run.

let mostPets = 0;
let petOwner = "";
if (pets != friendsPets && Math.max(pets, friendsPets) === pets) {
  // I have the most
  mostPets = pets;
  petOwner = firstName;
} else if (pets != friendsPets && Math.max(pets, friendsPets) === friendsPets) {
  // My friend has the most
  mostPets = friendsPets;
  petOwner = "My friend";
} else if (pets=friendsPets) {
  //we have the same number
  mostPets = pets;
  petOwner = "Both of us";
};

if (petOwner == "Both of us"){
  console.log(`We both have the same number of pets: ${pets}.`);
} else {
  console.log(`${petOwner} has the most pets: ${mostPets}.`);
};

// 16 - Make a variable called `luckyResult`
//      Write a *switch* statement that sets `luckyResult` to:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!
//      console.log `luckyResult` after the conditional has run.

let luckyResult = ""

switch (luckyNumber){
  case 1:
    luckyResult = "First is the worst";
    break;
  case 2: 
    luckyResult = "Second is the best";
    break;
  case 3: 
    luckyResult = "Third is the one with the polka dot dress";
    break;
  default: 
    luckyResult = "Luck is what happens when preparation meets opportunity"
};

console.log(luckyResult);

// 17 -- Rewrite question 12 with a `ternary` operator. You'll need to do research!

result = adventurous ? "Adventures are great!" : "How about we stay home?"










// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    firstName: typeof firstName !== 'undefined' ? firstName : undefined,
    lastName: typeof lastName !== 'undefined' ? lastName : undefined,
    fullName: typeof fullName !== 'undefined' ? fullName : undefined,
    luckyNumber: typeof luckyNumber !== 'undefined' ? luckyNumber : undefined,
    introduction: typeof introduction !== 'undefined' ? introduction : undefined,
    adventurous: typeof adventurous !== 'undefined' ? adventurous : undefined,
    food: typeof food !== 'undefined' ? food : undefined,
    pets: typeof pets !== 'undefined' ? pets : undefined,
    friendsPets: typeof friendsPets !== 'undefined' ? friendsPets : undefined,
    allowedPets: typeof allowedPets !== 'undefined' ? allowedPets : undefined,
    result: typeof result !== 'undefined' ? result : undefined,
    diceRoll: typeof diceRoll !== 'undefined' ? diceRoll : undefined,
    petStatus: typeof petStatus !== 'undefined' ? petStatus : undefined,
    mostPets: typeof mostPets !== 'undefined' ? mostPets : undefined,
    luckyResult: typeof luckyResult !== 'undefined' ? luckyResult : undefined,
  };
} catch (e) {
  // Do nothing
}