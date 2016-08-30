$(document).ready(function() {

  for (i = 1; i <= 100; i++) {
    var fizzbuzz = "";
    var result = "";
   if (i % 3 == 0) fizzbuzz += "Fizz";
   if (i % 5 == 0) fizzbuzz += "Buzz";
  // console.log(fizzbuzz || i);
  result = fizzbuzz || i;
  $(".fizz_buzz").append(result + "<br>");
  // $(".fizz_buzz").append((fizzbuzz || i) + "<br>");
  }
});
