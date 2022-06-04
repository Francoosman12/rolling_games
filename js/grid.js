let generos = ["Action","Horror","Fighting","Action RPG","RPG","FPS","Flight","Shooter"]


// let juegos = JSON.parse(localStorage.getItem("juegos")) || [];
let gameContainer = document.getElementById("gameContainer")

const loadGames=()=>{    
    juegos.map(function(juego,index){
        let generos = (juego.genre).join(', ')
        let div=document.createElement('div')
        div.setAttribute("class","col-6 col-md-3 col-lg-2")        
        let cardContent=`<div class="card border-0">
                    <a onclick="mostrarDetalles(${index})" href="../pages/gameDetails.html">
                    <img src="${juego.poster}" alt="">
                    </a>
                    <div class="card-body p-1"></div>
                        <h5 class="card-title">${juego.title}</h5>
                        <p class="card-text genre">${generos}</p>
                        <p class="card-text">$${juego.price||59.99}</p>
                </div>`
        div.innerHTML=cardContent
        gameContainer.appendChild(div)
    })
}

loadGames()

function mostrarDetalles(e){
  let selectedGame = e
  event.preventDefault()
  console.log(e)
  localStorage.setItem("selectedGame", JSON.stringify(selectedGame));
  window.location.href = "../pages/gameDetails.html";
}