import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";

type DialogOptions = {
  title: String;
  content: String;
  ok?: Function;
  cancel?: Function;
};
export const openDialog = (options: DialogOptions) => {
  const { title, content, ok, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          ok,
          cancel,
          "onUpdate:visible": (newVisible) => {
            if (newVisible == false) {
              app.unmount();
              div.remove();
            }
          },
        },
        { title, content }
      );
    },
  });
  app.mount(div);
};
