let LSData=JSON.parse(localStorage.getItem("Cart"))||[]
// console.log(LSData)
let pay=document.getElementById("btn")
let Container=document.getElementById("Container")
let total= document.getElementById("cart-total")
let totalcart=document.getElementById("cart-total1");



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











pay.addEventListener("click",()=>{
        location.replace("./paymentcheckout.html")

    })


console.log(LSData)
function DisplayData(){
Container.innerHTML="";
LSData.forEach((element) => {
    
    let Card = document.createElement("div");
    let Image1 = document.createElement("img");
    let Brand = document.createElement("p");
    let Price = document.createElement("h3");
    let About = document.createElement("h4");
    let AddtoCart = document.createElement("button");
    let increase=document.createElement("button")
    let decrease=document.createElement("button")
    let quantity=document.createElement("span")



    increase.textContent="+";
    decrease.textContent="-";
    quantity.textContent=element.Quantity
    Image1.src=element.Img
    Brand.innerText=element.brand;
    About.innerText=element.about;
    Price.innerText=element.price;
    AddtoCart.innerText="Remove from cart"
    AddtoCart.setAttribute("id","btn")
    increase.setAttribute=("id","inc")

    AddtoCart.addEventListener("click", ()=>{
      LSData= LSData.filter((ele)=>{
        if(ele.id!==element.id)
        return true
        })
        total.textContent=+(sum);
        totalcart.textContent=+(sum)
        localStorage.setItem("Cart",JSON.stringify(LSData))
       
        DisplayData()
        console.log(LSData)
    })


    increase.addEventListener("click", () => {
    element=element.Quantity++

    localStorage.setItem("Cart",JSON.stringify(LSData))
      DisplayData()
  
    });
    

     decrease.addEventListener("click", () => {
      if(element.Quantity>1){
        element=element.Quantity--
        localStorage.setItem("Cart",JSON.stringify(LSData))
      DisplayData()
      }
  
    });
   
let sum=0;

for(let i=0;i<LSData.length;i++){
    sum+=(LSData[i].price)*(LSData[i].Quantity);
    console.log()
}

total.textContent=+(sum);
totalcart.textContent=+(sum)





    Card.append(Image1,Brand,About,Price,increase,quantity,decrease, AddtoCart)
    Container.append(Card)
} )  
}




DisplayData()