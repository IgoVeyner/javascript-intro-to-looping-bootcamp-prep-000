function forLoop(array){
  for(var i = 0; i < 25; i++){
    if(i === 1){
      array.push("I am 1 strange loop.");
    }
    else{
      array.push("I am " + i + " strange loops.");
    }
  }
  return array;
}

function whileLoop(n) {
  while(n>0){
    console.log(n);
    n--;
  }
  return 'done';
}

function doWhileLoop(num){
  do{
    console.log("I run once regardless");
  } while (incrementVariable() < num);
}

function incrementVariable() {
  var i = i + 1;
  return i;
}

var i = 0;
var num = 10;
