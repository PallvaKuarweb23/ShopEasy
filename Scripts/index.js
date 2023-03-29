let product=document.getElementById("product")
 product.addEventListener("click",()=>{

    window.location.href="../html/product.html"
   
 })

   // Slideshow Part
   function slideshowFun(images){
      let counter=0;
      setInterval(function(){
        counter++
      if(counter==images.length){
        counter=0;
      }
     img.src=images[counter]
      },5000);
     
    }
    
    // Use the following data for slideshow
    var movieImages = [
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner-Beautiful-Blues_1s9JnZs.jpg?format=webp&w=1024&dpr=1.9",
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020230216144455.jpg?format=webp&w=1024&dpr=1.9",
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-Banner_1_h0DvwUm.jpg?format=webp&w=1024&dpr=1.9",
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-Banner_1_rwFtTge.jpg?format=webp&w=1024&dpr=1.9",
      // "https://igimages.gumlet.io/hindi/gallery/movies/tubelight/tubelight_poster.jpg?w=160&dpr=2.6",
    ]
    
    let slideshow=document.getElementById("slideshow");
    let img=document.createElement("img");
    img.src=movieImages[0];
    slideshow.append(img);
    
    window.addEventListener("load", function () {
    //   
    slideshowFun(movieImages)
    
    });