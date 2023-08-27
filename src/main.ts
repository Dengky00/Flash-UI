import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";
import "./style.scss";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    { path: "/doc", component: Doc },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
