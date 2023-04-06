$(document).ready(function () {

    $('.productsSlide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});




const endDate = new Date('2023-04-07T23:59:59').getTime();


const countdown = setInterval(() => {

    const now = new Date().getTime();


    const distance = endDate - now;

    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');


    document.getElementById('countdown').innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
    document.getElementById('days').innerHTML = pad(days);
    document.getElementById('hours').innerHTML = pad(hours);
    document.getElementById('minutes').innerHTML = pad(minutes);
    document.getElementById('seconds').innerHTML = pad(seconds);


    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'EXPIRED';
    }
}, 1000);

function pad(number) {
    return number.toString().padStart(2, '0');
}


// LogIn Register

let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let loginForm = document.querySelector('.login-form');
let registerForm = document.querySelector('.register-form');

loginLink.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

registerLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

//for Shop Page

var plusIcons = document.querySelectorAll('.plus-icon');
  plusIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
      this.parentNode.querySelector('.nested-checkboxes').classList.toggle('show');
    });
  });






 // filter price

 document.addEventListener("DOMContentLoaded", function() {
    var priceSlider = document.getElementById("priceSlider");
    var priceLabel = document.getElementById("price");
  
    // Initialize the slider with default values
    noUiSlider.create(priceSlider, {
      start: [0, 70], // Set initial values for min and max price
      connect: true, // Enable a range slider
      range: {
        'min': 0, // Set minimum value for the slider
        'max': 70 // Set maximum value for the slider
      }
    });
  
    // Update the price range label with slider values
    priceSlider.noUiSlider.on("update", function(values) {
      var minPrice = values[0];
      var maxPrice = values[1];
      priceLabel.innerHTML = "Price: $" + minPrice + " - $" + maxPrice;
    });
  });