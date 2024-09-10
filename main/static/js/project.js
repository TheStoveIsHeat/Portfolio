let slideIndex = 1;
showSlides(slideIndex)  //calling immediately to only show starting slide 

//incrementing slide index and displaying 
function moveSlide(n){
    slideIndex += n
    showSlides(slideIndex)
}

function showSlides(n){
    //getting all slides 
    let slides = document.getElementsByClassName("carousel-item")
    //checking n to go backwards or forwards 
    if(n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    //looping and making all of the slides hidden except for the current slide 
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "flex"   //displaying slide 
}