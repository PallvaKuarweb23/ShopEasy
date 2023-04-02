// ----------------  for card payment ---------------

let h1 = document.querySelector("h1")
// let number = document.getElementById("number");
let name = document.getElementById("name");
let Cvv = document.getElementById("cvv");
let submitBtn = document.getElementById("SubmitOtp");
let Otp1 = document.getElementById("otp");
let generate = document.getElementById("generate");
let PaymentDetails = document.getElementById("PaymentDetails");


let  address = document.getElementById("address");
let  city = document.getElementById("city");
let  state = document.getElementById("state");
let  country = document.getElementById("country");
let  number = document.getElementById("number");
let  expiryDate = document.getElementById("expiryDate");
let  cvv = document.getElementById("cvv");

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


var otp = 0;
generate.addEventListener("click", ()=>{

    if(address.value == "" || city.value == "" || state.value == ""  || country.value == "" || number.value == "" || expiryDate.value == "" ||  cvv.value == "")  {
        alert("Please enter all requied field");
    }

    else{
        function getOTP() {
            otp = Math.floor(Math.random() * 10000)
            otp = "" + otp
            if (otp.length == 4) {
                return otp;
            }  else {
                return getOTP()
            }
        
        }
    
        otp = getOTP()
    
        setTimeout(function () {
    
           alert(`Your otp is ${otp}`)
    
         }, 2000)
    
        return otp
    }

})


submitBtn.addEventListener("click", () => {


    if (otp == Number(Otp1.value)) {
        alert("Payment Successful 🎉")
        
        PaymentDetails.style.visibility = "hidden";

        h1.innerText = " Thank You for Shopping..!!!"
        setTimeout(function () {

           window.location.href = "../index.html"

        }, 3000)

    } else {
        alert("Invalid OTP")
    }

})


// ----------------------- for upi payment----------------------------------

let byUpi = document.getElementById("byUpi");
let payByUpi = document.getElementById("payByUpi");

let verifyUpi = document.getElementById("verifyUpi");
let upiId = document.getElementById("upiId");


let  address2 = document.getElementById("address2");
let  city2 = document.getElementById("city2");
let  state2 = document.getElementById("state2");
let  country2 = document.getElementById("country2");

byUpi.addEventListener("click",()=>{
    payByUpi.style.visibility = "visible";
    PaymentDetails.style.visibility = "hidden";
})

verifyUpi.addEventListener("click",()=>{

    if(address2.value == "" || city2.value == "" || state2.value == ""  || country2.value == "" )  {
        alert("Please enter all requied field");
    }

   if(upiId.value == ""){
    alert("Please enter valid upi")
   }
   else{

    setTimeout(function () {

        verifyUpi.innerText = "Done 🎉"
        verifyUpi.style.backgroundColor = "#81C784"

      }, 2000)

      setTimeout(function () {

        payByUpi.style.visibility = "hidden";
        h1.innerText = " Thank You for Shopping..!!!"

     }, 3000)

     setTimeout(function () {
       
        window.location.href = "../index.html"

     }, 5000)
   }
})





// ---------------   for      card payment ------------------------


let byDebitCard = document.getElementById("byDebitCard");
let byCreditCard = document.getElementById("byCreditCard");

byDebitCard.addEventListener("click",()=>{
    PaymentDetails.style.visibility = "visible";
    payByUpi.style.visibility = "hidden";
})

byCreditCard.addEventListener("click",()=>{
    PaymentDetails.style.visibility = "visible";
    payByUpi.style.visibility = "hidden";
})
