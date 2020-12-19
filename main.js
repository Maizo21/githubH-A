
const ipad = window.matchMedia('screen and (max-width: 767px');
const menu = document.querySelector('.list');
const burgerButton = document.querySelector('#burger-menu');


ipad.addListener(validation)

function validation(e){
    if (e.matches){
        burgerButton.addEventListener('click', hideShow);
    }else{
        burgerButton.removeEventListener('click', hideShow);
    }
}

validation(ipad);

function hideShow(){
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active')
    }else{
        menu.classList.add('is-active')
    };
}

function hideMenu(){
    menu.classList.remove('is-active')
}




