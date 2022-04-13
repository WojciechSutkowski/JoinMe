<template>
  <n-config-provider :theme-overrides="theme">
    <router-view></router-view>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useAuth } from '@/store/auth';
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui';

export default defineComponent({
  components: {
    NConfigProvider,
  },
  setup() {
    const auth = useAuth();

    const theme: GlobalThemeOverrides = {
      common: {
        primaryColor: '#2fa9b1',
        primaryColorHover: '#1d8890',
      },
    };

    onBeforeMount(() => {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        auth.user = JSON.parse(currentUser);
      }
    });
    return { theme };
  },
});
</script>

<style lang="scss">
:root {
  // COLORS
  --color-primary: #57a6af;
  --color-primary-dark: #2fa9b1;
  --color-primary-light: #ecf5f6;
  --color-light: #ffffff;
  --color-dark: #1f2225;
  --color-gray-dark: #868686;
  --color-gray-light: #e7e7e7;

  // SPACING
  --base-size: 0.8rem;

  // OTHERS
  --shadow-light: rgba(181, 186, 192, 0.2) 0px 8px 24px;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border: 5px solid var(--color-primary);
  }
}

// Global styles

.n-p,
.n-h1,
.n-h2,
.n-h3,
.n-button {
  margin: 0;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.Vue-Toastification__toast--info.custom_toast {
  background-color: #29b6f6;
  border: 1px solid #1795cf;
}

.Vue-Toastification__toast--success.custom_toast {
  background-color: #66bb6a;
  border: 1px solid #3ea043;
}

.Vue-Toastification__toast--error.custom_toast {
  background-color: #e57373;
  border: 1px solid #da6060;
}

.custom_toast {
  .Vue-Toastification__toast-body {
    min-width: 200px;
    font-size: 1.4rem;
    font-family: v-sans, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
}

a {
  text-decoration: none;
}

.secondary-heading {
  font-size: 2.8rem;
  margin-bottom: 4rem;
}

.tertiary-heading {
  font-size: 2.4rem;
  line-height: 1.2;
  margin-bottom: 1.2rem;
}
</style>
