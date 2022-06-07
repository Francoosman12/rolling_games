// CAROUSEL CATEGORIAS SLIDER

let cardContainer = [...document.querySelectorAll(".card-container")];

//CARRUSEL CATEGORIAS

//ACCION

let juegos = JSON.parse(localStorage.getItem("juegos")) || [];
let generos = [
  "Action",
  "Horror",
  "Fighting",
  "Action RPG",
  "RPG",
  "FPS",
  "Flight",
  "Shooter",
  "Adventure",
];

let gameContainer = document.getElementById("action-carrousel");
let actionGames = juegos.filter((juego) => juego.genre == "Action");

let cargarGames = () => {
  actionGames.forEach((juego, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "col col-md col-lg");
    let cardContent = `<div class="card border">
                    <a class="game" onclick="mostrarDetalles(${index})" href="../pages/gameDetails.html">
                    <img src="${juego.poster}" alt="">
                    </a>                    
                    <div class="card-body p-1">
                    <h5 title="${juego.title}" class="card-title">${
      juego.title
    }</h5>
                    <span class="card-text genre">${juego.genre}</p>
                    <span class="card-text">$${juego.price || 59.99}</p>
                    </div>
                  </div>`;
    div.innerHTML = cardContent;
    gameContainer.appendChild(div);
  });
};

cargarGames();

function mostrarDetalles(e) {
  let selectedGame = e;
  event.preventDefault();
  console.log(e);
  localStorage.setItem("selectedGame", JSON.stringify(selectedGame));
  window.location.href = "../pages/gameDetails.html";
}
