const navOpen = document.getElementById("mobile-open");
const navClose = document.getElementById("mobile-close");
const mobileNav = document.getElementById("nav--mobile");
const backDrop = document.getElementById("backdrop");

function openNav() {
  // Toggles mobile nav bar
  mobileNav.classList.add("is-active");
  backDrop.classList.add("is-active");

  requestAnimationFrame(() => {
    mobileNav.classList.add("is-open");
    backDrop.classList.add("is-open");
  });
}

function closeNav() {
  // Toggles mobile nav bar
  mobileNav.classList.remove("is-open");

  mobileNav.addEventListener("transitionend", function handler(e) {
    if (e.propertyName === "width") {
      mobileNav.classList.remove("is-active");

      mobileNav.removeEventListener("transitionend", handler);
    }
  });

  backDrop.classList.remove("is-open");

  backDrop.addEventListener("transitionend", function handler(e) {
    if (e.propertyName === "background-color") {
      backDrop.classList.remove("is-active");

      backDrop.removeEventListener("transitionend", handler);
    }
  });
}

navOpen.addEventListener("click", openNav);

window.addEventListener("resize", closeNav);
navClose.addEventListener("click", closeNav);
backDrop.addEventListener("click", closeNav);
