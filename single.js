const data= localStorage.getItem("id");
console.log(data);  

const div = document.querySelector(".container")
const reviews = document.querySelector(".reviews")


fetch(`https://dummyjson.com/products/${data}`)
.then(res => res.json())
.then(res => {
    console.log(res);

    div.innerHTML = `
    
    <div class="cart2">
    <img src=${res.thumbnail} alt="">
    <h1>Name : ${res.title}</h1>
    <h1>Price : ${res.price} $</h1>
    <h1>Availbity : ${res.availabilityStatus}</h1>
    <h1>Stock : ${res.stock}</h1>
    <h1>Category : ${res.category}</h1>
    <h1 class="description-title">Description: <span class="description-text">${res.description}</span></h1>

    </div>
    `
res.reviews.map((item)=>{
reviews.innerHTML += `
<div class="review">
<h1>Reviews &#128077 </h1>
   <h3>CutomerName : ${item.reviewerName}</h3>
   <h3>Rating : ${item.rating}</h3>
   <h3>Comments : ${item.comment}</h3>

   </div>

`
});

})
.catch(err => console.log(err))




