import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '../store/auth';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const store = useAuth();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.user && store.user?.token?.type) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
