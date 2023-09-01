import { h } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from "./components/Markdown.vue";

const history = createWebHashHistory();
const md = (filename: string) => h(Markdown, { md: filename, key: filename });
export const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "intro", component: md("intro") },
        { path: "get-started", component: md("get-started") },
        { path: "install", component: md("install") },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
