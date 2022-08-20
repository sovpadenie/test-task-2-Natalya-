const toogleButton = document.getElementsByClassName('menu__toggle')[0];
const menuLinks = document.getElementsByClassName('menu__links');
toogleButton.addEventListener('click', function(){
    for(var i=0; i<menuLinks.length; i++)
    menuLinks[i].classList.toggle('active')
})