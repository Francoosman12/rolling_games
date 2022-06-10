//CATEGORIAS

let usuario = JSON.parse(localStorage.getItem("usuarios")) || [];
let juegos = JSON.parse(localStorage.getItem("juegos")) || [];
let generos = [
  "Action",
  "Adventure",
  "FPS",
  "RPG",
  "Shooter"
];

let categoryContainer=document.getElementById("categoriesContainer")
//Validacion de Login
//Contenedor de el listado de items del nav
let listContainer = document.getElementById("listaMenu");
if(usuario){
  if(usuario.rol === "admin"){
    let item = document.createElement("li");
    item.classList = "nav-item";
    let opcion = `<a class="nav-link botones active" data-bs-toggle="modal" data-bs-target="#exampleModal"
    href="#">Aministrar</a>`;
    item.innerHTML = opcion;
    listContainer.appendChild(item);
  }
}

//Generar h1 y div por cada genero
let cargarGames = () => {
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
  });
};

cargarGames();

function mostrarDetalles(e) {
  window.location.href = `./pages/gameDetails.html?gameID=${juego.id}`;
}

function mostrarGenero(e) {  
  console.log(e)
  window.location.href = `./pages/genre.html?genre=${generos[e]}`;
}
