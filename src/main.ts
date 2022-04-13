import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import PrimeVue from 'primevue/config';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import 'leaflet/dist/leaflet.css';

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(createPinia()).use(router).use(Toast).use(PrimeVue);

app.mount('#app');
