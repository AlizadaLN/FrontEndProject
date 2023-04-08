let table = document.querySelector(".table");
let container = document.querySelector(".container");
let emptyCard = document.getElementById("emptyCard");
let fullCard = document.getElementById("fullCard");
let totalPriceElement = document.querySelectorAll("#totalPrice");

if (localStorage.getItem("basket") != null) {

    let arr = JSON.parse(localStorage.getItem("basket"));

    fullCard.classList.remove("change-d");
    emptyCard.classList.add("change-d");

    if (arr.length == 0) {
        table.style.display = "none";
        fullCard.classList.add("change-d");
        emptyCard.classList.remove("change-d");
    } else {
        table.style.display = "block";
    }



    arr.forEach(product => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="p-id" data-id=${product.id}>
                <img src="${product.imgUrl}" alt="" width="150" height="150">
            </td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <div class="quantity">
                    <button class="minus-button" data-index="${product.index}">-</button>
                    <span class="quantity-value">${product.count}</span>
                    <button class="plus-button" data-index="${product.index}">+</button>
                </div>
            </td>
            <td class="subTotalPrice">${product.price * product.count}</td>
            <td data-index="${product.index}"><button><i class="fa-solid fa-x"></i></button></td>
        `;
        table.appendChild(tr);
    });

    CalculateTotalPrice(arr);

    container.style.display = 'block';
}
else {

    container.style.display = 'none';
}



let plusButtons = document.querySelectorAll('.plus-button');

plusButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let id = button.parentNode.parentNode.parentNode.firstElementChild.getAttribute('data-id');
        let quantityValue = button.parentElement.querySelector('.quantity-value');
        let count = parseInt(quantityValue.innerText);
        let arr = JSON.parse(localStorage.getItem("basket"));

        let existProduct = arr.find((p) => p.id == id);

        if (existProduct.id == id) {
            existProduct.count++;

        }
        localStorage.setItem("basket", JSON.stringify(arr));
        quantityValue.innerText = count + 1;
        let subTotalPrice = document.querySelector(".subTotalPrice");
        subTotalPrice.innerText = Math.round(calculateTotalPrice(arr), 3);

        CalculateTotalPrice(JSON.parse(localStorage.getItem("basket")));
        location.reload();
    });
});



function calculateTotalPrice(arr) {
    let sum = arr.reduce((prev, next) => {
        return prev + next.price * next.count;
    }, 0);
    return sum;

}


let minusButtons = document.querySelectorAll('.minus-button');
minusButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let id = button.parentNode.parentNode.parentNode.firstElementChild.getAttribute('data-id');
        let quantityValue = button.parentElement.querySelector('.quantity-value');
        let count = parseInt(quantityValue.innerText);
        let arr = JSON.parse(localStorage.getItem("basket"));

        let existProduct = arr.find((p) => p.id == id);

        if (existProduct.id == id) {
            existProduct.count--;

        }
        localStorage.setItem("basket", JSON.stringify(arr));
        quantityValue.innerText = count - 1;
        let subTotalPrice = document.querySelector(".subTotalPrice");
        subTotalPrice.innerText = Math.round(calculateTotalPrice(arr), 2);

        CalculateTotalPrice(JSON.parse(localStorage.getItem("basket")));
        location.reload();

    });
});

let deleteButtons = document.querySelectorAll('td[data-index] button');

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        let index = button.parentElement.getAttribute('data-id');
        let tr = button.parentElement.parentElement;
        let table = tr.parentElement;
        table.removeChild(tr);
        removeFromLocalStorage(index);
        CalculateTotalPrice(JSON.parse(localStorage.getItem("basket")));
        location.reload();
    });
});

function updateLocalStorage(index, count) {
    let arr = JSON.parse(localStorage.getItem("basket"));
    arr[index].count = count;
    localStorage.setItem("basket", JSON.stringify(arr));
}

function removeFromLocalStorage(index) {
    let arr = JSON.parse(localStorage.getItem("basket"));
    arr.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(arr));
}


function CalculateTotalPrice(arr) {
    totalPriceElement.forEach((totall) => {
        let total = arr.reduce((prev, next) => {
            return prev + next.price * next.count;
        }, 0);
        totall.innerText = Math.round(total, 2);
    })

}

if (localStorage.getItem("basket") != null) {
    CalculateTotalPrice(JSON.parse(localStorage.getItem("basket")));
}

let removeAllButton = document.getElementById("removeAllButton");
removeAllButton.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("basket");
    basketCount.innerText = 0;

    
    let table = document.querySelector(".table");
    table.innerHTML = ""; 

    let totalPriceElement = document.querySelectorAll("#totalPrice");
    totalPriceElement.forEach((totall) => {
        totall.innerText = 0; 
        location.reload();
    });
});
