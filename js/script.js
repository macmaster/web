console.log("hello node!");
console.log(42 + "a");
console.log(String(42));
var json = JSON.stringify( [1, undefined, function(){}, 4] );
console.log(json);

// test the truth of null
if (null) {
  console.log("null is true!");
} else {
  console.log("null is false!");
}
