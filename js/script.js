

document.addEventListener("DOMContentLoaded", function() {
    const intro = document.getElementById("intro");

    // Hide the section after 5 seconds
    setTimeout(function() {
        intro.classList.add("hidden");
    }, 3000);
});

const btnNavEl = document.querySelector(".btn__mobile");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});