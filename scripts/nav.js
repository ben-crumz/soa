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

  setFocusTrap();
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

const focusableTags =
  'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

function setFocusTrap() {
  console.log("test");

  let focusableElements = Array.from(mobileNav.querySelectorAll(focusableTags));
  let currentIndex = 0;
  let arrayLast = focusableElements.length - 1;

  focusableElements[currentIndex].focus();

  mobileNav.addEventListener("keydown", (e) => {
    let keyPressed = e.key;

    if (keyPressed === "ArrowUp" || (e.shiftKey && keyPressed === "Tab")) {
      e.preventDefault();

      if (currentIndex == 0) {
        currentIndex = arrayLast;
        focusableElements[currentIndex].focus();
      } else {
        currentIndex = currentIndex - 1;
        focusableElements[currentIndex].focus();
      }
      /*console.log(currentIndex);*/
    }

    if (keyPressed === "ArrowDown" || (!e.shiftKey && keyPressed === "Tab")) {
      e.preventDefault();

      if (currentIndex == arrayLast) {
        currentIndex = 0;
        focusableElements[currentIndex].focus();
      } else {
        currentIndex = currentIndex + 1;
        focusableElements[currentIndex].focus();
      }
      /*console.log(currentIndex);*/
    }

    if (keyPressed === "Escape") {
      e.preventDefault();
      /*console.log(currentIndex);*/
      closeNav();
    }

    if (keyPressed === "Enter") {
      /*console.log(currentIndex);*/
      closeNav();
    }
  });
}
