let description = document.querySelector(".description-link");
let additionalInfo = document.querySelector(".additional-link");
let reviews = document.querySelector(".reviews-link");

let descriptionInput = document.querySelector(".description-input");
let additionalInfoInput = document.querySelector(".additional-input");
let reviewsInput = document.querySelector(".reviews-input");


description.addEventListener("click", function(e) {
    e.preventDefault();
  descriptionInput.classList.remove("d-none");
  additionalInfoInput.classList.add("d-none");
  reviewsInput.classList.add("d-none");
});

additionalInfo.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionInput.classList.add("d-none");
    additionalInfoInput.classList.remove("d-none");
    reviewsInput.classList.add("d-none");
});

reviews.addEventListener("click", function(e) {
    e.preventDefault();
    descriptionInput.classList.add("d-none");
    additionalInfoInput.classList.add("d-none");
    reviewsInput.classList.remove("d-none");
});