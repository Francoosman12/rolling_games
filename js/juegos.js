let juegos = [
  {
    id: "1",
    categoria: "accion",
    nombre: "Deflector",
    descripcion: "",
    image: "/assets/img/1.webp",
    video: "",
    destacado: "",
  },
  {
    id: "2",
    categoria: "accion",
    nombre: "Evil Dead",
    descripcion: "",
    image: "/assets/img/2.jpg",
    video: "",
    destacado: "",
  },
  {
    id: "3",
    categoria: "accion",
    nombre: "Armored Warfare",
    descripcion: "",
    image: "/assets/img/3.jpg",
    video: "",
    destacado: "",
  },
  {
    id: "4",
    categoria: "accion",
    nombre: "Star Wars Lego",
    descripcion: "",
    image: "/assets/img/4.jpg",
    video: "",
    destacado: "",
  },
  {
    id: "5",
    categoria: "",
    nombre: "",
    descripcion: "",
    image: "",
    video: "",
    destacado: "",
  },
];

//CARRUSEL

const accionCarrousel = document.getElementById("accion-carrousel");
const accionJuegos = juegos.filter((juego) => juego.categoria == "accion");

accionJuegos.forEach((juego) => {
  let card = document.createElement("div");
  card.innerHTML = `
    <div class='card' id=${juego.id}>
    <img src=${juego.image} class="card-img" alt="#">
    <div class= "card-body">
         <h2 class= "juego-tittle">${juego.nombre}</h2>
         <button class="verJuego-btn"><a href=/detalle.html#${juego.id}>Ver</a></button>
    </div>
    </div>
    `;
  accionCarrousel.appendChild(card);
});
