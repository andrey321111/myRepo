/*t will take your current age as the input and console.logs a message with our time left in this format:

You have x days, y weeks, and z months left.

Where x, y and z are replaced with the actual calculated numbers.



For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.*/
function myAge(age,maxAge){
    var days=365*maxAge;
    var weeks=52*maxAge;
    var months=12*maxAge;
    var daysLeft=days-(age*365);
    var weeksLeft=weeks-(age*52);
    var monthsLeft=months-(age*12);
    console.log("You have :"+daysLeft+" days left, "+weeksLeft+" Weeks Left and "+monthsLeft+" Months Left.");
    
    }
    console.log("please write how old are you:");
    var one=prompt("you age:");
    console.log("please write how much years you gonna live");
    var two=prompt("years");
    myAge(one,two);