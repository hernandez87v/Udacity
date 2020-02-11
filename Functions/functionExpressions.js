/*When a function is stored inside a variable it's called a function expression. */

var catSays = function(max) {
  // ^Function Expression^
  var catMessage = '';
  for (var i = 0; i < max; i++) {
    catMessage += 'meow ';
  }
  return catMessage;
};
