let table = document.querySelector(".table");
let totalPrice = document.querySelector("#totalPrice");

if (localStorage.getItem("basket") != null) {

    let arr = JSON.parse(localStorage.getItem("basket"));

    table.classList.remove("d-none");

    arr.forEach(product => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <img src="${product.imgUrl}" alt="" width="150" height="150">
            </td>
            <td>${product.name}</td>
            <td>${product.price.slice(0,product.price.length-1)}</td>
            <td>
                <div class="quantity">
                    <button class="minus-button" data-index="${product.index}">-</button>
                    <span class="quantity-value">${product.count}</span>
                    <button class="plus-button" data-index="${product.index}">+</button>
                </div>
            </td>
            <td data-index="${product.index}"><button><i class="fa-solid fa-trash"></i></button></td>
        `;
        table.appendChild(tr);
    });

    CalculateTotalPrice(arr);

}

let plusButtons = document.querySelectorAll('.plus-button');
let minusButtons = document.querySelectorAll('.minus-button');
let deleteButtons = document.querySelectorAll('td[data-index] button');

plusButtons.forEach(button => {
    button.addEventListener('click', () => {
        let index = button.getAttribute('data-index');
        let quantityValue = button.parentElement.querySelector('.quantity-value');
        let count = parseInt(quantityValue.innerText);
        quantityValue.innerText = count + 1;
        updateLocalStorage(index, count + 1);
        CalculateTotalPrice(JSON.parse(localStorage.getItem("basket")));
    });
});

minusButtons.forEach(button => {
    button.addEventListener('click', () => {
        let index = button.getAttribute('data-index');
        let quantityValue = button.parentElement.querySelector('.quantity-value');
        let count = parseInt(quantityValue.innerText);
        if (count > 1) {
            quantityValue.innerText = count - 1;
            updateLocalStorage(index, count - 1);
            CalculateTotalPrice(JSON.parse(localStorage.getItem("basket")));
        }
    });
});

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        let index = button.parentElement.getAttribute('data-index');
        let tr = button.parentElement.parentElement;
        let table = tr.parentElement;
        table.removeChild(tr);
        removeFromLocalStorage(index);
        CalculateTotalPrice(JSON.parse(localStorage.getItem("basket")));
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

function CalculateTotalPrice(arr){
    let sum=arr.reduce((prev,next)=>{
        return prev+next.price.slice(0,next.price.length-1)*next.count;
    },0);
    console.log(sum);
}

if(localStorage.getItem("basket")!=null){
    CalculateTotalPrice(JSON.parse(localStorage.getItem("basket")));
}
