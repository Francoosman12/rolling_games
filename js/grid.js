let juegos = JSON.parse(localStorage.getItem("juegos")) || [];

let gameContainer = document.getElementById("gameContainer")

const loadGames=()=>{   
    juegos.map(function(juego,index){
        if (juego.published===true){
            let genres = (juego.genre).join(', ')
            let div=document.createElement('div')
            div.setAttribute("class","col-6 col-md-3 col-lg-2")        
            let cardContent=`<div class="card border-0">
                        <a class="game" onclick="mostrarDetalles(${index})" href="../pages/gameDetails.html?gameID=${juego.id}">
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
        }        
    })
}

loadGames()

function mostrarDetalles(e){    
    location.replace = `../pages/gameDetails.html?gameID=${juego.id}`;
  }
  