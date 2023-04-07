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
            
        ]
    });
});



let endDate = new Date('2023-07-07T23:59:59').getTime();

let countdown = setInterval(() => {
    let now = new Date().getTime();
    let distance = endDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    let seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

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




 