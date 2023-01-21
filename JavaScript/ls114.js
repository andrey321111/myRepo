// Only change code below this line

function countdown(n){
    if(n<1){
      return []
  
    }else{
     const Arr=countdown(n-1);
     Arr.unshift(n);
     return Arr
    
      
    }
  }
  // Only change code above this line