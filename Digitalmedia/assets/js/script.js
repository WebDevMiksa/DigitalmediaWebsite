'use strict';

/* Add event on multiple elements */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
}


/* Dropdown menu */

const navbar = document.querySelector("[data-navbar]");
const toggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");
const header = document.querySelector(".header");

const toggleNavbar = () => {
    navbar.classList.toggle("active");
    toggleBtn.classList.toggle("active");
    header.classList.toggle("active");
}

addEventOnElements([toggleBtn, overlay], "click", toggleNavbar);



/* Parallax effect */

const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event => {
    for (let i = 0, len = parallaxElements.length; i < len; i++) {
        const movementX = (event.clientX / window.innerWidth) * Number(parallaxElements[i].dataset.parallaxSpeed);
        const movementY = (event.clientY / window.innerHeight) * Number(parallaxElements[i].dataset.parallaxSpeed);

        parallaxElements[i].animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, { duration: 500, fill: "forwards" });
    }
});

/* Tilt effect */

const tiltElements = document.querySelectorAll("[data-tilt]");

const initTilt = function (event) {

  /** get tilt element center position */
  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
  const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

  this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;

}

addEventOnElements(tiltElements, "mousemove", initTilt);

addEventOnElements(tiltElements, "mouseout", function () {
  this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

