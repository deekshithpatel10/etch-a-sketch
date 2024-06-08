const container = document.querySelector(".container");

for( let index = 0; index < 16; index++) {
   const div = document.createElement("div");

   div.classList.add(".div-style");

   container.appendChild(div);
}

