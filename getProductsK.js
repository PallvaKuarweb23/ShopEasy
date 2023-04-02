// const baseUrl = "http://localhost:3000/";

// let men_products = document.getElementById("menT");
// let women_products = document.getElementById("womenK");
// let men_pro = JSON.parse(localStorage.getItem("Men_Products")) || [];
// let women_pro = JSON.parse(localStorage.getItem("Women_Products")) || [];
// let womenTshirts = JSON.parse(localStorage.getItem("Womens_Tshirts")) || [];
// let menTshirts = JSON.parse(localStorage.getItem("Mens_Tshirts")) || [];

// let tshirts = document.getElementById("mtshirts");
// let wtshirts = document.getElementById("wtshirts");

// var category;
// var product;

// men_products.addEventListener("click", function (event) {
//      category = "Men";
//     getProducts(category);
// });
// women_products.addEventListener("click", function (event) {
//     category = "Women";
//     getProducts(category);
// });

// function getProducts(category) {
//     // console.log(category);
//     fetch(`${baseUrl}${category}`)
//         .then(res => {
//             return res.json();
//         })
//         .then(data => {
//             console.log(".....working")
//             if (category == "Men") {
//                 localStorage.setItem("Mens_Tshirts", JSON.stringify([]));
//                 localStorage.setItem("Womens_Tshirts", JSON.stringify([]));
//                 localStorage.setItem("Men_Products", JSON.stringify(data));
//                 localStorage.setItem("Women_Products", JSON.stringify([]));

//             } else if (category == "Women") {
//                 localStorage.setItem("Mens_Tshirts", JSON.stringify([]));
//                 localStorage.setItem("Womens_Tshirts", JSON.stringify([]));
//                 localStorage.setItem("Men_Products", JSON.stringify([]));
//                 localStorage.setItem("Women_Products", JSON.stringify(data));
//             }
//             window.location.href = "../html/product.html";
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///////////////////////////////++++++++++++++++++++++++++++++++++++++++


// tshirts.addEventListener("click", function (event) {

//     console.log("Add Event Listener working");
//      category = "Men";
//      product = "TShirt"
//     let mt_url = `${baseUrl}${category}?category=${product}`;
//     get_mt(mt_url);
// });

// async function get_mt(url) {
//     try {
//         console.log("Krishna")
//         let res = await fetch(url);
//         res = await res.json();
//         localStorage.setItem("Mens_Tshirts", JSON.stringify(res));
//         localStorage.setItem("Womens_Tshirts", JSON.stringify([]));
//         localStorage.setItem("Men_Products", JSON.stringify([]));
//         localStorage.setItem("Women_Products", JSON.stringify([]));
//     } catch (error) {
//         console.log(error);
//     }
// }


// wtshirts.addEventListener("click", function (event) {
//     category = "Women";
//     let wt_url = `${baseUrl}${category}`;
 
//    let wt_filter = get_wt(wt_url);
//    let kTshirts = wt_filter.filter((ele)=>{
//         if(ele.category == "TShirt"){
//             return ele
//         }

//    })
//    localStorage.setItem("Womens_Tshirts", JSON.stringify(kTshirts));
//    localStorage.setItem("Men_Products", JSON.stringify([]));
//    localStorage.setItem("Women_Products", JSON.stringify([]));
//    localStorage.setItem("Mens_Tshirts", JSON.stringify([]));

// });




// function get_wt(wt_url){
//     fetch(wt_url)
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data)
//         return data;
  
//     })  
//     .catch((err)=>{
//         console.log(err)
//     })
// }



const baseUrl = "http://localhost:3000/";

let men_products = document.getElementById("menT");
let women_products = document.getElementById("womenK");
let men_pro = JSON.parse(localStorage.getItem("Men_Products")) || [];
let women_pro = JSON.parse(localStorage.getItem("Women_Products")) || [];

let tshirts = document.getElementById("mtshirts");
let wtshirts = document.getElementById("wtshirts");

men_products.addEventListener("click", function (event) {
    category = men_products.textContent;
    getProducts(category);
});
women_products.addEventListener("click", function (event) {
    category = women_products.textContent;
    getProducts(category);
});

function getProducts(category) {
    // console.log(category);
    fetch(`${baseUrl}${category}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            if (category == "Men") {
                localStorage.setItem("Mens_Tshirts", JSON.stringify([]));
                localStorage.setItem("Womens_Tshirts", JSON.stringify([]));
                localStorage.setItem("Men_Products", JSON.stringify(data));
                localStorage.setItem("Women_Products", JSON.stringify([]));

            } else if (category == "Women") {
                localStorage.setItem("Mens_Tshirts", JSON.stringify([]));
                localStorage.setItem("Womens_Tshirts", JSON.stringify([]));
                localStorage.setItem("Men_Products", JSON.stringify([]));
                localStorage.setItem("Women_Products", JSON.stringify(data));
            }
            window.location.href = "../html/product.html";
        })
        .catch(error => {
            console.log(error);
        })
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///////////////////////////////++++++++++++++++++++++++++++++++++++++++


tshirts.addEventListener("click", function (event) {

    console.log("Add Event Listener working");
    let category = "Men";
    let product = "TShirt"
    let mt_url = `${baseUrl}${category}?category=TShirt`;
    get_mt(mt_url);
});

async function get_mt(url) {
    try {
        let res = await fetch(url);
        res = await res.json();
        localStorage.setItem("Mens_Tshirts", JSON.stringify(res));
        // localStorage.setItem("Womens_Tshirts", JSON.stringify([]));
        // localStorage.setItem("Men_Products", JSON.stringify([]));
        // localStorage.setItem("Women_Products", JSON.stringify([]));
    } catch (error) {
        console.log(error);
    }
}


wtshirts.addEventListener("click", function (event) {
    let category = "Women";
    let product = "TShirt";
    let wt_filter = `${baseUrl}${category}?category=TShirt`;
    // console.log(wt_filter);
    get_wt(wt_filter);
});

async function get_wt(url) {
    try {
        let res = await fetch(url);
        res = await res.json();
        localStorage.setItem("Womens_Tshirts", JSON.stringify(res));
        // localStorage.setItem("Men_Products", JSON.stringify([]));
        // localStorage.setItem("Women_Products", JSON.stringify([]));
        // localStorage.setItem("Mens_Tshirts", JSON.stringify([]));
    } catch (error) {
        console.log(error);
    }
}
