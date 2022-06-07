let juegos = JSON.parse(localStorage.getItem("juegos")) || [];

const cargarTabla = () => {
  let trHTML = "";
  juegos.map(function (juego, index) {
    trHTML += "<tr>";
    trHTML += `<td>${juego.id}</td>`;
    trHTML += `<td><a onclick="mostrarDetalles(${index})" href="../pages/gameDetails.html"><img width="32px" src="${juego.icon}" class="avatar"></a></td>`;
    trHTML += `<td><a class="gameLink" onclick="mostrarDetalles(${index})" href="../pages/gameDetails.html">${juego.title}</a></td>`;
    trHTML += `<td>${juego.release_date}</td>`;
    trHTML += `<td>${juego.developer}</td>`;
    trHTML += `<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('${juego.id}')">Edit</button>`;
    trHTML += `<button type="button" class="btn btn-outline-danger" onclick="userDelete('${juego.id}')">Del</button></td>`;
    trHTML += "</tr>";
    document.getElementById("mytable").innerHTML = trHTML;
  });
};

cargarTabla();

function mostrarDetalles(e){
  let selectedGame = e
  event.preventDefault()
  console.log(e)
  localStorage.setItem("selectedGame", JSON.stringify(selectedGame));
  window.location.href = "../pages/gameDetails.html";
}