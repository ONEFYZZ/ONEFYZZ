window.onload = function() {
    alert("Welcome to My Business Website!");
};

let backToTop = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
