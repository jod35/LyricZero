const nav_bar = document.querySelector("header");
const nav_bar_items = document.getElementsByClassName("nav-bar-item");
const hamburger = document.querySelector(".open-btn");

window.onscroll = function () {
  shrinkOnScroll();
};

function shrinkOnScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav_bar.style.padding = "10px";
    nav_bar.style.backgroundColor = "dodgerblue";
    nav_bar.style.color = "white";
    hamburger.style.color = "color";
    hamburger.style.fontSize = "30px";

    for (let i = 0; i < nav_bar_items.length; i++) {
      nav_bar_items[i].style.color = "white";
      //   nav_bar_items[i].style.fontWeight = "bold";
    }
  } else {
    nav_bar.style.color = "dodgerblue";
    nav_bar.style.backgroundColor = "white";
    hamburger.style.color = "dodgerblue";
    hamburger.style.fontSize = "30px";
    nav_bar.style.padding = "20px";

    for (let i = 0; i < nav_bar_items.length; i++) {
      nav_bar_items[i].style.color = "dodgerblue";
      //   nav_bar_items[i].style.fontWeight = "bold";
    }
  }
}

hamburger.addEventListener("click", openNav);
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
