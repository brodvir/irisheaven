/* menu */

let menuIcon = document.getElementById("icon_menu");
let navbar = document.getElementById("navbar");
menuIcon.addEventListener("click", function(){
    navbar.classList.toggle("active")
}, false) 

/* gallery */


let slides = document.getElementsByClassName("slides");

var slideIndex = 1;
var captionArray = ["Horse riding", "Animal feeding", "Hikes", "Cheese Tasting" ]

showSlides(slideIndex);


function showSlides(n) {
    let i;
    let captionText = document.getElementById("caption");
    if (n > slides.length){
        slideIndex = 1;
        console.log("convierte a 1");
    }
    if (n < 1) {
        slideIndex = slides.length
        console.log("convierte a 4");
    }

    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log("slideindex dentro del for " + slideIndex)
    }
    slides[slideIndex-1].style.display = "block";
    captionText.innerHTML = captionArray[slideIndex-1];
}



let prev_btn = document.getElementById("prev");
let next_btn = document.getElementById("next");

prev_btn.addEventListener("click", function(){
    slideIndex--;
    showSlides(slideIndex);
} , false) 
next_btn.addEventListener("click", function(){
    slideIndex++;
    showSlides(slideIndex);
} , false) 






