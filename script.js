// PARTIE CAROUSEL DIAPO
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



       let j = 3000;
       for(let i = 1; i < 60; i++){
           setTimeout(function (){
               if (slideIndex === 6){
                   slideIndex = 1;
               }else{
                   showSlides(slideIndex++);
               }
           }, j);
           j += 3000;
       }



// PARTIE NAVBAR
function OpenClose(element, secondElement, container, section, cible) {
    this.element = document.getElementsByClassName(element)[0];
    this.secondElement = document.getElementsByClassName(secondElement)[0];
    let newCible = document.getElementsByClassName(cible)[0];
    let newContainer = document.getElementsByClassName(container)[0];
    let newSection = document.getElementById(section);
    let boolean = 0; //0 = open et 1 = close;
    this.newCible = newCible;
    this.newContainer = newContainer;

    this.element.addEventListener("click", function () {
        block();
        if (boolean === 0) {
            boolean = 1;
        } else {
            boolean = 0;
        }
    });
    this.secondElement.addEventListener("click", function () {
        block();
        if (boolean === 0) {
            boolean = 1;
        } else {
            boolean = 0;
        }
    });


    function block() {
        if (boolean === 0) {
            newCible.style.display = "block";
            newContainer.style.transition = "all .1s ease-in-out";
            if (window.matchMedia("(max-width: 745px)").matches) {
                newContainer.style.marginBottom = "114px";
                newSection.style.height = "520px";
                newSection.style.transition = "all .2s ease-in-out";
            }
        } else {
            newCible.style.display = "none";
            newContainer.style.marginBottom = "0";
            if (window.matchMedia("(max-width: 745px)").matches) {
                newSection.style.height = "420px";
                newSection.style.transition = "all .2s ease-in-out";
            }
        }
    }

    this.getDisplay = function () {
        return newCible.style.display;
    }
}

let book = new OpenClose("first__book", "first__book--chevron", "sub__menu--book", "navbar", "book");
let destinations = new OpenClose("first__destinations", "first__destinations--chevron", "sub__menu--destinations", "navbar", "pays");

function unsetDestination() {
    if (book.getDisplay() === "block" && destinations.getDisplay() === "block") {
        destinations.newCible.style.display = "none";
        destinations.newContainer.style.marginBottom = "0";
    }
}

function unsetBook() {
    if (destinations.getDisplay() === "block" && book.getDisplay() === "block") {
        book.newCible.style.display = "none";
        book.newContainer.style.marginBottom = "0";
    }
}

book.secondElement.onclick = function () {
    unsetDestination()
};
book.element.onclick = function () {
    unsetDestination()
};
destinations.secondElement.onclick = function () {
    unsetBook()
};
destinations.element.onclick = function () {
    unsetBook()
};



