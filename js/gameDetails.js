// let juegos = JSON.parse(localStorage.getItem("juegos")) || [];

// class Juego {
//     constructor(id, titulo, descripcion, poster, banner, screenshot1, screenshot2, screenshot3, screenshot4) {
//       this.id = id;
//       this.titulo = titulo;
//       this.descripcion = descripcion;
//       this.poster = poster;
//       this.banner = banner;
//       this.screenshot1 = screenshot1;
//       this.screenshot2 = screenshot2;
//       this.screenshot3 = screenshot3;
//       this.screenshot4 = screenshot4;      
//     }
//   }

function rellenarCampos(){
    let selectedGame = JSON.parse(localStorage.getItem("selectedGame")) || [];
    let game = juegos.find(x=>x.id == selectedGame+1)
    // console.log(game)
    document.getElementById("game_title").innerText=game.title
    document.getElementById("description").innerText=game.description
    document.querySelector(".library_poster").setAttribute("src", game.poster)
    document.querySelector(".library_hero_img").setAttribute("src", game.banner)
    document.getElementById("video1").setAttribute("src", game.video)
    document.getElementById("screenshot1").setAttribute("src", game.screenshot1)
    document.getElementById("screenshot2").setAttribute("src", game.screenshot2)
    document.getElementById("screenshot3").setAttribute("src", game.screenshot3)
    document.getElementById("thumbnail1").setAttribute("src", game.screenshot1)
    document.getElementById("thumbnail2").setAttribute("src", game.screenshot2)
    document.getElementById("thumbnail3").setAttribute("src", game.screenshot3)
    
    
}

rellenarCampos()

