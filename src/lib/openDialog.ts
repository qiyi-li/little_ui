import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
  const {title, content, ...rest} = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = (app, div) => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        ...rest,
        'onUpdate:visible': (newVisible) => {
          if (newVisible === false) {
            app.unmount(div);
            div.remove();
          }
        }
      }, {title, content});
    }
  });
  app.mount(div);
};
