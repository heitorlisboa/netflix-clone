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
