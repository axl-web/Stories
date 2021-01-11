// Importa clase Slider y Preloader - Importa los elemtos del slider
import Slider from './slider';
import elements from './elements'; 
import Preloader from '../preloader/preloader';

//Implementacion de slider 
let sliderTitle = document.querySelector('#slider-title');
let sliderSub = document.querySelector('#slider-subtitle')
let sliderImg = document.querySelector('#slider-image');
let sliderText = document.querySelector('#slider-text');
let textContent = document.querySelector('#slider-text-content');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

let slider = new Slider({
   
    elements,

    animationFunc: function(element){

        textContent.classList.add("hide");
        sliderImg.classList.add("hide")
        setTimeout(function(){
            sliderTitle.innerHTML = element.title;
            sliderSub.innerHTML = element.subtitle;
            sliderImg.src = element.image;
            sliderText.innerHTML = element.text;
        
            textContent.classList.remove("hide")
            sliderImg.classList.remove("hide")

        },600);
    },

    speed:5000
});

slider.play();

leftArrow.addEventListener('click',slider.prev);
rightArrow.addEventListener('click',slider.next);

//Implementacion de Preloader 
const imagePaths = elements.map(el=>el.image);

Preloader.preloaderImages({
    images:imagePaths,
    completed: function(){
        document.querySelector('.controls').style.display='block';
    }
}) 