const nav_bar = document.querySelector("header");
const nav_bar_items = document.getElementsByClassName("nav-bar-item");

const nav_items = document.querySelectorAll("nav-item");

window.onscroll = function () {
  shrinkOnScroll();
};

function shrinkOnScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav_bar.style.padding = "10px";
    nav_bar.style.top = "20px";
  } else {
    nav_bar.style.color = "dodgerblue";
    nav_bar.style.backgroundColor = "white";

    nav_bar.style.padding = "20px";
  }
}
