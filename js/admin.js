let juegos = JSON.parse(localStorage.getItem("juegos")) || [];

const cargarTabla = () => {
  let trHTML = "";
  juegos.map(function (juego, index) {
    trHTML += "<tr>";
    trHTML += `<td>${juego.id}</td>`;
    trHTML += `<td><a onclick="mostrarDetalles(${index})" href="../pages/gameDetails.html?gameID=${juego.id}"><img width="100px" src="${juego.icon}" class="avatar"></a></td>`;
    trHTML += `<td><a class="gameLink" onclick="mostrarDetalles(${index})" href="../pages/gameDetails.html?gameID=${juego.id}">${juego.title}</a></td>`;
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
  location.replace = `../pages/gameDetails.html?gameID=${juego.id}`;
}