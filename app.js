const div = document.querySelector(".container");
const button = document.querySelector(".btn")
let api = "https://dummyjson.com/products"
fetch(api)
    .then(res => res.json())
    .then(res => {
        console.log(res.products);
        res.products.map((item) => {
            div.innerHTML += `
                <div class="cart">
                    <img src="${item.thumbnail}" alt="thumbnails">
                     <h3>Price: $${Math.round(item.price)}</h3>
                    <h3>Category: ${item.category}</h3>
                    <h3>Stock: ${item.stock}</h3>
                    <button onclick ="addCartItem(${item.id})" class="btn">  Add To Cart</button>
                   <button class="btn" onclick ="showSingle(${item.id})">Check Details</button>
                </div>
            `;
        });
    })
    .catch(err => {
        console.log(err);
    });


const showSingle = (id) =>{
    console.log(id);
    localStorage.setItem("id" , id)
    window.location = "Single.html"
}   


let cartItems = [];

function addCartItem(id) {
    fetch("https://dummyjson.com/products") 
    .then(res => res.json())
    .then(res => {
        let product = res.products.find(item => item.id === id);
        let indexNumber = cartItems.findIndex(item => item.id === product.id);
        if (indexNumber !== -1) {
            cartItems[indexNumber].quantity += 1; 
        } else {
            product.quantity = 1; 
            cartItems.push(product); 
        }

        console.log(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems)); 
    })
    .catch(err => console.log(err));




    Swal.fire({
        position: "center",
        icon: "success",
        title: "Product has successfully Added",
        showConfirmButton: false,
        timer: 700
      });







}

function cartfun(){
    

    window.location = "cart.html"
    localStorage.setItem(`cartItems` , JSON.stringify(cartItems)) 
}