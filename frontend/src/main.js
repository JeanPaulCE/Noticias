import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/custom.css";
import router from "./router/index";
import isMobile from "./helpers/isMobile";

createApp(App).use(router).mount("#app");
