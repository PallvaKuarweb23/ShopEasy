

const baseUrl = "http://localhost:3000/";

let men_products = document.getElementById("menT");
let women_products = document.getElementById("womenK");
let men_pro = JSON.parse(localStorage.getItem("Men_Products")) || [];
let women_pro = JSON.parse(localStorage.getItem("Women_Products")) || [];

men_products.addEventListener("click", function(event){
    category = men_products.textContent;
    getProducts(category);
    // window.location.href = "product.html";
});
women_products.addEventListener("click", function(event){
    category = women_products.textContent;
    getProducts(category);
    // window.location.href = "product.html";
});

function getProducts(category){
    console.log(category);
    fetch(`${baseUrl}${category}`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        if(category == "Men"){
            localStorage.setItem("Men_Products", JSON.stringify(data));
            localStorage.setItem("Women_Products", JSON.stringify([]));
        }else if(category == "Women"){
            localStorage.setItem("Women_Products", JSON.stringify(data));
            localStorage.setItem("Men_Products", JSON.stringify([]));
        }
    })
    .catch(error => {
        console.log(error);
    })
}