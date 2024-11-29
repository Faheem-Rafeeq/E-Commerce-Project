const div = document.querySelector(".container");
const button = document.querySelector(".btn")

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(res => {
        console.log(res.products);
        res.products.map((item) => {
            div.innerHTML += `
                <div class="cart">
                    <img src="${item.thumbnail}" alt="thumbnails">
                    <h3>Price: $${item.price}</h3>
                    <h3>Category: ${item.category}</h3>
                    <h3>Stock: ${item.stock}</h3>
                    <button onclick ="CartItem(${item.id})" class="btn">  Add To Cart</button>
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

function CartItem(id) {
     console.log(`${id} wal item add ho chuka ha`);

localStorage.setItem("id" , id) 

}

function cartfun(){
    window.location = "cart.html"
}

