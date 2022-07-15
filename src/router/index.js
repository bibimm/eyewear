import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
import Cart from '@/views/Cart.vue';
import exampleDialogVue from '../views/exampleDialog.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/exampleDialogVue',
    name: 'exampleDialogVue',
    component: exampleDialogVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
