let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

let portfolioSlideIndex = 0;
showPortfolioSlides();

function showPortfolioSlides() {
    let portfolioSlides = document.getElementsByClassName("portfolio-slide");
    for (let i = 0; i < portfolioSlides.length; i++) {
        portfolioSlides[i].style.display = "none";
    }
    portfolioSlideIndex++;
    if (portfolioSlideIndex > portfolioSlides.length) {portfolioSlideIndex = 1}
    portfolioSlides[portfolioSlideIndex-1].style.display = "block";
    setTimeout(showPortfolioSlides, 3000); // Change image every 3 seconds
}

const toggleSwitch = document.querySelector('#themeToggle');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
