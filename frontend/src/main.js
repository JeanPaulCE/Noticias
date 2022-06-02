import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/custom.css";
import router from "./router/index";
import isMobile from "./helpers/isMobile";

createApp(App)
    .use(router)
    .mount("#app");

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
