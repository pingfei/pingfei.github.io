import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyList from '@/components/mylist'
import MyDetail from '@/components/mydetail'
import NotFound from '@/components/notfound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path: '/list', component: MyList},
    {path: '/detail/:num', component: MyDetail},
    {path:"*",component:NotFound}
  ]
})
