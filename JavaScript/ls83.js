let count = 0;

function cc(card) {
  // Only change code below this line
  let answer;
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  if(count<=0){
    answer=count+" Hold"
  }else{
    answer=count + " Bet"
  }
  break;
  case 7:
  case 8:
  case 9:
    if(count<=0){
    answer=count+" Hold"
  }else{
    answer=count + " Bet"
  }
  break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
  count--;
   if(count<=0){
    answer=count+" Hold"
  }else{
    answer=count + " Bet"
  }
  break;
}
return answer;

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(count)