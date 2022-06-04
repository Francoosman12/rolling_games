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
    categoria: "accion",
    nombre: "Tomb Rider",
    descripcion: "",
    image: "/assets/img/5.jpg",
    video: "",
    destacado: "",
  },
  {
    id: "6",
    categoria: "aventura",
    nombre: "Uncharted 4",
    descripcion: "",
    image: "/assets/img/6.png",
    video: "",
    destacado: "",
  },
  {
    id: "7",
    categoria: "aventura",
    nombre: "Rayman",
    descripcion: "",
    image: "/assets/img/7.jpg",
    video: "",
    destacado: "",
  },
  {
    id: "8",
    categoria: "aventura",
    nombre: "Horizon",
    descripcion: "",
    image: "/assets/img/8.jpeg",
    video: "",
    destacado: "",
  },
  {
    id: "9",
    categoria: "aventura",
    nombre: "Watch Dogs 2",
    descripcion: "",
    image: "/assets/img/9.png",
    video: "",
    destacado: "",
  },
  {
    id: "10",
    categoria: "aventura",
    nombre: "Assassin's Creed",
    descripcion: "",
    image: "/assets/img/10.jpg",
    video: "",
    destacado: "",
  },
];

//CARRUSEL

//ACCION

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

//AVENTURA

const aventuraCarrousel = document.getElementById("aventura-carrousel");
const aventuraJuegos = juegos.filter((juego) => juego.categoria == "aventura");

aventuraJuegos.forEach((juego) => {
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
  aventuraCarrousel.appendChild(card);
});
