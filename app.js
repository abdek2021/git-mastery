const getCounter = document.getElementById("counter");
const increaseCounter = document.getElementById("increment");
const decreaseCounter = document.getElementById("decrement");
const getResetBtn = document.getElementById("reset");

const makeNewBtn = document.createElement("div");
makeNewBtn.textContent = "Counting to ";
makeNewBtn.className = "textChanger";
makeNewBtn.style.width = "290px";
makeNewBtn.style.textAlign = "center";
makeNewBtn.style.fontFamily = "monospace";
makeNewBtn.style.position = "absolute";
makeNewBtn.style.top = "70%";
makeNewBtn.style.backgroundColor = "black";
makeNewBtn.style.border = "none";
makeNewBtn.style.borderRadius = "7px";
makeNewBtn.style.color = "#fff";
makeNewBtn.style.padding = "10px";
makeNewBtn.style.fontSize = "1.6em";
makeNewBtn.style.fontWeight = "bold";

const btnWrapper = document.getElementById("btn-wrapper");
btnWrapper.appendChild(makeNewBtn);
console.log(btnWrapper);

const btnWrapperLastChild = btnWrapper.lastElementChild;

let count = 0;

increaseCounter.addEventListener("click", () => {
  count += 1;
  getCounter.textContent = count;
  btnWrapperLastChild.textContent = "Counting to " + count;
});

decreaseCounter.addEventListener("click", () => {
  count -= 1;
  getCounter.textContent = count;
  btnWrapperLastChild.textContent = "Reduced to " + count;
});

getResetBtn.addEventListener("click", () => {
  getCounter.textContent = 0;
  count = 0;
  btnWrapperLastChild.textContent = "You're back to " + count;
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

miniTest.forEach(function (tests) {
  tests = tests + 100;
  console.log(tests);
});

miniTest.map(function (elem, index) {
  elem = elem + 200;
  console.log(`${index} - ${elem}`);
});

const bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
  100.1, 6.77, 2.22,
];

const total = bills.map(function (bill) {
  bill = (bill + 0.15).toFixed(2);
  return Number(bill);
});
console.log(total);

const sendMessage =
  "I have " +
  (300 - 150) +
  " with me. But I spent " +
  45 +
  " and now the balance is " +
  (150 - 45);
console.log(sendMessage);

const grid = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < grid[r].length; c++) {
    console.log(grid[r][c]);
  }
}

const donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"],
];

for (let row = 0; row < donutBox.length; row++) {
  for (let column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

const numbers = [
  [[243, 12, 23, 12, 45, 45, 78, 66, 223, 3]], //0
  [[34, 2, 1, 553, 23, 4, 66, 23, 4, 55]], //1
  [[67, 56, 45, 553, 44, 55, 5, 428, 452, 3]],
  [[12, 31, 55, 445, 79, 44, 674, 224, 4, 21]],
  [[4, 2, 3, 52, 13, 51, 44, 1, 67, 5]],
  [[5, 65, 4, 5, 5, 6, 5, 43, 23, 4424]],
  [[74, 532, 6, 7, 35, 17, 89, 43, 43, 66]],
  [[53, 6, 89, 10, 23, 52, 111, 44, 109, 80]],
  [[67, 6, 53, 537, 2, 168, 16, 2, 1, 8]],
  [[76, 7, 9, 6, 3, 73, 77, 100, 56, 100]],
];

for (let row1 = 0; row1 < numbers.length; row1++) {
  for (let row2 = 0; row2 < numbers[row1].length; row2++) {
    for (let col = 0; col < numbers[row1][row2].length; col++) {
      console.log(numbers[row1][row2][col]);
    }
  }
}

const umbrella = {
  colour: "pink",
  isOpen: false,
  open: function () {
    if (this.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      this.isOpen = true;
      return "Julia opened the umbrella!";
    }
  },
  close: function () {
    if (this.isOpen === true) {
      this.isOpen = false;
      return "Julia closed the umbrella!";
    } else {
      return "The umbrella is already closed!";
    }
  },
};

console.log(umbrella.open());
console.log(umbrella.close());

const sister = {
  name: "Sarah",
  age: 23,
  parents: ["Alice", "Andy"],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
};

sister.parents[0] = "Grace";
console.log(sister);

const breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
  infoOnBreakFast() {
    return `The breakfast for today is "${
      this.name
    }" and was made with ${this.ingredients.map((items) => items)}. It costs $${
      this.price
    }.`;
  },
};

console.log(breakfast.infoOnBreakFast());

const savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit(amount) {
    if (amount > 0) {
      return (this.balance += amount);
    }
  },
  withdraw(amount) {
    const verifyBalance = this.balance - amount;
    console.log(verifyBalance);
    if (amount > 0 && verifyBalance >= 0) {
      return (this.balance -= amount);
    }
  },
  printSummary() {
    return `Welcome Abiodun!\nYour current balance is ${savingsAccount.balance} and your account interest is ${savingsAccount.interestRatePercent}%`;
  },
};

savingsAccount.deposit(1000);
savingsAccount.withdraw(100);
console.log(savingsAccount.printSummary());

const facebookProfile = {
  name: "Abiodun A. Abdul-Jeleel",
  friends: [],
  post: "",
  dashboard: [],
  postMessagesToDashboard(message) {
    this.post += message;
    this.dashboard.push(this.post);
  },
  deleteMessages(index) {
    this.dashboard.splice(index, 1);
  },
  addFriends(friend) {
    this.friends.push(friend);
  },
  removeFriend(index) {
    if (this.friends.length > 0) {
      this.friends.splice(index, 1);
    }
  },
  printMessage() {
    return `Hello ${this.name}! Your post "${this.post}" is uploaded successfully!`;
  },
};

