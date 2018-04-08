import Vue from 'vue'
import Router from 'vue-router'
import LoginReg from '@/components/login_register'
import Login from '@/components/login'
import Register from '@/components/register'
import Index from '@/components/index'
import Products from '@/components/products'
import ProductDetails from '@/components/product_details'
import NotFound from '@/components/not_found'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/', component: LoginReg, children: [
    {path: '/', component: LoginReg, children: [
      {path: '/', component: Login},
      {path: '/login', component: Login},
      {path: '/register', component: Register}
    ]},
    // ]},
    {path: '/index', component: Index},
    // {path: '/login', component: LoginReg},
    {path: '/products', component: Products},
    {path: '/product_details', component: ProductDetails},
    {path: '*', component: NotFound}
  ]
})
