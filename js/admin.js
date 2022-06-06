const cargarTabla = () => {
  let trHTML = "";
  juegos.map(function (juego, index) {
    trHTML += "<tr>";
    trHTML += `<td>${juego.id}</td>`;
    trHTML += `<td><img width="50px" src="${juego.icon}" class="avatar"></td>`;
    trHTML += `<td>${juego.title}</td>`;
    trHTML += `<td>${juego.release_date}</td>`;
    trHTML += `<td>${juego.developer}</td>`;
    trHTML += `<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('${juego.id}')">Edit</button>`;
    trHTML += `<button type="button" class="btn btn-outline-danger" onclick="userDelete('${juego.id}')">Del</button></td>`;
    trHTML += "</tr>";
    document.getElementById("mytable").innerHTML = trHTML;
  });
};

cargarTabla();
