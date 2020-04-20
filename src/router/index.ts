import Vue from 'vue'
import VueRouter, { NavigationGuard } from 'vue-router'
import CadastroGeral from '../views/CadastroGeral.vue'
import Cadastro from '../views/Cadastro.vue'

Vue.use(VueRouter)


const parts = window.location.host.split('.');
const domainLength = 3;

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: (parts.length === (domainLength - 1) || parts[0] === 'www')
    ? [
      {
        path: '/',
        name: 'Landing Page',
        component: () => import('../views/LandingPage.vue'),
      },
      {
        path: '/cadastro',
        component: Cadastro,
        children: [
          {
            path: '1',
            name: 'Cadastro-1',
            component: CadastroGeral,
          },
        ]
      },
    ]
    : [
      {
        path: '/',
        component: () => import('../views/client/ClientApp.vue'),
        children: [
          {
            path: '',
            name: 'Home',
            component: () => import('../views/client/pages/Home.vue'),
          },
          {
            path: 'point-of-sale',
            name: 'Point of Sale',
            component: () => import('../views/client/pages/PointOfSale.vue'),
          },
          {
            path: 'products',
            name: 'Products',
            component: () => import('../views/client/pages/Products.vue'),
          },
          {
            path: 'users',
            name: 'Users',
            component: () => import('../views/client/pages/Users.vue'),
          },
          {
            path: 'stores',
            name: 'Stores',
            component: () => import('../views/client/pages/Stores.vue'),
          },
        ]
      },
    ]
})

export default router
