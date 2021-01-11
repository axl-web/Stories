import '../css/app.scss';
import './slider/sliderDOM';
import './maps/gmaps';
import './menu/menu';


if(navigator.serviceWorker)
  navigator.serviceWorker.register('../sw.js');