import "./lib/flash.scss";
import "./style.scss";
import "virtual:svg-icons-register";
import "github-markdown-css";
import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import Icon from "./components/Icon.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("Icon", Icon);
