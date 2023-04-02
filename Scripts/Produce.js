let filterby=document.getElementById("filterby")
let filterbtn=document.getElementById("filter-btn")
let Brand=document.getElementById("newfilter")
let Container=document.getElementById("ProductContainer");
let men_Tshirt = document.getElementById("mtshirts");
let women_Tshirt = document.getElementById("wtshirts");
let CART= JSON.parse(localStorage.getItem("Cart")) || [];
let WISH=JSON.parse(localStorage.getItem("wishlist"))|| [];
// ---------------------=======================================================================***********************************************
let menPro = JSON.parse(localStorage.getItem("Men_Products")) || [];
let womenPro = JSON.parse(localStorage.getItem("Women_Products")) || [];
let men_tshirt = JSON.parse(localStorage.getItem("Men_Shirts")) || [];
let women_tshirt = JSON.parse(localStorage.getItem("Womens_Tshirts")) || [];

if(womenPro.length == 0 && men_tshirt.length == 0){
    DisplayData(menPro);
    // console.log(menPro);
}else if(men_tshirt.length == 0 && menPro.length == 0){
    DisplayData(womenPro);
    // console.log(womenPro);
}else{
    DisplayData(men_tshirt);
}
console.log(menPro.length, womenPro.length);

























// ------------------------------------==========================================----------------------------------------------------
// Display Data
function DisplayData(data){
Container.innerHTML="";
data.forEach((element) => {
    
    let card = document.createElement("div");
    // card.style.width = "90%";

    let Image1 = document.createElement("img");
    let Brand = document.createElement("p");
     let Size = document.createElement("h4");
    let Price = document.createElement("h3");
    // let About = document.createElement("h4");
    let AddtoCart = document.createElement("button");
    let AddtoWish=document.createElement("button");
    let category = document.createElement("p");
    // let redirect=document.createElement("a")
    // Image1.setAttribute("src", element.image);
    // redirect.href="file:///C:/Users/Admin/Desktop/CW-project%20unit-2/changeable-anger-4325/individual.html"
    // redirect.textContent=element.Img
    Image1.src=element.Img;
    Brand.innerText=element.brand;
    Size.innerText=element.size;
    Price.innerText=`Rs. ${element.price}`;
    AddtoCart.innerText="Buy It Now"
    AddtoWish.textContent="Add to Wishlist"
    AddtoCart.setAttribute("id","cart")
    
    AddtoWish.setAttribute("id","tag")

//    Image1.addEventListener("click",()=>{
//        location.replace("file:///C:/Users/Admin/Desktop/CW-project%20unit-2/changeable-anger-4325/individual.html")
//    })
    AddtoCart.addEventListener("click", ()=>{
        if(checkdup(element)){
            alert("Product already in cart")
        }else{
        CART.push({...element,Quantity:1})
        console.log(CART)
        localStorage.setItem("Cart",JSON.stringify(CART))
        alert("Product added to cart")
        }     
    })
    category.textContent = element.category;
    // AddtoCart.setAttribute=("id","color")
    AddtoWish.addEventListener("click",()=>{
        if(checkdup1(element)){
            alert("Product already in cart")
        }else{
            WISH.push((element))
            console.log(WISH)
            localStorage.setItem("wishlist",JSON.stringify(WISH))
            alert("product added to Wishlist")
        }
    })
    
    card.append(Image1, Brand,Size,Price, category, AddtoCart,AddtoWish)
    Container.append(card)
} )
}

// check duplicate Product for Add to CART
function checkdup(Product){
for (let i=0;i<CART.length;i++){
    if(CART[i].id===Product.id)
    return true
}
return false

}

//check duplicate Product for Add to WISH LIST
function checkdup1(Product){
for (let i=0;i<WISH.length;i++){
    if(WISH[i].id===Product.id)
    return true
}
return false
}
// DisplayData(men_pro);

// Filter by price
// filterbtn.addEventListener("click",()=>{
// LSData1=LSData.filter((ele)=>{
//     // console.log(LSData)

//    if(ele.price>=Number(lower.value) && ele.price<=Number(upper.value)){
//     return true
//    }else{
//     return false
//    }
 
   
// })
// // console.log(LSData1)
// DisplayData(LSData1);
// })


