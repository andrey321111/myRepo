function beer(){
var bottles = 99;
while (bottles > 0) {
  console.log(
    bottles + " bottles of beer on the wall, " + bottles + " bottles of beer."
  );
  if (bottles - 1 === 0) {
    console.log(
      "Take one down and pass it around, no more bottles of beer on the wall."
    );
    bottles--;
  } else {
    console.log(
      "Take one down and pass it around, " +
        (bottles - 1) +
        " bottles of beer on the wall."
    );
    bottles--;
  }
}
console.log("No more bottle of beer on the wall, no more bottle of beer");
console.log(
  "Go to the store and buy some more, 99 bottled of beer on the wall."
);
}
