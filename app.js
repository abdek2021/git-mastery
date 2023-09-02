const getCounter = document.getElementById("counter");
const increaseCounter = document.getElementById("increment");
const decreaseCounter = document.getElementById("decrement");
const getResetBtn = document.getElementById("reset");

let count = 0;

increaseCounter.addEventListener("click", () => {
  count += 1;
  getCounter.textContent = count;
});

decreaseCounter.addEventListener("click", () => {
  count -= 1;
  getCounter.textContent = count;
});
getResetBtn.addEventListener("click", () => {
  getCounter.textContent = 0;
  count = 0;
});

console.log(getCounter);
console.log(increaseCounter);
console.log(decreaseCounter);

const price = 15.0; // price of the hammer
const myMoney = 10.0; // money i have with me

const decision = myMoney >= price ? "buy the hammer" : "don't buy the hammer";
console.log(decision);

const weather = "snow";

if (weather === "snow") {
  console.log("Bring a coat");
} else if (weather === "rain") {
  console.log("Bring a rain jacket");
} else {
  console.log("Wear what you have");
}

const room = "dining room";
const suspect = "Mr. Parkes";

let weapon = "";
let solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
  weapon = "knife";
  solved = true;
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with a " + weapon);
} else {
  console.log("The case is not closed!");
}

const balance = 325.0;
const checkBalance = true;
const isActive = false;

if (checkBalance === true) {
  if (isActive === true && balance > 0) {
    console.log(`Your balance is ${balance.toFixed(2)}.`);
  } else if (isActive === true && balance < 0) {
    console.log(`Your balance is negative.`);
  } else if (isActive === true && balance === 0) {
    console.log(`Your account is empty`);
  } else if (isActive === false) {
    console.log(`Your account is no longer active`);
  }
} else {
  console.log(`Thank you. Have a nice day!`);
}

const flavors = "chocolate";
const topping = "peanuts";
const vessel = "wafer cone";

let customerFeedBack = "";

const orderCondition =
  (flavors === "chocolate" || flavors === "vanilla") &&
  (topping === "sprinkles" || topping === "peanut") &&
  (vessel === "wafer cone" || vessel === "sugar cone")
    ? (customerFeedBack = "Great choice! Your ice cream is at the next window.")
    : (customerFeedBack = "Please check our menu and try again.");

console.log(orderCondition);

const eatsPlants = true;
const eatsAnimals = true;
let category;

if (eatsPlants) {
  category = "herbivore";
} else if (eatsAnimals) {
  category = "carnivore";
} else if (eatsPlants && eatsAnimals) {
  category = "omnivore";
} else {
  category = "undefined";
}

console.log(category);

const myFavoriteNumber = "3";

switch (myFavoriteNumber) {
  case 0:
    console.log("You entered 0");
    break;
  case 1:
    console.log("You entered 1");
    break;
  case 2:
    console.log("You entered 2");
    break;
  case 3:
    console.log("You entered 3");
    break;
  case 4:
    console.log("You entered 4");
    break;
  case 5:
    console.log("You entered 5");
    break;
  default:
    console.log("You have no number as your favourite");
}

const moneyHave = 100.29;
const bankAccount = true;
const bankAccountActive = true;
const amountTransferred = 45;
let accountBalance;

if (bankAccount) {
  if (bankAccountActive && moneyHave > 0) {
    accountBalance = moneyHave - amountTransferred;
    console.log(`Your balance is ${accountBalance.toFixed()}`);
  } else if (bankAccountActive && moneyHave < 0) {
    console.log(`Your balance is negative`);
  } else if (bankAccountActive && moneyHave === 0) {
    console.log(`Your account is empty`);
  }
} else {
  console.log(
    `You have no account with us. Kindly visit any nearest bank branch for proper registration!`
  );
}

const tier = "nsfw deck";
let output = "You’ll receive ";

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output +=
      "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

const education = "high school diploma";
let salary;

switch (education) {
  case "high school diploma":
    salary = 5000;
    break;
  case "master's degree":
    salary = 15000;
    break;
  case "doctorate degree":
    salary = 20000;
    break;
  case "professorship":
    salary = 25000;
    break;
  default:
    salary = "You've no educational qualification";
}

console.log(
  `In 2023, a person with ${education} earned ${salary.toLocaleString()}/year`
);

let start = 1;

while (start < 10) {
  start = start + 2;
  console.log(start);
}
