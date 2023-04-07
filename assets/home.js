// Basket

let allButtons=document.querySelectorAll(".btn-primary");
let basketCount=document.getElementById("basketCount")
allButtons.forEach(btn=>{
    btn.addEventListener("click",function(e){
        e.preventDefault();
        
           let id=btn.parentNode.getAttribute("data-id");
           
        if(localStorage.getItem("basket")==null){
            localStorage.setItem("basket",JSON.stringify([]));
        }

        let arr=JSON.parse(localStorage.getItem("basket"));
        let existProduct=arr.find(p=>p.id==id);
        if (existProduct==undefined) {
               arr.push({
                id: id,
                imgUrl: btn.parentNode.parentNode.querySelector('.card-img-top').getAttribute("src"),
                name: btn.parentNode.querySelector('.card-title').innerText,
                price: btn.parentNode.querySelector('span').innerText,
                subtotal: parseFloat(btn.parentNode.querySelector('span').innerText),
                count: 1,
                
            
            });
        }
        else{
            existProduct.count++;
            existProduct.subtotal = existProduct.count * existProduct.price;
        }
        calculatedBasketCount();
        
        localStorage.setItem("basket",JSON.stringify(arr))
    })
 })

function calculatedBasketCount(){
    if(localStorage.getItem("basket")!=null){
        let arr=JSON.parse(localStorage.getItem("basket"));
        basketCount.innerText=arr.length;
 }}
 calculatedBasketCount();

        
































