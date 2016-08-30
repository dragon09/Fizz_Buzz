

for (i = 1; i <= 100; i++) {
  var fizzbuzz = "";
 if (i % 3 == 0) fizzbuzz += "Fizz";
 if (i % 5 == 0) fizzbuzz += "Buzz";
console.log(fizzbuzz || i);
}
