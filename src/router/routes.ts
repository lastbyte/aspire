import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/mobile/IndexPage.vue') }],
  },
  {
    path: '/cards',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CardsPage.vue') }],
  },
  {
    path: '/payment',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/mobile/PaymentPage.vue') }],
  },
  {
    path: '/credit',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/mobile/CreditPage.vue') }],
  },
  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/mobile/ProfilePage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
