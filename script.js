let menu = document.querySelector('#menuBurger #menuIcon ');
let dropMenu = document.querySelector('#dropMenu');

menu.addEventListener('click', () => {
  dropMenu.classList.toggle('showIt');
  menu.classList.toggle('bi-x');
 
});
window.addEventListener("scroll", () => {
  let nav = document.querySelector("#nav");
  nav.classList.toggle("newNav", window.scrollY > 500);
});

