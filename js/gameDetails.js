let juegos = JSON.parse(localStorage.getItem("juegos")) || [];

class Juego {
    constructor(id, titulo, descripcion, poster, banner, screenshot1, screenshot2, screenshot3, screenshot4) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.poster = poster;
      this.banner = banner;
      this.screenshot1 = screenshot1;
      this.screenshot2 = screenshot2;
      this.screenshot3 = screenshot3;
      this.screenshot4 = screenshot4;      
    }
  }

function rellenarCampos(){
    document.getElementById("game_title").innerText=juegos[0].titulo
    document.getElementById("description").innerText=juegos[0].descripcion
    document.querySelector(".library_poster").setAttribute("src", juegos[0].poster)
    document.querySelector(".library_hero_img").setAttribute("src", juegos[0].banner)
}

