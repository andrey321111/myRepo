var height=prompt("what is youre height in meters:");
var weight=prompt("what is youre wight in KG:");

alert("youre BMI is: "+bmi(height,weight));

function bmi(h,w){
    return Math.floor(w/(h*h));
}