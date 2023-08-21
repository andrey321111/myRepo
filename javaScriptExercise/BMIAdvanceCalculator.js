/*BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."*/




function bmiCalculator(height,width){
    var outPut=Math.floor(width/(Math.pow(height,2)))

    if(outPut<=18){
        console.log("youre BMI is: "+outPut+" ,you are underwight")
    }
    else if(outPut>18&&outPut<=24){
        console.log("youre BMI is: "+outPut+" ,you good")
    }
    else{
        console.log("youre BMI is: "+outPut+" ,you are overwight")
    }
}

bmiCalculator(1.80,72);