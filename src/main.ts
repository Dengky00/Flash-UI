import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import DemoVue from "./components/Demo.vue";
import Demo1 from "./components/Demo1.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: DemoVue },
    { path: "/1", component: Demo1 },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
