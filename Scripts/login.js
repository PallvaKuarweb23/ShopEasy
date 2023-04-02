let form = document.querySelector("form");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let h1 = document.getElementById("heading");
let data = JSON.parse(localStorage.getItem("User-data")); 

// console.log(data)

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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(email.value,pass.value)
  let print = false;
  for (let i = 0; i < data.length; i++) {
    if (email.value === data[i].email && pass.value === data[i].password) {
      print = true;
       currentUser = data[i]
       localStorage.setItem("current-user",JSON.stringify(currentUser))

      break;
    }
  }
  if (print == true) {
    // h1.innerText="Sign in Successful"
    window.location.href = "../index.html";
  } else alert("Please enter correct Details");
});

// redirecting to the pages
function reisterpageY() {
  window.location.href = "../html/register.html";
}

function facebookpage() {
  window.location.href = "https://www.facebook.com/";
}
function googlepage() {
  window.location.href = "https://accounts.google.com/";
}
