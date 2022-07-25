import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
import Cart from '@/views/Cart.vue';
import AddStock from '@/views/AddStock.vue';
import Eyeglasses from '@/views/Eyeglasses.vue';
import Sunglasses from '@/views/Sunglasses.vue';
import Accesories from '@/views/Accesories.vue';
import AboutUs from '@/views/AboutUs.vue';


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
    path: '/addstock',
    name: 'AddStock',
    component: AddStock,
  },
  {
    path: '/eyeglasses',
    name: 'Eyeglasses',
    component: Eyeglasses,
  },
  {
    path: '/sunglasses',
    name: 'Sunglasses',
    component: Sunglasses,
  },
  {
    path: '/accesories',
    name: 'Accesories',
    component: Accesories,
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
