const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    
    espacio.innerHTML=(` <ul>
    <li>
        <a class="link" href="#portafolio">Portafolio</a>
    </li>
    
    <li>
        <a class="link" href="#estudios">Estudios</a>
    </li>
    
    <li>
        <a class="link" href="#contacto">Contacto</a>
    </li>
</ul> `)
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    espacio.innerHTML='';
    
  }
}); 

let espacio = document.getElementById('list')

