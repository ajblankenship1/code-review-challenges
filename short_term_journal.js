// * Make a terminal script that will create a journal with a short-term memory. Weird, I know.
// Prompt a user for any content. What they did yesterday, what their favourite colour is, whatever. Store the user input in an array.
// Print out all entries in the array.
// Loop back and prompt the user for the next journal entry.
// The journal can only contain a maximum of 5 entries, but can loop forever.

const prompt = require('prompt-sync')();

let entry = prompt("Write your next journal entry here!");

let entryArray = [];
let fiveEntries =[];
while (entry){
    entryArray.push(entry);
    if (entryArray.length > 5){
        fiveEntries = entryArray.shift();
        console.log(entryArray);
    }else{
    console.log(entryArray);
    };
    entry = prompt("Write your journal entry here!");
    
};
 