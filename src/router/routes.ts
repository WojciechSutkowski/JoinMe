const HomeView = () => import('@/views/Home/HomeView.vue');
const SignIn = () => import('@/views/SignIn/SignIn.vue');
const SignUp = () => import('@/views/SignUp/SignUp.vue');
const HomeWrapper = () => import('@/views/HomeWrapper/HomeWrapper.vue');
const VSuccess = () => import('@/components/VSuccess.vue');

const DMain = () => import('@/views/Dashboard/Main/DMain.vue');
const DPanel = () => import('@/views/Dashboard/Panel/DPanel.vue');
const DDetails = () => import('@/views/Dashboard/DDetails/DDetails.vue');

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { guest: true },
    children: [
      { path: 'signup', component: SignUp, meta: { guest: true } },
      { path: 'login', component: SignIn, meta: { guest: true } },
      { path: '/', component: HomeWrapper, meta: { guest: true } },
    ],
  },
  {
    path: '/dashboard',
    component: DMain,
    meta: { requiresAuth: true },
    children: [
      { path: '/dashboard', component: DPanel, meta: { requiresAuth: true } },
      {
        path: '/dashboard/details/:id',
        component: DDetails,
        meta: { requiresAuth: true },
      },
    ],
  },
  { path: '/authenticated', component: VSuccess, meta: { requiresAuth: true } },
  { path: '/:notFound(.*)', redirect: '/', meta: { guest: true } },
];

export default routes;
