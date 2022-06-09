let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function guardarUsuario() {
  let nombre = document.getElementById("textName").value;
  let apellido = document.getElementById("textSurname").value;
  let country = document.getElementById("country").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;

  //Agregar class

  //   let newUser = {
  //     id: usuarios.length + 1,
  //     nombre: nombre,
  //     apellido: apellido,
  //     country: country,
  //     email: email,
  //     password: password,
  //   };

  usuarios.push(new Usuario());
  //   let usuarioLS = JSON.stringify(usuarios);
  //   localStorage.setItem("usuarios", usuarioLS);

  //VALIDAR CONTRASEÑAS
  if (password !== password2) {
    return alert("Las contraseñas no coinciden.");
  }

  let validar = usuarios.find((user) => {
    return user.email === email;
  });

  if (validar) {
    return alert(
      "El correo ya esta registrado. Inicie sesion con su email y contraseña."
    );
  }
}

guardarUsuario();
// formRegistro.reset();

// }
