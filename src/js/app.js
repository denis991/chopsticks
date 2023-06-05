import * as flsFunctions from "./modules/functions.js";
import {addEventListenerToHeaderPhone} from "./modules/eventListeners.js";

// import * as timeOfLife from './modules/age';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
flsFunctions.browserCheck();
flsFunctions.calculateBorderRadius();
// flsFunctions.initializeLightSlider();

addEventListenerToHeaderPhone();

// timeOfLife(birthStr);


//он понка не используется
// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();
