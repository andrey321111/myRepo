/*
Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.*/
var namesArr=["andrey","avi","michle","tomas"];

function whosPaying(input){
    var randomSoul=Math.floor((Math.random()*input.length));
    return( names[randomSoul]+" is going to buy lunch today!")

}