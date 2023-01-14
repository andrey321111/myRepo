const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
let nickName;
if(strokes==1){
  nickName=names[0];
}else if(par-strokes>=2){
  nickName=names[1]
}else if(par-strokes>=1){
nickName=names[2];
}else if(par-strokes==0){
  nickName=names[3];
}else if(par-strokes<=-3){
  nickName=names[6];
}else if(par-strokes<=-2){
  nickName=names[5];
}else if(par-strokes<=-1){
  nickName=names[4];
}

  return nickName;
  // Only change code above this line
}

golfScore(5, 4);
console.log(golfScore(4,5))