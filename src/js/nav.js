/* Active Item */

const navLinks = document.querySelectorAll(".nav-link");

(function addActiveClass() {
  const currentUrl = location.href;
  for (const link of navLinks) {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  }
}());

/* Mobile Nav */

const navIcon = document.querySelector(".nav-icon");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

navIcon.addEventListener("click", mobileMenu);

function mobileMenu() {
  navIcon.classList.toggle(["active"]);
  navMenu.classList.toggle("active");
  body.classList.toggle("active");
}

navLinks.forEach((n) => n.addEventListener, "click", closeMenu);

function closeMenu() {
  navIcon.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("active");
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const navBar = document.querySelector(".navbar");
var prevScrollPos = window.pageYOffset;
window.onscroll = scrollShowNav;
function scrollShowNav() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-110px";
  }
  prevScrollPos = currentScrollPos;
}
