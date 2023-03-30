// ----------------  for card payment ---------------

let h1 = document.querySelector("h1")
// let number = document.getElementById("number");
let name = document.getElementById("name");
let Cvv = document.getElementById("cvv");
let submitBtn = document.getElementById("SubmitOtp");
let Otp1 = document.getElementById("otp");
let generate = document.getElementById("generate");



let  address = document.getElementById("address");
let  city = document.getElementById("city");
let  state = document.getElementById("state");
let  country = document.getElementById("country");
let  number = document.getElementById("number");
let  expiryDate = document.getElementById("expiryDate");
let  cvv = document.getElementById("cvv");



var otp = 0;
generate.addEventListener("click", ()=>{

    if(address.value == ""){
        alert("Please enter address");
    }
    if(city.value == ""){
        alert("Please enter city");
    }
    if(state.value == ""){
        alert("Please enter state");
    }
    if(country.value == ""){
        alert("Please enter your country");
    }
    if(number.value == ""){
        alert("Please enter card number");
    }
    if(expiryDate.value == ""){
        alert("Please enter expiry date");
    }
    if(cvv.value == ""){
        alert("Please enter correct cvv");
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
        
        h1.innerText = " Thank You for Shopping..!!!"
        setTimeout(function () {

           window.location.href = "../index.html"

        }, 2500)

    } else {
        alert("Invalid OTP")
    }

})


// ----------------------- for upi payment----------------------------------

let byUpi = document.getElementById("byUpi");
let payByUpi = document.getElementById("payByUpi");
let PaymentDetails = document.getElementById("PaymentDetails");
let verifyUpi = document.getElementById("verifyUpi");
let upiId = document.getElementById("upiId");

byUpi.addEventListener("click",()=>{
    payByUpi.style.visibility = "visible";
    PaymentDetails.style.visibility = "hidden";
})

verifyUpi.addEventListener("click",()=>{
   if(upiId.value == ""){
    alert("Please enter valid upi")
   }
   else{

    setTimeout(function () {

        verifyUpi.innerText = "Done 🎉"
        verifyUpi.style.backgroundColor = "#81C784"
 
      }, 1000)

      setTimeout(function () {

        window.location.href = "../index.html"

     }, 2500)
   }
})





// ---------------   for card payment ------------------------


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
