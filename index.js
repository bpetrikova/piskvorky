'use strict';

const button = document.querySelectorAll("button")

let praveHraje = 'circle';

button.addEventListener("click", () => {

  if (praveHraje === "circle") {
    button.classList.add("board__field--circle");
    
    }


})


if praveHraje = "circle" {
button.classList.add("board__field--circle");
}
else {
  button.classList.add("board__field--cross");
}
