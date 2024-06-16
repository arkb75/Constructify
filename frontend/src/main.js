import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import jQuery from './assets/js/jquery.min.js'
window.$ = window.jQuery = jQuery

//import "http://code.jquery.com/jquery-1.11.3.min.js";
import './assets/js/jquery.min.js';
import './assets/js/popper.min.js';
import "./assets/js/bootstrap.min.js";
import "./assets/js/slick.min.js";

//import "./assets/js/jquery.waypoints.min.js";
import "./assets/js/jquery.easing.1.3.js";
import "./assets/js/jquery.mb.YTPlayer.min.js";

import "./assets/js/main.js";

// import './assets/css/bootstrap/bootstrap.css';
// import './assets/fonts/ionicons/css/ionicons.min.css';
// //import './assets/fonts/law-icons/font/flaticon.css';
// import './assets/fonts/fontawesome/css/font-awesome.min.css';
// import './assets/css/slick.css';
// import './assets/css/slick-theme.css';
// import './assets/css/helpers.css';
// import './assets/css/style.css';
// import './assets/css/landing-2.css';

createApp(App).use(router).mount('#app')
