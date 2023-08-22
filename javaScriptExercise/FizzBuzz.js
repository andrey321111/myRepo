var arr=[];
var t=1;

function fizzBuzz(){
    if((t%(5*3)===0)){
        arr.push("fizzbuzz");
        t++;
    }else if((t%5)===0){
        arr.push("buzz")
        t++;
    }else if((t%3)===0){
        arr.push("fizz");
        t++;
    }else{
arr.push(t++);
    }

t++;
    console.log(arr);
    
}
