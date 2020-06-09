import Vue from 'vue'
import Router from 'vue-router'

import appleCatalog from '../components/catalog/apple-catalog'
import appleCart from '../components/cart/apple-cart'
import appleMainPage from '../components/main-page/apple-main-page'


Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: appleMainPage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: appleCatalog
    },
   
    {
      path: '/cart',
      name: 'cart',
      component: appleCart,
      props: true
    }
  ]
})

export default router;
