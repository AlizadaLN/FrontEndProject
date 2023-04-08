// let totalPriceElement = document.querySelectorAll("#totalPrice");

//   Modal Location

const modalTrigger = document.getElementById('locationModalTrigger');
const modal = document.getElementById('locationModal');
const closeModal = document.getElementById('modalClose');
const stateSelect = document.getElementById('stateSelect');
modalTrigger.addEventListener('click', function () {
  modal.style.display = 'block';
});
// closeModal.addEventListener('click', function() {
//   modal.style.display = 'none';
// });

// stateSelect.addEventListener('change', function() {
//   const selectedState = stateSelect.value;
//   alert(`Selected State: ${selectedState}`);
// });





// Basket

let allButtons = document.querySelectorAll(".btn-primary");
let basketCount = document.getElementById("basketCount")
allButtons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    let id = btn.parentNode.getAttribute("data-id");

    if (localStorage.getItem("basket") == null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }

    let arr = JSON.parse(localStorage.getItem("basket"));
    let existProduct = arr.find(p => p.id == id);
    if (existProduct == undefined) {
      arr.push({
        id: id,
        imgUrl: btn.parentNode.parentNode.querySelector('.card-img-top').getAttribute("src"),
        name: btn.parentNode.querySelector('.card-title').innerText,
        price: btn.parentNode.querySelector('span').innerText,
        subtotal: parseFloat(btn.parentNode.querySelector('span').innerText),
        count: 1,


      });
    }
    else {
      existProduct.count++;
      existProduct.subtotal = existProduct.count * existProduct.price;
    }
    calculatedBasketCount();
    CalculateTotalPrice(arr);
    localStorage.setItem("basket", JSON.stringify(arr))
  })
})

function calculatedBasketCount() {
  if (localStorage.getItem("basket") != null) {
    let arr = JSON.parse(localStorage.getItem("basket"));
    basketCount.innerText = arr.length;
  }
}
calculatedBasketCount();


// function CalculateTotalPrice(arr) {
//   totalPriceElement.forEach((totall) => {
//       let total = arr.reduce((prev, next) => {
//           return prev + next.price * next.count;
//       }, 0);
//       totall.innerText = Math.round(total);
//   });

// };































