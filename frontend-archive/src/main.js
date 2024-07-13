import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import PrimeVue and related components
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css'; // PrimeFlex



import jQuery from './assets/js/jquery.min.js'
window.$ = window.jQuery = jQuery

// Import additional JS libraries
import './assets/js/jquery.min.js';
import './assets/js/popper.min.js';
import "./assets/js/bootstrap.min.js";
import "./assets/js/slick.min.js";
import "./assets/js/jquery.easing.1.3.js";
import "./assets/js/jquery.mb.YTPlayer.min.js";
import "./assets/js/main.js";

createApp(App)
  .use(router)
  .use(PrimeVue)
  .mount('#app')