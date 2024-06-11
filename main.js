// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

/*console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!`);*/

/*console.log("Write how many cups of coffee you will need:");
let cupsNumber = Number(input());
let ingredients = {
  water: cupsNumber * 200,
  milk: cupsNumber * 50,
  beans: cupsNumber * 15
}

console.log(`For ${cupsNumber} cups of coffee you will need:
${ingredients.water} ml of water
${ingredients.milk} ml of milk
${ingredients.beans} g of coffee beans`)*/


/*console.log("Write how many ml of water the coffee machine has:");
  let machineWater = Number(input());
console.log("Write how many ml of milk the coffee machine has:");
  let machineMilk = Number(input());
console.log("Write how many grams of coffee beans the coffee machine has:");
  let machineBeans = Number(input());
console.log("Write how many cups of coffee you will need:");
  let cups = Number(input());

let finalWater = machineWater / 200;
let finalMilk = machineMilk / 50;
let finalBeans = machineBeans / 15;
let finalResources = [finalWater, finalMilk, finalBeans];
let userCups = Math.floor(Math.min(...finalResources));

if (userCups > cups) {
  console.log(`Yes, I can make that amount of coffee (and even ${userCups - cups} more than that)`)
} else if (userCups === cups) {
  console.log(`Yes, I can make that amount of coffee`)
} else if (userCups < cups) {
  console.log(`No, I can make only ${userCups} cups of coffee`)
}
*/



//---------Start of stage 4.

/*let machineStatus = {
  water : 400,
  milk : 540,
  beans : 120,
  cups : 9,
  money : 550
}

let inventory = function () {
console.log(`The coffee machine has:
${machineStatus.water} ml of water
${machineStatus.milk} ml of milk
${machineStatus.beans} g of coffee beans
${machineStatus.cups} disposable cups
${machineStatus.money} of money`);
}

inventory();

let buyAction = function () {
  console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");
let whichCoffee = Number(input());
  if (whichCoffee === 1) {
  machineStatus.water -= 250;
  machineStatus.beans -= 16;
  machineStatus.money += 4;
  machineStatus.cups -= 1;
  inventory();
  } else if (whichCoffee === 2) {
    machineStatus.water -= 350;
    machineStatus.milk -= 75;
    machineStatus.beans -= 20;
    machineStatus.money += 7;
    machineStatus.cups -= 1;
    inventory();
  } else if (whichCoffee === 3) {
    machineStatus.water -= 200;
    machineStatus.milk -= 100;
    machineStatus.beans -= 12;
    machineStatus.money += 6;
    machineStatus.cups -= 1;
    inventory();
  }
}

let fillAction = function () {
console.log("Write how many ml of water you want to add: ");
  let waterAdd = Number(input());
  machineStatus.water += waterAdd;
console.log("Write how many ml of milk you want to add: ");
  let milkAdd = Number(input());
  machineStatus.milk += milkAdd;
console.log("Write how many grams of coffee beans you want to add: ");
  let coffeeAdd = Number(input());
  machineStatus.beans += coffeeAdd;
console.log("Write how many disposable cups you want to add: ");
  let cupsIn = Number(input());
  machineStatus.cups += cupsIn;
  inventory();
}

let takeAction = function () {
  console.log(`I gave you $${machineStatus.money}`)
  machineStatus.money -= 550;
  inventory();
}

let mainAction = function () {
console.log("Write action (buy, fill, take): ");
let action = input();
  if (action === "buy") {
  buyAction()
} else if (action === "fill") {
  fillAction()
} else if (action === "take") {
  takeAction()
}
}

mainAction();*/

//---------End of stage 4.



let machineStatus = {
  water : 400,
  milk : 540,
  beans : 120,
  cups : 9,
  money : 550
}

let inventory = function () {
  console.log(`The coffee machine has:
${machineStatus.water} ml of water
${machineStatus.milk} ml of milk
${machineStatus.beans} g of coffee beans
${machineStatus.cups} disposable cups
${machineStatus.money} of money`);
}

