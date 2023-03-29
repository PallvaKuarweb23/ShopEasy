

let h1 = document.querySelector("h1")
let number = document.getElementById("number");
let name = document.getElementById("name");
let Cvv = document.getElementById("cvv");
let submitBtn = document.getElementById("SubmitOtp");
let Otp1 = document.getElementById("otp");
let generate = document.getElementById("generate")

var otp = 0;
generate.addEventListener("click", ()=>{


    otp = Math.floor(Math.random() * 10000);

    setTimeout(function () {

       alert(`Your otp is ${otp}`)

     }, 2000)

    return otp
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


