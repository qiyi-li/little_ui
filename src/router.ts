import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDomo from './components/SwitchDomo.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: 'switch', component: SwitchDomo}
      ]
    },
  ]
});
router.afterEach(()=>{
  console.log('router change')
})
