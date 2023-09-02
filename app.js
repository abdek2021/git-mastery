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

const myFunc = function (max) {
  let theSound = "";
  for (let i = 0; i < max; i++) {
    theSound += "* ";
  }
  return theSound;
};

console.log(myFunc(1));
console.log(myFunc(2));
console.log(myFunc(3));
console.log(myFunc(4));
console.log(myFunc(5));

function movies(movieFunc, name) {
  movieFunc(name);
}

movies(function displayedMovies(movieName) {
  console.log("The name of the movie is " + movieName);
}, "Fistful Fight of Vengeance");

const laugh = function (laughTimes) {
  let sound = "";
  for (let i = 0; i < laughTimes; i++) {
    sound += "ha";
  }
  sound += "!";
  return sound;
};

console.log(laugh(1));
console.log(laugh(5));
console.log(laugh(10));

const awfulSound = function () {
  return "boohoo!";
};

console.log(awfulSound());

function myName(fullName, firstName) {
  fullName(firstName);
}

myName(function tellName(theName) {
  console.log("My name is " + theName);
}, "Abiodun");

const donuts = [
  [1, 2, 3, 4, 5],
  ["sandine", "crayfish", "salad"],
  [true, false],
];
console.log(donuts);

const crew = ["Mal", "Zoe", "Wash", "Inara", "Jayne", "Kaylee"];
crew.splice(2, 2, "Chididogo", "Amelia");
crew.push("Simon", "River", "Book");
console.log(crew);

const prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];
prices.unshift(11);
for (let i = 0; i < prices.length; i++) {
  if (i === 0) {
    prices[i] *= 2;
  } else if (i === 3) {
    prices[i] *= 2;
  } else if (i === 7) {
    prices[i] *= 2;
  } else {
    prices[i];
  }
}
console.log(prices);

const rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.forEach(function (rainbows, index) {
  rainbows = rainbows.toUpperCase();
  console.log(index + " - " + rainbows);
});

function hasEnoughPlayer(arrayPlayers) {
  if (arrayPlayers.length >= 7) {
    return true;
  } else {
    return false;
  }
}

const result = hasEnoughPlayer([
  "Mal",
  "Zoe",
  "Wash",
  "Inara",
  "Jayne",
  "Kaylee",
]);
console.log(result);

const turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
console.log(turnMeIntoAString.join(""));

const miniTest = [12, 29, 11, 3];

miniTest.forEach(function (tests, index) {
  if (tests % 2 === 0) {
    tests = tests * 2;
    console.log(tests);
  }
});
