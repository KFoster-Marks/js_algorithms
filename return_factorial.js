/* Returns the factorial of the provided integer.*/

function factorialize(num) {
  var numFact = 1;
  for (i = num; i > 0; i-=1) {
      numFact = numFact*i;
  }
  return numFact;
}
factorialize(10);