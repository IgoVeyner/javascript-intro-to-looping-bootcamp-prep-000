/*function forLoop(array){
  for(var i = 0; i < 35; i++){
    array[i]= "I am " + i + " strange loops.";
    if(i === 11){
      array[i] = "I am 1 strange loop.";
    }
    if(i === 34){
      array[i] = "I am 24 strange loops."
    }
  }
  return array;
}
*/
// use array.push
function forLoop(array){
  for(var i = 0; i < 25; i++){
    array.push = "I am " + i + " strange loops.";
    if(i === 1){
      array.push = "I am 1 strange loop.";
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

/*function doWhileLoop(num){
  do{
    console.log("I run once regardless")
  } while 
  (incrementVariable() < num);
}

function incrementVariable() {
  var i = i + 1;
  return i;
}

var i = 0;
var num = 10;
*/