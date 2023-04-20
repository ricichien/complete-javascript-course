/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// JavaScript Fundamentals - Part 1
// Lecture: Values and Variables

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// Math Operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Riciere";
// const lastName = "Marcone";
// console.log(firstName + ' ' + lastName);

// Assignment Operators

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x + 4 = 100
// x++; // x = x + 1
// x--; // x = x -1
// console.log(x)

// Comparison Operators

// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2020);

//

// let country = "Brazil";
// let continent = "America";
// let population = 214;
// console.log(country);
// console.log(continent);
// console.log(population);

// Lecture: Data Types

// let isIsland = false;
// let language;
// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(language);

// Lecture: Basic Operator

// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description1 =
// country +
// ' is in ' +
// continent +
// ', and its ' +
// population +
// ' million people speak ' +
// language;
// console.log(description1);

// Lecture: String and Template Literals

// Coding Challenge #1

// const markMassData1 = 78;
// const markHeightData1 = 1.69;

// const johnMassData1 = 92;
// const johnHeightData1 = 1.95;

// const markMassData2 = 95;
// const markHeightData2 = 1.88;

// const johnMassData2 = 85;
// const johnHeightData2 = 1.76;

// let markHeighterBMI = false;

// console.log(markHeighterBMI = markMassData1 / markHeightData1 ** 2 > johnMassData1 / johnHeightData1 **2);
// console.log(markHeighterBMI = markMassData2 / markHeightData2 ** 2 > johnMassData2 / johnHeightData2 **2);

// String and Template Literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `Í'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\ multiple \n\ lines');

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;

// if (birthYear <= 2000) {
//   let century = 20;
// } else {
//   let century = 21;
// }

// Coding Challenge #2

// const markMassData1 = 78;
// const markHeightData1 = 1.69;

// const markMassData2 = 95;
// const markHeightData2 = 1.88;

// const johnMassData1 = 92;
// const johnHeightData1 = 1.95;

// const johnMassData2 = 85;
// const johnHeightData2 = 1.76;

// markBMIData1 = markMassData1 / markHeightData1 ** 2;
// johnBMIData1 = johnMassData1 / johnHeightData1 ** 2;

// markBMIData2 = markMassData2 / markHeightData2 ** 2;
// johnBMIData2 = johnMassData2 / johnHeightData2 ** 2;

// console.log(markBMIData1, markBMIData2, johnBMIData1, johnBMIData2);

// let differenceBMIData1;
// let differenceBMIData2;

// if (markBMIData1 > johnMassData1) {
//   differenceBMIData1 = markBMIData1 - johnBMIData1;
//   console.log(`Mark's BMI is ${differenceBMIData1} higher than John's!`);
// } else {
//   differenceBMIData1 = johnHeightData1 - markHeightData1;
//   console.log(`John's BMI is ${differenceBMIData1} higher than Mark's!`);
// }

// if (markBMIData2 > johnMassData2) {
//   differenceBMIData2 = markBMIData2 - johnBMIData1;
//   console.log(`Mark's BMI is ${differenceBMIData2} higher than John's!`);
// } else {
//   differenceBMIData2 = johnBMIData2 - markBMIData2;
//   console.log(`John's BMI is ${differenceBMIData2} higher than Mark's!`);
// }

// Type Convertion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Riciere"));

// console.log(String(23));

// // Type Coercion

// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// let n = "1" + 1; // '11'
// (n = n - 1), console.log(n);

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// Equaility Operator == vs. ====

// const age = 18;
// if (age === 18) {
// }
// console.log("You just became an adult :D (strict)");

// if (age == 18) {
// }
// console.log("You just became an adult :D (loose)");

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//   // '23' == 23
//   console.log("Cool! 23 is an amazing number!");
// }

// if (favourite === 23) {
//   // '23' == 23
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("& is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// Basic Boolean Logic

// const hasDrivesLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDrivesLicense && hasGoodVision);
// console.log(hasDrivesLicense || hasGoodVision);
// console.log(!hasDrivesLicense);

// if (hasDrivesLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// Coding Challenge #3

// const DolphinsScore1 = 96;
// const DolphinsScore2 = 108;
// const DolphinsScore3 = 89;

// const KoalasScore1 = 88;
// const KoalasScore2 = 91;
// const KoalasScore3 = 110;

// const DolphinsScore1 = 97;
// const DolphinsScore2 = 112;
// const DolphinsScore3 = 101;

// const KoalasScore1 = 109;
// const KoalasScore2 = 95;
// const KoalasScore3 = 123;

// const DolphinsScore1 = 97;
// const DolphinsScore2 = 112;
// const DolphinsScore3 = 101;

// const KoalasScore1 = 109;
// const KoalasScore2 = 95;
// const KoalasScore3 = 106;

// const averageDolphins = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
// const averageKoalas = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;

// console.log(averageDolphins);
// console.log(averageKoalas);

// if (averageDolphins >= 100 && averageKoalas >= 100) {
//   if (averageDolphins > averageKoalas) {
//     console.log(
//       `Congrats! Dolphins are the winners of the competition! With an amazing average of ${averageDolphins} points!`
//     );
//   } else if (averageDolphins < averageKoalas) {
//     console.log(
//       `Congrats! Koalas are the winners of the competition! With an amazing average of ${averageKoalas} points!`
//     );
//   } else {
//     console.log(
//       "There has been a tie! Both Dolphins and Koalas have the same average score"
//     );
//   }
// } else if (averageDolphins >= 100 && averageKoalas < 100) {
//   console.log(
//     `Congrats! Dolphins are the winners of the competition! With an amazing average of ${averageDolphins} points!`
//   );
// } else if (averageDolphins < 100 && averageKoalas >= 100) {
//   console.log(
//     `Congrats! Koalas are the winners of the competition! With an amazing average of ${averageKoalas} points!`
//   );
// } else {
//   console.log("Unfortunately, both Dolphins and Koalas have lost!");
// }

// Condition (ternary) operator

// const age = 23;

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink); // Expected result: drink === wine

// console.log(`Ì like to drink ${age <= 18 ? "wine" : "water"}`);

// Coding Challenge #4

const billData = 275;
// const billData = 40;
// const billData = 430;

const tip =
  billData >= 50 && billData <= 300
    ? (billData / 100) * 15
    : (billData / 100) * 20;

console.log(
  `The bill was ${billData}, the tip was ${tip}, and the total value is ${
    billData + tip
  }`
);
