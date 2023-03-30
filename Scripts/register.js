let formdata = JSON.parse(localStorage.getItem("User-data")) || [];
// let formdata=[]
let form = document.querySelector("form");
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let pass = document.getElementById("password");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let details = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    password: pass.value,
  };
  formdata.push(details);
  localStorage.setItem("User-data", JSON.stringify(formdata));
  location.replace("./login.html");
});

// buttons
function loginpage() {
  window.location.href = "../html/login.html";
}
function facebookpage() {
  window.location.href = "https://www.facebook.com/";
}
function googlepage() {
  window.location.href = "https://accounts.google.com/";
}
