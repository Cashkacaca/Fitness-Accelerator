// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';
// Табы
import {initTabs} from './vendor/init-tabs';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
  });
});
