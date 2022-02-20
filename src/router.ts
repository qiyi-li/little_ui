import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDomo from './components/SwitchDomo.vue';
import ButtonDomo from './components/ButtonDomo.vue';
import DialogDomo from './components/DialogDemo.vue';
import TabsDomo from './components/TabsDemo.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import getStarted from './markdown/get-started.md';
import install from './markdown/install.md';

const returnMarkDown = (string) => h(Markdown, {content:string, key: string});
const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: returnMarkDown(intro)},
        {path: 'install', component: returnMarkDown(install)},
        {path: 'get-started', component: returnMarkDown(getStarted)},
        {path: 'switch', component: SwitchDomo},
        {path: 'button', component: ButtonDomo},
        {path: 'dialog', component: DialogDomo},
        {path: 'tabs', component: TabsDomo},
      ]
    },
  ]
});
router.afterEach(() => {
  console.log('router change');
});
