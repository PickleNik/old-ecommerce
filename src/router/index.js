import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Cart from '@/components/Cart'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ],
  mode: 'history'
})
