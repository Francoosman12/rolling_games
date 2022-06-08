let juegos = JSON.parse(localStorage.getItem("juegos")) || [];

function rellenarCampos() {
  //Trae el gameID de url
  let url_string = window.location.href;
  let url = new URL(url_string);
  let selectedGame = url.searchParams.get("gameID");

  //Busca el juego por su ID
  let game = juegos.find((x) => x.id == selectedGame);

  document.title = `${game.title} on RollingGames`;
  document.getElementById("game_title").innerText = game.title;
  document.getElementById("description").innerText = game.description;
  document.querySelector(".library_poster").setAttribute("src", game.poster);
  document.querySelector(".library_hero_img").setAttribute("src", game.banner);
  document.getElementById("video1").setAttribute("src", game.video);
  document.getElementById("screenshot1").setAttribute("src", game.screenshot1);
  document.getElementById("screenshot2").setAttribute("src", game.screenshot2);
  document.getElementById("screenshot3").setAttribute("src", game.screenshot3);
  document.getElementById("thumbnail1").setAttribute("src", game.screenshot1);
  document.getElementById("thumbnail2").setAttribute("src", game.screenshot2);
  document.getElementById("thumbnail3").setAttribute("src", game.screenshot3);
}

rellenarCampos();
