function fibonacci(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    if (i === 0) {
        arr.push(i);
    }else if(i===1){
        arr.push(i)
    }else{
        arr.push(arr[i-2]+arr[i-1]);
    }
  }
  return arr;
}
