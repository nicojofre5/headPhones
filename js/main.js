//Inicializador de AOS animaciones (armadas)
AOS.init();

let menu = document.querySelector("#menu");
let menu_bar = document.querySelector("#menu-bar");

//Evento click de boton hambuerguer

menu_bar.addEventListener('click', () => {
   menu.classList.toggle("menu-toggle"); 
})

