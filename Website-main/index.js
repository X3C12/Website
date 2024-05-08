const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () =>{
    wrapper.classList.add('active')
}

loginLink.onclick = () =>{
    wrapper.classList.remove('active')
}

btnpopup.onclick = () =>{
    wrapper.classList.add('active-popup')
}

iconClose.onclick = () =>{
    wrapper.classList.remove('active-popup')
    wrapper.classList.remove('active')
}