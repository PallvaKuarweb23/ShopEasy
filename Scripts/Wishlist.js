let Container=document.getElementById("ProductContainer");
let Wishlist= JSON.parse(localStorage.getItem("wishlist"))||[] ;
function DisplayData(){
    Container.innerHTML="";
    Wishlist.forEach((element) => {
        
        let Card = document.createElement("div");
        let Image1 = document.createElement("img");
        let Brand = document.createElement("p");
        
        let Price = document.createElement("h3");
        let About = document.createElement("h4");
        let Delete = document.createElement("button");
        
        Image1.src=element.Img
        Brand.innerText=element.brand;
        About.innerText=element.about;
        Price.innerText=element.price;
        Delete.innerText="Delete"
  
    Delete.textContent = "Delete"
 
 Delete.addEventListener("click", () => {
     console.log(element,"Price")
     Wishlist=Wishlist.filter((ele)=>{
     return ele.id!==element.id
   })
   localStorage.setItem("wishlist",JSON.stringify(Wishlist))
   DisplayData()
   });
        
        Card.append(Image1,Brand,About,Price, Delete)
        Container.append(Card)
    } )  
}
DisplayData();


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