facebookProfile.postMessagesToDashboard("Good Morning");
console.log(facebookProfile.dashboard);
facebookProfile.deleteMessages(0);
facebookProfile.addFriends("Jamaldeen");
facebookProfile.addFriends("Adekunle");
facebookProfile.removeFriend(0);
console.log(facebookProfile.printMessage());

const myDonuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 },
];

myDonuts.forEach(function (donut) {
  console.log(donut);
});

const owner = "Abiodun A. Abdul-Jeleel";
const anotherObj = {
  "1stOwner": "Toyeeb",
  owner,
  color: "red",
  carName: "Benz",
  ["isPurchased"]() {
    return `${anotherObj["owner"]} recently purchased ${this.carName} and the color is ${this.color}. The first to buy the car is ${anotherObj["1stOwner"]}`;
  },
};

anotherObj.nextCar = "Ferrari";
anotherObj.price = Number((45.76).toFixed(2));
anotherObj.getNextCar = () => {
  return `The next car to buy is ${anotherObj.nextCar} and it costs ${anotherObj.price}`;
};
console.log(anotherObj["isPurchased"]());
// delete anotherObj.nextCar;
console.log(anotherObj.getNextCar());

const originalObj = {
  fav: "red",
};
const newBird = originalObj;
newBird.buddy = "Abbey";
console.log(originalObj);

const tree = {
  type: "redwood",
  leaves: "green",
  height: 80,
  age: 15,
  growOneFoot: function () {
    return (this.height += 1);
  },
};

console.log(tree.growOneFoot());

const chameleon = {
  color: "green",
  changeColor: function () {
    this.color = "pink";
    return this.color;
  },
};

console.log(chameleon.changeColor());

function globalFunc() {
  return (this.trial = true);
}

console.log(globalFunc());
console.log(this.location);
console.log(this.screenY);
console.log(this.screenX);
window.scroll(0, window.scrollY + 200);

const myFav = "Ice cream";
console.log(this.myFav === myFav);

function saySomethingAboutInstructor() {
  const instructor = "Richard";
  console.log(`Our new instructor's name is ${instructor}`);
}

saySomethingAboutInstructor();

function increase() {
  let counting = 2;
  for (let i = 0; i < counting; i++) {
    console.log(i);
  }
}
increase();

const dictionary = {
  car: "automobile",
  apple: "healthy snack",
  cat: "cute furry animal",
  dog: "best friend",
};

console.log(Object.keys(dictionary));
console.log(Object.values(dictionary));

function average(n1, n2, n3) {
  return (n1 * n2) / n3;
}

console.log(average.length);
console.log(average.name);
console.log(average(2, 3, 4));

const returnInnerFunction = function () {
  return function (aFunc) {
    return "Hello! I am a function inside of another " + aFunc;
  };
};
console.log(returnInnerFunction()("function"));

function lastName(lName) {
  return lName;
}

function fullNames(name, callBackFunc) {
  return callBackFunc(name);
}

console.log(fullNames("Abiodun", lastName));

const names = ["David", "Richard", "Veronika"];

names.forEach(function (n) {
  console.log(n);
});

names.map(function (n) {
  console.log(n.length);
});

const namesFiltering = names.filter(function (n) {
  return n.length < 6;
});
console.log(namesFiltering);

const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
  { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
  { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000,
  },
  { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
  { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
  { artist: "Rihanna", name: "Anti", sales: 603000 },
  { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
];

musicData.map(function (musicAlbum, index) {
  const eachAlbum = `${index} - ${musicAlbum.name} by ${musicAlbum.artist} sold ${musicAlbum.sales} copies`;
  console.log(eachAlbum);
});

const albumSalesStrings2 = musicData.filter(function (musicAlbum) {
  return musicAlbum.name.length >= 10;
});
console.log(albumSalesStrings2);

function expandArray(newNum) {
  let myArray = [1, 1, 1];
  return function () {
    myArray.push(newNum);
    return myArray;
  };
}

const result1 = expandArray(1)();
console.log(result1);

(function (names) {
  console.log("Hello " + names);
})("Andrew");

(function (x, y) {
  console.log(x + y);
})(12, 20);

function Engineer(name) {
  this.favoriteFrontEndAndBackEndLanguage = "Javascript";
  this.favoriteDatabase = "SQL";
  this.favoriteAPI = "GraphQL";
  this.name = name;
  this.whichEngineer = function () {
    return `${this.name}'s favorite language is ${this.favoriteFrontEndAndBackEndLanguage} for both FE and BE and for database management, he preferred ${this.favoriteDatabase} and also use ${this.favoriteAPI} for  API`;
  };
}

const fullStack = new Engineer("Abiodun");
console.log(fullStack.whichEngineer());

const person1 = {
  firstName: "Mary",
  lastName: "Smith",
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};
const person3 = {
  firstName: "Abiodun",
  lastName: "Abdul-Jeleel",
};

function fullName(city, country) {
  console.log(
    `${this.firstName} ${this.lastName} lives in ${city}, ${country}`
  );
}

fullName.apply(person1, ["Ontario", "Canada"]);
fullName.apply(person2, ["London", "United Kingdom"]);
fullName.apply(person3, ["Iwo", "Osun State"]);
