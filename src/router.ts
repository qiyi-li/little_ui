import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue';
import Install from './views/Install.vue'
import DocDomo from './components/DocDomo.vue';
import SwitchDomo from './components/SwitchDomo.vue';
import ButtonDomo from './components/ButtonDomo.vue';
import DialogDomo from './components/DialogDemo.vue';
import TabsDomo from './components/TabsDemo.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', component: DocDomo},
        {path: 'intro', component: Intro},
        {path: 'get-started', component: GetStarted},
        {path: 'install', component: Install},
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
