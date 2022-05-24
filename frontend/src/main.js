import './assets/sass/custom.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

createApp(App)
    .use(router)
    .mount('#app');

import 'bootstrap/dist/js/bootstrap.min.js';
