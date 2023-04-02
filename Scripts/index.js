let product=document.getElementById("product")
 product.addEventListener("click",()=>{

    window.location.href="../html/product.html"
   
 })

   // Slideshow Part

   var timeOut = 0;
   var slideIndex = 0;
   var autoOn = true;
   
   var dots = document.querySelectorAll('.dot');
   var prevArrow = document.querySelector('.prev');
   var showArrow = document.querySelector('.next');
   
   autoSlides();
   
   function autoSlides() {
       timeOut = timeOut - 20;
       if (autoOn == true && timeOut < 0) {
           showSlides();
       }
       setTimeout(autoSlides, 20);
   }
   
   function prevSlide() {
   
       timeOut = 5000;
   
       var slides = document.querySelectorAll(".slide");
   
       for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
           dots[i].className = dots[i].className.replace(" active", "");
       }
       slideIndex--;
   
       if (slideIndex > slides.length) {
           slideIndex = 1
       }
       if (slideIndex == 0) {
           slideIndex = 3
       }
       slides[slideIndex - 1].style.display = "block";
       dots[slideIndex - 1].className += " active";
   }
   
   function showSlides() {
   
       timeOut = 5000;
   
       var slides = document.querySelectorAll(".slide");
   
       for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
           dots[i].className = dots[i].className.replace(" active", "");
       }
       slideIndex++;
   
       if (slideIndex > slides.length) {
           slideIndex = 1
       }
       slides[slideIndex - 1].style.display = "block";
       dots[slideIndex - 1].className += " active";
   }
   
   prevArrow.addEventListener('click', ()=> {
       prevSlide();
   })
   
   showArrow.addEventListener('click', ()=> {
       showSlides();
   })
   


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