// Filtering by brand
// Brand.addEventListener("change",()=>{
// if(Brand.value==""){
//     DisplayData(LSData)
// }else{
//    let LSData2=LSData.filter(function(e){
//         if(e.brand==Brand.value){
//             return true
//         }else{
//             return false
//         }

//     })
//     DisplayData(LSData2)
// }

// })


// ==========================     Krishna    ===================

let currentUser = JSON.parse(localStorage.getItem("current-user")) || [];
let LogoutBtn = document.getElementById("LogoutBtn");


if(currentUser.length ==  0){
   LogoutBtn.style.visibility = "hidden";
}
else{
  LogoutBtn.style.visibility = "visible";
}


LogoutBtn.addEventListener("click",()=>{
    currentUser = [];
    localStorage.setItem("current-user",JSON.stringify(currentUser))
    LogoutBtn.style.visibility = "hidden";
    window.location.href = "login.html"
})

// ==========================     Krishna    ===================


let S = document.getElementById("S");
let M = document.getElementById("M");
let L = document.getElementById("L");
let XL = document.getElementById("XL");
let XXL = document.getElementById("XXL");
// let womenfilter = document.getElementById("Women");

// console.log(S);
S.addEventListener("change", function(e){
    // console.log(S.id);
    let size = S.id;
    console.log("clicked");
    getfilteredSize(size)
})
M.addEventListener("change", function(e){
    let size = M.id;
    getfilteredSize(size)
})
L.addEventListener("change", function(e){
    let size = L.id;
    getfilteredSize(size)
})
XL.addEventListener("change", function(e){
    let size = XL.id;
    getfilteredSize(size)
})
XXL.addEventListener("change", function(e){
    let size = XXL.id;
    getfilteredSize(size)
})

function getfilteredSize (size){
    // let sProducts = 
    fetch(`${baseUrl}Men?size=${size}`)
    .then ((res)=>{
        return res.json()
    })
    .then ((data)=>{
        console.log(data);
        DisplayData(data)
    })

}

let koovs = document.getElementById("koovs");
let nike = document.getElementById("nike");
let zara = document.getElementById("zara");

koovs.addEventListener("change", function(e){
   
    let brand = "KOOVS";
    getfilteredBrand(brand)
})

nike.addEventListener("change", function(e){
   
    let brand = "NIKE";
    getfilteredBrand(brand)
})

zara.addEventListener("change", function(e){
   
    let brand = "ZARA";
    getfilteredBrand(brand)
})

function getfilteredBrand (brand){
    // let sProducts = 
    fetch(`${baseUrl}Men?brand=${brand}`)
    .then ((res)=>{
        return res.json()
    })
    .then ((data)=>{
        console.log(data);
        DisplayData(data)
    })

}

let TShirt = document.getElementById("TShirt");
let Hoodies = document.getElementById("Hoodies");
let Shorts = document.getElementById("Shorts");

TShirt.addEventListener("change", function(e){
   
    let category = "TShirt";
    getfilteredCategory(category)
})

Hoodies.addEventListener("change", function(e){
   
    let category = "Hoodies";
    getfilteredCategory(category)
})

Shorts.addEventListener("change", function(e){
   
    let category = "Shorts";
    getfilteredCategory(category)
})

function getfilteredCategory (category){
    // let sProducts = 
    fetch(`${baseUrl}Men?category=${category}`)
    .then ((res)=>{
        return res.json()
    })
    .then ((data)=>{
        console.log(data);
        DisplayData(data)
    })

}

// let LT500 = document.getElementById("less-than-100");
// let p501to1000 = document.getElementById("501-1000");
// let p1001to2000 = document.getElementById("1001-2000");
// let MT2000 = document.getElementById("more-than-2000");

// LT500.addEventListener("change", function(e){
//     getfilteredPrice(2000)
// })

// function getfilteredPrice (gt,lt){
//     // let sProducts = 
//     fetch(`${baseUrl}Men?price=gt${gt}`)
//     .then ((res)=>{
//         return res.json()
//     })
//     .then ((data)=>{
//         console.log(data);
//         DisplayData(data)
//     })

// }