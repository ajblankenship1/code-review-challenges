

function fouDigDiff(number){

let numbAsString = number.toString();
//console.log(numbAsString);

//splitting that string up into an array of individual strings
let numbAsArray = numbAsString.split("");
//console.log(numbAsArray);

//**** all smallest number work 
//taking the array of strings and sorting it smallest to biggest
let smallestNumbAsArray = numbAsArray.sort(function(a, b){return a-b});
//console.log(smallestNumbAsArray);

//turning that array back into a number
let smallestNumber ="";

 for (let index = 0; index < smallestNumbAsArray.length; index++){
    smallestNumber += smallestNumbAsArray[index];
}
smallestNumber = Number(smallestNumber);
console.log(smallestNumber);


//**** all biggest number stuff
//taking the array of strings and sorting them biggest to smallest
let biggestNumbAsArray = numbAsArray.sort(function(a,b){return b-a});
//console.log(biggestNumbAsArray);

//turning that array back into a number
let biggestNumber= "";

 for (let index = 0; index < biggestNumbAsArray.length; index++){
    biggestNumber += biggestNumbAsArray[index];
}
biggestNumber = Number(biggestNumber);
//console.log(biggestNumber);

//finding the difference in the numbers 

let difference = biggestNumber - smallestNumber;
let finalAnswer = (`${biggestNumber} - ${smallestNumber} = ${difference}`);
console.log(finalAnswer);

return difference;

};


//console.log(fouDigDiff(fouDigDiff(fouDigDiff(8082))));

module.exports = {
    "fourDigDiff": fouDigDiff
};