let buyAction = function () {
  console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");
  let whichCoffee = input();
  switch (whichCoffee) {
    case "1":
      if (machineStatus.water >= 250 && machineStatus.beans >= 16 && machineStatus.cups >= 1) {
        machineStatus.water -= 250;
        machineStatus.beans -= 16;
        machineStatus.money += 4;
        machineStatus.cups -= 1;
        console.log("I have enough resources, making you a coffee!");
        mainAction();
      } else {
          if (machineStatus.water < 250) {
          console.log("Sorry, not enough water!");
          mainAction();
          }
          else if (machineStatus.beans < 16) {
          console.log("Sorry, not enough beans!");
          mainAction();
          }
          else if (machineStatus.cups === 0) {
          console.log("Sorry, not enough cups!");
          mainAction();
          }
      }
      break;
    case "2":
      if (machineStatus.water >= 350 && machineStatus.milk >= 75 && machineStatus.beans >= 20 && machineStatus.cups >= 1) {
        machineStatus.water -= 350;
        machineStatus.milk -= 75;
        machineStatus.beans -= 20;
        machineStatus.money += 7;
        machineStatus.cups -= 1;
        console.log("I have enough resources, making you a coffee!");
        mainAction();
      } else {
          if (machineStatus.water < 350) {
          console.log("Sorry, not enough water!");
          mainAction();
          }
          else if (machineStatus.beans < 75) {
          console.log("Sorry, not enough milk!");
          mainAction();
          }
          else if (machineStatus.beans < 20) {
          console.log("Sorry, not enough beans!");
          mainAction();
          }
          else if (machineStatus.cups === 0) {
          console.log("Sorry, not enough cups!");
          mainAction();
          }
      }
      break;
    case "3":
      if (machineStatus.water >= 200 && machineStatus.milk >= 100 && machineStatus.beans >= 12 && machineStatus.cups >= 1) {
        machineStatus.water -= 200;
        machineStatus.milk -= 100;
        machineStatus.beans -= 12;
        machineStatus.money += 6;
        machineStatus.cups -= 1;
        console.log("I have enough resources, making you a coffee!");
        mainAction();
      } else {
          if (machineStatus.water < 200) {
          console.log("Sorry, not enough water!");
          mainAction();
          }
          else if (machineStatus.beans < 100) {
          console.log("Sorry, not enough milk!");
          mainAction();
          }
          else if (machineStatus.beans < 12) {
          console.log("Sorry, not enough beans!");
          mainAction();
          }
          else if (machineStatus.cups === 0) {
          console.log("Sorry, not enough cups!");
          mainAction();
          }
      }
      break;
    case "back":
      mainAction();
      break;
  }
}

let fillAction = function () {
  console.log("Write how many ml of water you want to add: ");
  let waterAdd = Number(input());
  machineStatus.water += waterAdd;
  console.log("Write how many ml of milk you want to add: ");
  let milkAdd = Number(input());
  machineStatus.milk += milkAdd;
  console.log("Write how many grams of coffee beans you want to add: ");
  let coffeeAdd = Number(input());
  machineStatus.beans += coffeeAdd;
  console.log("Write how many disposable cups you want to add: ");
  let cupsIn = Number(input());
  machineStatus.cups += cupsIn;
  mainAction();
}

let takeAction = function () {
  console.log(`I gave you $${machineStatus.money}`)
  machineStatus.money  = 0;
  mainAction();
}

let remainingAction = function () {
  inventory();
  mainAction();
}

let mainAction = function () {
  console.log("Write action (buy, fill, take, remaining, exit): ");
  let action = input();
switch (action) {
  case "buy":
    buyAction();
    break;
  case "fill":
    fillAction();
    break;
  case "take":
    takeAction();
    break;
  case "remaining":
    remainingAction();
    break;
  case "exit":
    break;
  }
}

mainAction();