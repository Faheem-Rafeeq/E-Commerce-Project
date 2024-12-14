let localData = localStorage.getItem("cartItems");
let cartItems = JSON.parse(localData);
const div = document.querySelector(".container");

function renderItems() {
    if (cartItems.length > 0) {
         
       div.innerHTML = ''; 
        cartItems.forEach((item, index) => {
            div.innerHTML += `
            <div class="cart2">
                <img src="${item.thumbnail}" alt="${item.title}">
                <h1>Name : ${item.brand}</h1>
                <h1>Price: $${Math.round(item.price)}</h1>
                <button onclick="decrease(${index})" class="btn3"> - </button> 
                <span id="quantity-${index}">${item.quantity}</span>   
                <button onclick="increase(${index})" class="btn3"> + </button> 
                <button onclick="removeItem(${index})" class="btn3">Remove</button>
            </div>

            `;
        });
    } else {
        div.innerHTML = "<h3>Your cart is empty</h3>";
    }
    totalAmount();  
}

function increase(index) {
    cartItems[index].quantity += 1;  
    newQuantity(index);   
}

function decrease(index) {
    if (cartItems[index].quantity > 0) {
        cartItems[index].quantity -= 1;  
    }
    if (cartItems[index].quantity < 1) {
        removeItem(index);
    }
    newQuantity(index);    
}

function newQuantity(index) {
    const quantityDisplay = document.querySelector(`#quantity-${index}`);
    quantityDisplay.textContent = cartItems[index].quantity; 

    totalAmount(); 
}

function removeItem(index) {
    cartItems.splice(index, 1);  
    renderItems(); 
}

function totalAmount() {
    const totalAmountElement = document.querySelector(".total");
    const totalAmount = cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
    totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
}

renderItems(); 
