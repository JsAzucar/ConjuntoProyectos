const RotateHbr= document.querySelector('.Hamburguer');
const MenuAppear=document.querySelector('.links');
const Introduccion=document.querySelector('.Intro');

RotateHbr.addEventListener('click',() =>{
    RotateHbr.classList.toggle('rotate');
    RotateHbr.classList.toggle('rotate');
    MenuAppear.classList.toggle('active');
    Introduccion.classList.toggle('active-intro');
})