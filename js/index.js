// const navToggle = document.querySelector(".nav-toggle");
// const navMenu = document.querySelector(".nav-menu");

// navToggle.addEventListener("click", () => {
//   navMenu.classList.toggle("nav-menu_visible");

//   if (navMenu.classList.contains("nav-menu_visible")) {
//     navToggle.setAttribute("aria-label", "Cerrar menú");
//   } else {
//     navToggle.setAttribute("aria-label", "Abrir menú");
//   }
// });

// function bajar() {
//   const header = document.getElementById("header");
//   header.classList.toggle("stick", window.scrollY > 0);
// }

// window.addEventListener("scroll", bajar);

// CAROUSEL CATEGORIAS SLIDER

let cardContainer = [...document.querySelectorAll(".card-container")];
let izquierdaBoton = [...document.querySelectorAll(".flecha-izq")];
let derechaBoton = [...document.querySelectorAll(".flecha-der")];

cardContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  derechaBoton[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  izquierdaBoton[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
