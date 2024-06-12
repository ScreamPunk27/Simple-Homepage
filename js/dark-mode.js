const homepage = document.querySelector('.homepage');
const body = document.querySelector('body');
const logo = document.getElementById('logo');
const span = document.querySelectorAll('span');

/*BUTTONS*/ 
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');




moon.addEventListener('click',()=>{
    homepage.style.backgroundColor="var(--darkMode)";
    body.style.backgroundColor="var(--darkMode)";
    logo.setAttribute('src','alarado-icon-homepage-dark.svg');
    document.getElementById('first').style.color="var(--white)";
    document.querySelector('h1').style.color="var(--white)";
    document.querySelector('.small').style.color="var(--white)";
    document.querySelector('.nav__menu').style.backgroundColor="var(--darkMode)";
    for(let i=0; i<span.length; i++){
        span[i].style.backgroundColor="var(--white)";
    }
    moon.style.backgroundColor="var(--white)";
    document.getElementById('moon-img').setAttribute('src','Moon_fill.svg');
    sun.style.backgroundColor="transparent";
    document.getElementById('sun-img').setAttribute('src','Sun_fill_light.svg');
})

sun.addEventListener('click',()=>{
    homepage.style.backgroundColor="var(--white)";
    body.style.backgroundColor="var(--white)";
    logo.setAttribute('src','alarado-icon-homepage.svg');
    document.getElementById('first').style.color="var(--black)";
    document.querySelector('h1').style.color="var(--black)";
    document.querySelector('.small').style.color="var(--black)";
    document.querySelector('.nav__menu').style.backgroundColor="var(--white)";
    for(let i=0; i<span.length; i++){
        span[i].style.backgroundColor="var(--darkMode)";
    }
    moon.style.backgroundColor="transparent";
    document.getElementById('moon-img').setAttribute('src','Moon_fill_light.svg');
    sun.style.backgroundColor="var(--white)";
    document.getElementById('sun-img').setAttribute('src','Sun_fill.svg');
})

