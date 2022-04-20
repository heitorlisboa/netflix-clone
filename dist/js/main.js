// Header scroll
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  const className = "header--dark";

  if (window.scrollY > 40) header.classList.add(className);
  else header.classList.remove(className);
});

// Mobile nav toggle
const nav = document.querySelector("[data-nav]");
const navToggleButton = document.querySelector("[data-mobile-nav-toggle]");
navToggleButton.addEventListener("click", () => {
  const visible = nav.getAttribute("data-visible") === "true";

  if (visible) {
    // First run the transition
    nav.setAttribute("data-closing", "");
    nav.addEventListener(
      "animationend",
      () => {
        // Then hide the navigation
        nav.setAttribute("data-visible", false);
        navToggleButton.setAttribute("aria-expanded", false);
        // Remove the transition
        nav.removeAttribute("data-closing");
        // Enable scrolling
        document.body.style.removeProperty("overflow-y");
      },
      { once: true }
    );
  } else {
    // Make the navigation visible
    nav.setAttribute("data-visible", true);
    navToggleButton.setAttribute("aria-expanded", true);
    // Disable the scrolling
    document.body.style.overflowY = "hidden";
  }
});

// Slider
const slidesConfig = {
  origin: "center",
  spacing: 8, // .5rem
};

const slider = new KeenSlider("[data-slider]", {
  loop: true,
  slides: {
    ...slidesConfig,
    perView: 2.5,
  },
  breakpoints: {
    "(min-width: 40rem)": {
      slides: {
        ...slidesConfig,
        perView: 3.5,
      },
    },
    "(min-width: 60rem)": {
      slides: {
        ...slidesConfig,
        perView: 4.5,
      },
    },
  },
});
