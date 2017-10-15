import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vfooter from "@/components/vfooter"
import loadCompo from "@/view/load.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
    	path:"/f",
    	name:"f",
    	component:vfooter
    },
    {
    	path:"/load",
    	name:"loadRouter",
    	component:loadCompo
    }
  ]
}) 
