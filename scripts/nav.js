const mobileNav = document.getElementById("nav--mobile");
const mobileOpen = document.getElementById("mobile-open");
const mobileClose = document.getElementById("mobile-close");
const backdrop = document.getElementById("backdrop");
const focusableTags =
  'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

function openNav() {
  mobileNav.classList.add("is-active");
  backdrop.classList.add("is-active");

  requestAnimationFrame(() => {
    mobileNav.classList.add("is-open");
    backdrop.classList.add("is-open");
  });

  setFocusTrap();
}

function closeNav() {
  mobileNav.classList.remove("is-open");

  mobileNav.addEventListener("transitionend", function handler(e) {
    if (e.propertyName === "width") {
      mobileNav.classList.remove("is-active");

      mobileNav.removeEventListener("transitionend", handler);
    }
  });

  backdrop.classList.remove("is-open");

  backdrop.addEventListener("transitionend", function handler(e) {
    if (e.propertyName === "background-color") {
      backdrop.classList.remove("is-active");

      backdrop.removeEventListener("transitionend", handler);
    }
  });
}

function setFocusTrap() {
  let focusableElements = Array.from(mobileNav.querySelectorAll(focusableTags));
  let currentIndex = 0;
  let arrayLast = focusableElements.length - 1;

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

mobileOpen.addEventListener("click", openNav);

mobileClose.addEventListener("click", closeNav);
window.addEventListener("resize", closeNav);
backdrop.addEventListener("click", closeNav);
