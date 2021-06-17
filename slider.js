var indexSlider = 1;
slidesZeigen(indexSlider);

function plusSlide(n) {
    slidesZeigen(indexSlider += n);
}

function slideAktuell(n) {
    slidesZeigen(indexSlider = n);
}

function slidesZeigen(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var linien = document.getElementsByClassName("linien");
    if (n > slides.length) { indexSlider = 1 }
    if (n < 1) { indexSlider = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < linien.length; i++) {
        linien[i].className = linien[i].className.replace("active", "");
    }
    slides[indexSlider - 1].style.display = "block";
    linien[indexSlider - 1].className += " active";
}