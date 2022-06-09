<<<<<<< matias
//CATEGORIAS
=======
// CAROUSEL CATEGORIAS SLIDER

let cardContainer = [...document.querySelectorAll(".card-container")];

//CARRUSEL CATEGORIAS

//LOCAL STORAGE
>>>>>>> dev

let juegos = JSON.parse(localStorage.getItem("juegos")) || [];
let generos = [
  "Action",
  "Adventure",
<<<<<<< matias
  "FPS",
  "RPG",
  "Shooter"
];

let categoryContainer=document.getElementById("categoriesContainer")
=======
  "Strategy",
];

//FIN LOCAL STORAGE

//CARD GENRE
//ACTION

let gameContainer = document.getElementById("action-carrousel");
let actionGames = juegos.filter((juego) => juego.genre.includes("Action"));
>>>>>>> dev

//Generar h1 y div por cada genero
let cargarGames = () => {
<<<<<<< matias
  generos.forEach((genero, index) => {
    console.log(genero)
    let h1=document.createElement('h1')
    h1.setAttribute("class","title justify-content-between")
    let categoryContent=document.createElement('div')
    categoryContent.setAttribute("id",`category${genero}`)
    categoryContent.setAttribute("class","row g-3")
    
    h1.innerHTML=`${genero}<button type="button" onclick="mostrarGenero(${index})" class="btn btn-danger">See more</button>`
    categoryContainer.appendChild(h1)
    categoryContainer.appendChild(categoryContent)

    //Filtrar el array de juegos para cada genero
    let gameGrid = juegos.filter((juego) => juego.genre.includes(genero));
    gameGrid = gameGrid.sort(() => Math.random() - 0.5).slice(0, 12);

    //Generar la grilla para cada genero
    gameGrid.forEach((juego, index) => {
      let generosComa = juego.genre.join(", ");
      let div=document.createElement('div')
      div.setAttribute("class","col-6 col-md-3 col-lg-2")  
      let cardContent=`<div class="card">
                         <a class="game" onclick="mostrarDetalles(${index})" href="./pages/gameDetails.html?gameID=${juego.id}">
                         <img src="${juego.poster}" alt="">
                         </a>                    
                         <div class="card-body p-1">
                         <h5 title="${juego.title}" class="card-title">${juego.title}</h5>
                         <span class="card-text genre">${generosComa}</p>
                         <span class="card-text">$${juego.price||59.99}</p>
                         </div>                        
                     </div>`
     div.innerHTML=cardContent
     let categoryContent2=document.getElementById(`category${genero}`)
     categoryContent2.appendChild(div)
    });
=======
  actionGames.forEach((juego, index) => {
    let genres = juego.genre.join(", ");
    let div = document.createElement("div");
    div.setAttribute("class", "col-6 col-md-3 col-lg-2");
    let cardContent = `<div class="card">
                    <a class="game" onclick="mostrarDetalles(${index})" href="./pages/gameDetails.html?gameID=${
      juego.id
    }">
                    <img src="${juego.poster}" alt="">
                    </a>                    
                    <div class="card-body p-1">
                    <h5 title="${juego.title}" class="card-title">${
      juego.title
    }</h5>
                    <span class="card-text genre">${genres}</p>
                    <span class="card-text">$${juego.price || 59.99}</p>
                    </div>
                    
                </div>`;
    div.innerHTML = cardContent;
    gameContainer.appendChild(div);
>>>>>>> dev
  });
};

cargarGames();

//FIN ACTION

//ADVENTURE

let gameContainerAdventure = document.getElementById("adventure-carrousel");
let adventureGames = juegos.filter((juego) =>
  juego.genre.includes("Adventure")
);

let cargarGamesAdventure = () => {
  adventureGames.forEach((juego, index) => {
    let genres = juego.genre.join(", ");
    let div = document.createElement("div");
    div.setAttribute("class", "col-6 col-md-3 col-lg-2");
    let cardContent = `<div class="card">
                    <a class="game" onclick="mostrarDetalles(${index})" href="./pages/gameDetails.html?gameID=${
      juego.id
    }">
                    <img src="${juego.poster}" alt="">
                    </a>                    
                    <div class="card-body p-1">
                    <h5 title="${juego.title}" class="card-title">${
      juego.title
    }</h5>
                    <span class="card-text genre">${genres}</p>
                    <span class="card-text">$${juego.price || 59.99}</p>
                    </div>
                    
                </div>`;
    div.innerHTML = cardContent;
    gameContainerAdventure.appendChild(div);
  });
};

cargarGamesAdventure();

//FIN ADVENTURE

//RPG
let gameContainerRpg = document.getElementById("rpg-carrousel");
let rpgGames = juegos.filter((juego) => juego.genre.includes("RPG"));

let cargarGamesRpg = () => {
  rpgGames.forEach((juego, index) => {
    let genres = juego.genre.join(", ");
    let div = document.createElement("div");
    div.setAttribute("class", "col-6 col-md-3 col-lg-2");
    let cardContent = `<div class="card">
                    <a class="game" onclick="mostrarDetalles(${index})" href="./pages/gameDetails.html?gameID=${
      juego.id
    }">
                    <img src="${juego.poster}" alt="">
                    </a>                    
                    <div class="card-body p-1">
                    <h5 title="${juego.title}" class="card-title">${
      juego.title
    }</h5>
                    <span class="card-text genre">${genres}</p>
                    <span class="card-text">$${juego.price || 59.99}</p>
                    </div>
                    
                </div>`;
    div.innerHTML = cardContent;
    gameContainerRpg.appendChild(div);
  });
};

cargarGamesRpg();

//FIN RPG

//STRATEGY
let gameContainerStrategy = document.getElementById("strategy-carrousel");
let strategyGames = juegos.filter((juego) => juego.genre.includes("Strategy"));

let cargarGamesStrategy = () => {
  strategyGames.forEach((juego, index) => {
    let genres = juego.genre.join(", ");
    let div = document.createElement("div");
    div.setAttribute("class", "col-6 col-md-3 col-lg-2");
    let cardContent = `<div class="card">
                    <a class="game" onclick="mostrarDetalles(${index})" href="./pages/gameDetails.html?gameID=${
      juego.id
    }">
                    <img src="${juego.poster}" alt="">
                    </a>                    
                    <div class="card-body p-1">
                    <h5 title="${juego.title}" class="card-title">${
      juego.title
    }</h5>
                    <span class="card-text genre">${genres}</p>
                    <span class="card-text">$${juego.price || 59.99}</p>
                    </div>
                    
                </div>`;
    div.innerHTML = cardContent;
    gameContainerStrategy.appendChild(div);
  });
};

cargarGamesStrategy();

//FIN STRATEGY

function mostrarDetalles(e) {
  window.location.href = `./pages/gameDetails.html?gameID=${juego.id}`;
}

function mostrarGenero(e) {  
  console.log(e)
  window.location.href = `./pages/genre.html?genre=${generos[e]}`;
}