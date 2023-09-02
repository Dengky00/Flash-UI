import { h } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import InputDemo from "./components/InputDemo.vue";
import CarouselDemo from "./components/CarouselDemo.vue";
import CityDemo from "./components/CityDemo.vue";
import Markdown from "./components/Markdown.vue";
import Intro from "./markdown/intro.md?raw";
import Install from "./markdown/install.md?raw";
import GetStarted from "./markdown/get-started.md?raw";

const history = createWebHashHistory();
const md = (content: string) => h(Markdown, { md: content, key: content });
export const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "intro", component: md(Intro) },
        { path: "install", component: md(Install) },
        { path: "get-started", component: md(GetStarted) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "input", component: InputDemo },
        { path: "carousel", component: CarouselDemo },
        { path: "city", component: CityDemo },
      ],
    },
  ],
});
