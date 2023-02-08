const banner = document.querySelector(".banner");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

function resize() {
  if (window.screen.availWidth <= 375) {
    const menuBtn = document.createElement("div");
    const triangle = document.createElement("div");

    menu.classList.add("hidden");
    menuBtn.classList.add("btn-menu");
    triangle.classList.add("triangle");

    banner.appendChild(menuBtn);

    menuBtn.addEventListener("click", function clickBtn() {
      menu.classList.toggle("hidden");
      nav.appendChild(triangle);
    });
  }
}

resize();
