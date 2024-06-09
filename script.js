const container = document.querySelector(".container");
const colorButtons = document.querySelectorAll(".color-choice button");
const eraser = document.querySelector(".eraser");
const reset = document.querySelector(".reset");
const blackButton = document.querySelector(".black");
const slider = document.querySelector(".slider input");

//initally, black color is chosen
blackButton.style.border = "2px solid white";
let penColor = "black";



colorButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
      colorButtons.forEach((button) => {
         button.style.border = "none";
      });
      
      penColor = button.className;
      eraser.style.border = "none";

      button.style.border = "2px solid white";
   });
});

eraser.addEventListener('click', () => {
   colorButtons.forEach((button) => {
      button.style.border = "none";
   });

   penColor = "white"

   eraser.style.border = "3px solid white"

});

let numberOfCells = slider.value;
let cells;
addGrid( numberOfCells );

function addGrid( numberOfCells ) {
   for (let index = 0; index < (numberOfCells * numberOfCells); index++) {
      const div = document.createElement("div");

      let widthOfCell = 500 / numberOfCells;

      div.style.boxSizing = "border-box"
      div.style.border = "0.1px solid lightgray";
      div.style.width = widthOfCell + "px";
      div.style.height = widthOfCell + "px";

      container.appendChild(div);
   }
};



slider.addEventListener('input', () => {
   container.replaceChildren();
   addGrid( slider.value );
   cells = container.childNodes;

   cells.forEach((cell) => {
      cell.addEventListener('mouseenter', (event) => {
         if(event.buttons === 1) cell.style.backgroundColor = penColor;
      });
   });
   
   reset.addEventListener("click", () => {
      cells.forEach((cell) => {
         cell.style.backgroundColor = "white";
      })
   })
});






