let destacados = JSON.parse(localStorage.getItem("destacados")) || [];
let juegoDestacado = document.getElementById("juegoDestacado");

let lista_gamesDestacados = ["1"];

console.log(destacados);

let cargarDestacado = () => {
  destacados.map((gameDestacado, index) => {
    console.log(gameDestacado);
    let div = document.createElement("div");
    let carrouselContent = `
    <div>
    <h1 class="title-carrusel">Destacados</h1>
    </div>
      <img src="${gameDestacado.banner}" class="imagen-carrusel" alt=""></img>
      <div class="descripcion-carrusel">
      <div class="d-flex justify-content-between">
      <h1>${gameDestacado.title}</h1>
      <div class="bg-danger icono-destacado animate__animated animate__zoomIn">⭐<span>Juego Destacado</span></div>
      </div>
      <h3>Género: ${gameDestacado.genre}</h3>
      <p>Description: ${gameDestacado.description}</p>
      <button type="button" class="btn btn-danger btn-sm" onclick="mostrarDetalles(${index})" href="../pages/gameDetails.html?gameID=${gameDestacado.id}">See</button>
      </div>
      
      </div>`;

    div.innerHTML = carrouselContent;
    juegoDestacado.appendChild(div);
  });
};

cargarDestacado();
function mostrarDetalles(e) {
  window.location.href = `../pages/gameDetails.html?gameID=${juegoDestacado.id}`;
}
