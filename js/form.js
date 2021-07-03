const showPasswordBtn = document.querySelector('li.show-password');
const passwordInput = document.querySelector('form.form2 input[type="password"]');
const hidePasswordBtn = document.querySelector('li.hide-password');
hidePasswordBtn.style = "display:none;"

showPasswordBtn.addEventListener('click', showPassword);
hidePasswordBtn.addEventListener('click', hidePassword);

function hidePassword(){
    passwordInput.type = 'password';
    showPasswordBtn.style = "display:block;";
    hidePasswordBtn.style = "display:none;"
}

function showPassword(){
    passwordInput.type = 'text';
    hidePasswordBtn.style = "display:block;"
    showPasswordBtn.style = "display:none;"
}

