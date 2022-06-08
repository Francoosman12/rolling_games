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
let actionGames = juegos.filter((juego) => juego.genre.includes("Action"));

let cargarGames = () => {
  actionGames.forEach((juego, index) => {
    let genres = (juego.genre).join(', ')
        let div=document.createElement('div')
        div.setAttribute("class","col-6 col-md-3 col-lg-2")        
        let cardContent=`<div class="card">
                    <a class="game" onclick="mostrarDetalles(${index})" href="./pages/gameDetails.html?gameID=${juego.id}">
                    <img src="${juego.poster}" alt="">
                    </a>                    
                    <div class="card-body p-1">
                    <h5 title="${juego.title}" class="card-title">${juego.title}</h5>
                    <span class="card-text genre">${genres}</p>
                    <span class="card-text">$${juego.price||59.99}</p>
                    </div>
                    
                </div>`
        div.innerHTML=cardContent
        gameContainer.appendChild(div)
  });
};

cargarGames();

function mostrarDetalles(e) {
  location.replace = `./pages/gameDetails.html?gameID=${juego.id}`;
}
