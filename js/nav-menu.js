const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.nav__menu');
const close = document.querySelector('.close');
const header = document.querySelector('header');

hamburger.addEventListener('click',()=>{
    navMenu.style.display="block";
    navMenu.style.position="fixed";
})

close.addEventListener('click',()=>{
    navMenu.style.display="none";
    navMenu.style.position="absolute";
});