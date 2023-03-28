let h1=document.querySelector("h1")
let number=document.getElementById("number");
let name=document.getElementById("name");
let Cvv=document.getElementById("cvv");
let Submit =document.getElementById("SubmitOtp");
let Otp1 =document.getElementById("otp");
let generate=document.getElementById("generate")
let otp=0;
generate.addEventListener("click",()=>{
  otp=Math.floor(Math.random()*10000)
  console.log(otp)
})
Submit.addEventListener("click",()=>{
    if(otp== Number(Otp1.value)){
        alert("Payment Successful")
        h1.innerText="ThankYou for Shopping..!!!"
        setTimeout(function(){
        
       location.replace("./index.html")

        },2500)
    
    }else{
        alert("Invalid OTP")
    }
    
})
    