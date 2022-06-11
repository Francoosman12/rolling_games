let usuario = JSON.parse(localStorage.getItem("usuarios"));
function handleSubmit(e){
    e.preventDefault();
    let emailLogin = document.querySelector('#emailLogin').value;
    let pass = document.querySelector('#passLogin').value;
    //buscamos el correo del usuario
    let validacion = usuario.find((user)=>{
      return user.email === emailLogin ;
    })
    if (validacion){
            if(validacion.password === pass){
                //guardamos la sesion del usuario
                // var modal=document.getElementById("modal");
                // modal.style.display="none";
                localStorage.setItem('user',JSON.stringify(validacion));
                
                let listContainer = document.getElementById('listaMenu');
                //reemplazar
                // let login = document.getElementById('loginNav');
                // let registro = document.getElementById('regNav');
                // console.log(login);
                // console.log(registro);
                // document.ul.removeChild(login);
                // document.ul.removeChild(registro);

                // let btnUser = document.createElement('li');
                // btnUser.classList = "nav-item";
                // let optionUser = `<a class="nav-link botones active"
                // href="#">Hola ${validacion.nombre}</a>`;
                // btnUser.innerHTML = optionUser;
                // listContainer.appendChild(btnUser);

                let btnUser = document.createElement('li');
                btnUser.classList = "nav-item dropdown";
                let optionUser = `<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                hola ${validacion.nombre}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>`;
                btnUser.innerHTML = optionUser;
                listContainer.appendChild(btnUser);

                // document.body.removeChild(imagen);
                if(validacion){
                    if(validacion.rol === "admin"){
                      let btnAdmin = document.createElement("li");
                      btnAdmin.classList = "nav-item";
                      let opcionAdmin = `<a class="nav-link botones active"
                      href="./pages/admin.html">Aministrar</a>`;
                      btnAdmin.innerHTML = opcionAdmin;
                      listContainer.appendChild(btnAdmin);
                    }
                  }
                  
                // location.replace('../index.html');
            }else{
                alert('El correo o password son incorrectos');
            }
        }else{
            alert('El correo o password son incorrectos');
        }
}

document.getElementById('form-login').addEventListener('submit',handleSubmit)