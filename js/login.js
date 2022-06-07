let user = JSON.parse(localStorage.getItem('usuarios')) || [];
function handleSubmit(e){
    e.preventDefault()
    let emailLogin = document.getElementById('emailLogin').value 
    let pass = document.getElementById('passLogin').value

}

document.getElementById(form-login).addEventListener('submit',handleSubmit)