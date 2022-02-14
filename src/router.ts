import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocDomo from './components/DocDomo.vue';
import SwitchDomo from './components/SwitchDomo.vue';
import ButtonDomo from './components/ButtonDomo.vue';
import DialogDomo from './components/DialogDemo.vue';
import TabsDomo from './components/Tabs.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', component: DocDomo},
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
