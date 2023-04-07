// filter price

let rangeMin = 0;
let range = document.querySelector(".range-selected");
let rangeInput = document.querySelectorAll(".range-input input");
let rangePrice = document.querySelector("#price");

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {     
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else if (e.target.className === "max") {
        rangeInput[1].value = minRange + rangeMin;
      }
    }

    let leftPercent = ((minRange - parseInt(rangeInput[0].min)) / (parseInt(rangeInput[0].max) - parseInt(rangeInput[0].min))) * 100;
    let rightPercent = ((maxRange - parseInt(rangeInput[1].min)) / (parseInt(rangeInput[1].max) - parseInt(rangeInput[1].min))) * 100;

    range.style.left = `${leftPercent}%`;
    range.style.right = `${100 - rightPercent}%`;

    rangePrice.textContent = `Price: $${minRange} - $${maxRange}`;
  });
});


//for Shop Page PRODUCT CATEGORIES

var plusIcons = document.querySelectorAll('.plus-icon');
  plusIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
      this.parentNode.querySelector('.nested-checkboxes').classList.toggle('show');
    });
  });
