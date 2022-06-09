let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
function handleSubmit(e){
    e.preventDefault()
    let emailLogin = document.getElementById('emailLogin').value 
    let pass = document.getElementById('passLogin').value

    let validacion = usuarios.find((user)=>{
      return user.email === emailLogin  
    })
    if (validacion){
            if(validacion.password === pass){
                //guardamos la sesion del usuario
                localStorage.setItem('user',JSON.stringify(validacion))
                location.replace('#');
            }else{
                alert('El correo o password son incorrectos')
            }
        }else{
            alert('El correo o password son incorrectos')
        }
}

document.getElementById('form-login').addEventListener('submit',handleSubmit)