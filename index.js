var $form = document.getElementById("form");
var $number = document.getElementById("number");
var $btn = document.getElementById("btn");
var $rezult = document.getElementById("rezult");
var $body = document.querySelector("body")

$btn.addEventListener("click", function (event){
   event.preventDefault();
   if(number.value % 3 == 0 && number.value % 5 == 0){
      $rezult.textContent = `${number.value} bu son 3 ga ham 5 ga ham bo'linadi! (FizzBuzz)`;
   }else if(number.value % 5 == 0){
      $rezult.textContent = `${number.value} bu son faqat 5 ga bo'linadi! (Fizz)`;
   }else if(number.value % 3 == 0){
      $rezult.textContent = `${number.value} bu son faqat 3 ga bo'lindi! (Buzz)`
   }else{
      $rezult.textContent = `${number.value} Shartlarga moslik yo'q!`
   }

   if($body.style.backgroundColor == `red`){
      $body.style.backgroundColor = `white`
   }else{
      $body.style.backgroundColor = `red`
   }
   
   $number.value = ''
})
