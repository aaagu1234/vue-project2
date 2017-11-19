import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import SecondComponent from '@/components/SecondComponent'
import FirstComponent from '@/components/FirstComponent'
Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },{
    	path: '/second',
    	name: 'SecondComponent',
    	component: SecondComponent
    },{
    	path: '/first',
    	name: 'FirstComponent',
    	component: FirstComponent
    }
  ]
})
