const banner = document.querySelector(".banner");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const menuBtn = document.createElement("div");
const triangle = document.createElement("div");

function resize() {
  if (
    // window.resizeTo(window.screen.availWidth <= 375, window.screen.availHeight)
    // ||
    window.screen.availWidth <= 375
  ) {
    menu.classList.add("hidden");
    menuBtn.classList.add("btn-menu");
    triangle.classList.add("triangle");

    banner.appendChild(menuBtn);

    menuBtn.addEventListener("click", function clickBtn() {
      menu.classList.toggle("hidden");
      nav.appendChild(triangle);
    });
  } else {
    banner.removeChild(banner.lastChild);
    nav.removeChild(nav.lastChild);
  }
}

resize();
