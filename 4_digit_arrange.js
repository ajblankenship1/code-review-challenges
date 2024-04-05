// * Pick any four digit number and do the following:
// Rearrange the string of digits to form the largest and smallest 4-digit numbers possible.
// Take these two numbers and subtract the smaller number from the larger. 

// Suppose we choose the number 8082.

// 8820−0288=8532
// 8532−2358=6174
// 7641−1467=6174

//taking a 4 digit number and turning it into a string
let number = 8082;
let numbAsString = number.toString();
console.log(14, numbAsString);

//splitting that string up into an array of individual strings
let numbAsArray = numbAsString.split("");
console.log(18, numbAsArray);

//**** all smallest number work 
//taking the array of strings and sorting it smallest to biggest
let smallestNumbAsArray = numbAsArray.sort(function(a, b){return a-b});
console.log(23, smallestNumbAsArray);

//turning that array back into a number
let smallestNumber =[];

 for (let index = 0; index < smallestNumbAsArray.length; index++){
    smallestNumber += (Number((smallestNumbAsArray[index])));
}

console.log(32, smallestNumber);


//**** all biggest number stuff
//taking the array of strings and sorting them biggest to smallest
let biggestNumbAsArray = numbAsArray.sort(function(a,b){return b-a});
console.log(37, biggestNumbAsArray);

//turning that array back into a number
let biggestNumber= [];

 for (let index = 0; index < biggestNumbAsArray.length; index++){
    biggestNumber += (Number((biggestNumbAsArray[index])));
}

console.log(47, biggestNumber);

//finding the difference in the numbers 

let difference = biggestNumber - smallestNumber;
console.log(52, difference);

let finalAnswer = (`${biggestNumber} - ${smallestNumber} = ${difference}`);
console.log(finalAnswer);