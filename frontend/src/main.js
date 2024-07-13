

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// import 'primevue/resources/themes/saga-blue/theme.css'; // theme
// import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css'; // PrimeFlex

//import jQuery from './assets/js/jquery.min.js'
import jQuery from "jquery";
window.$ = window.jQuery = jQuery

// Import additional JS libraries
import "./assets/js/jquery.min.js";
import "./assets/js/popper2.min.js";
import "./assets/js/bootstrap.min.js";
import "./assets/js/slick.min.js";
import "./assets/js/jquery.easing.1.3.js";
import "./assets/js/jquery.mb.YTPlayer.min.js";
import "./assets/js/main.js";

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '',
            cssLayer: false
        }
    }
 })
app.mount('#app')
