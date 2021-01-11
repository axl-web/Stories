// Animacion de scrolls al cerrar menu
function scrollToElement(element){
    window.scrollTo({
        'behavior':'smooth',
        'top':element.offsetTop
    })
};

// Activar menu desplegrable
document.querySelector('.menu')
.addEventListener('click', function(){
    document.querySelector('.menu-screen').classList.add("active");
})

// Cerrar menu desplegable
document.querySelector('.close')
.addEventListener('click', function(){
    document.querySelector('.menu-screen').classList.remove("active");
})

let link = document.querySelectorAll('.menu-screen a');

// Ir al vinculo y cerrar el menu
link.forEach(link =>{
    link.addEventListener('click',function(ev){
    
        document.querySelector('.menu-screen').classList.remove("active");

        let paths = this.href.split('/');

        const selector = paths[paths.length -1];

        if(window.scrollTo) ev.preventDefault();

        scrollToElement(document.querySelector(selector));
       
        return !!window.scrollTo;
    })
})

    