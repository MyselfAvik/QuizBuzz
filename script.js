var typed = new Typed('#element', {
    strings: [' ','Play Quiz', 'Gain Knowledge','Master Quiz'],
    typeSpeed: 200,
});
burger =document.querySelector('.burger')
header =document.querySelector('header')
navmenu =document.querySelector('.nav-menu')



burger.addEventListener('click',()=> {
    navmenu.classList.toggle('v-class');
    header.classList.toggle('h-nav');
})
