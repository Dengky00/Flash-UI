import "./lib/flash.scss";
import "./style.scss";
import "virtual:svg-icons-register";
import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
