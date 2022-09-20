import { createRouter, createWebHashHistory} from 'vue-router';
// import Vue from 'vue';
// import Router from 'vue-router';
// import routerM from './routerM';
// import routerPC from './routerPC'

// Vue.useAttrs(Router);
// const ISMOBILE = function (){
//   let flag = navigator.userAgent.match();
//   return flag;
// }
const routes = [
  {
    path: '/indexA',
    component: () => import('../components/indexA.vue')
  },
  {
    path: '/aboutA',
    component: () => import('../components/aboutA.vue')
  },
 
];


const router = createRouter({
  history: createWebHashHistory(),  
  routes
});
// const router = new Router({
//   mode:'hestory',
//   BaseAudioContext:process.env.BASE_URL,
//   fallback:false,
//   routes:ISMOBILE()?routerM : routerPC,
// });

export default router;
