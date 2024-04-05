// Its Sunday, and its time to go to O.B.'s restaurant. You love spicy food, but your friend does not. You will be given two odered arrays. One array, will have 'S' and 'N' (where S means spicy and N means not spicy). The other array will be the price of the dish.

// You will pay for all spicy meals, whilst you and your friend will split the non-spicy dishes. Return an ordered array of your owing and your friends owing.


// * **E.g.** spicy_food(['S','N','N','S'],[12,18,17,15]) -> [44.5,17.5]

// * **E.g.** spicy_food(['N'],[23]) -> [11.5,11.5]

// * **E.g.** spicy_food(['S','S','S','S','N'],[15,14,19,23,20]) -> [81,10]


let meals = ['S','S','S','S','S'];
let price = [15,14,19,23,20];

let totalSpicy = 0;
let totalNotSpicy = 0;


for (let i = 0; i < meals.length; i++){
    if (meals[i] === "S"){
        totalSpicy += (price[i]);
    }else{
        totalNotSpicy += (price[i]);
    }
}

let friendPay = totalNotSpicy/2;
let myPay = totalSpicy + (totalNotSpicy/2);
let payArray = [myPay, friendPay];
console.log(payArray);


