let feautures = document.querySelector(".features");
let company = document.querySelector(".company");

let feauturesImg = document.querySelector(".feautures-img");
let companyImg = document.querySelector(".company-img");

let featuresBlog = document.querySelector(".features-blog");
let companyBlog = document.querySelector(".company-blog");

let closeMenu = document.querySelector(".icon-close-menu");
let openMenu = document.querySelector(".icon-menu");
let overlay = document.querySelector(".overlay")
let nav = document.querySelector("nav");

openMenu.addEventListener("click", () => {
    nav.classList.add("active");
    overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});


feautures.addEventListener("click", () => {
    changeArrow(feauturesImg);
    featuresBlog.classList.toggle("display-none");
});

company.addEventListener("click", () => {
    changeArrow(companyImg);
    companyBlog.classList.toggle("display-none");
});


function changeArrow(element) {
    if (element.classList.contains("down")) {
        element.classList.toggle("down");
        element.setAttribute("src", "./images/icon-arrow-up.svg");
    } else {
        element.classList.toggle("down");
        element.setAttribute("src", "./images/icon-arrow-down.svg");
    }
}