'use strict';

const Dice = require('./dice');

const diceA=new Dice();
const diceB=new Dice();

console.log(diceA.dots);
console.log(diceB.dots);
// console.log(diceA.upperBound); //can't access private field 
console.log('max:',diceA.maximumValue);
console.log('min:',diceA.minimumValue);
diceA.maximumValue=-19;
console.log('min:', diceA.minimumValue);
console.log(diceA.toString());
console.log('DiceB: '+diceB);
console.log('#####################################');
console.log(`DiceA: ${diceA}, Dice B: ${diceB}`);
diceA.roll();
diceB.roll();
console.log(`DiceA: ${diceA}, Dice B: ${diceB}`);
if(diceA.dots>diceB.dots){
    console.log('A wins');
} else if(diceB.dots>diceA.dots){
    console.log('B wins');
} 
else{
    console.log('Nobody wins');
};

const diceArray=[new Dice(), new Dice(), new Dice()];
diceArray.forEach(dice=>console.log(dice.toString()));
diceArray.forEach(dice=>dice.roll());
diceArray.forEach(dice=>console.log(dice.toString()));