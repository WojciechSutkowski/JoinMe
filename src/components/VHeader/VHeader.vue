<template>
  <header class="header">
    <router-link to="/">
      <div class="header__logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
        <n-p>JoinMe</n-p>
      </div>
    </router-link>
    <nav class="header__nav">
      <n-p><a href="#about-us"> O nas </a> </n-p>
      <n-p> <a href="#how-to-start"> Jak zacząć </a></n-p>
      <n-p> <a href="#contact"> Kontakt </a></n-p>
      <n-button
        type="primary"
        :class="{ header__button: !isPrimary }"
        :ghost="!isPrimary"
        @click="handleBtnClick"
        >Zaloguj się</n-button
      >
    </nav>
    <button class="header__mobile-nav">
      <img
        class="icon-mobile-nav"
        src="@/assets/images/icons/menu-outline.svg"
        alt="Open menu icon"
        name="menu-outline"
      />
      <img
        class="icon-mobile-nav"
        src="@/assets/images/icons/close-outline.svg"
        alt="Close menu icon"
        name="close-outline"
      />
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { NP, NButton } from 'naive-ui';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  components: {
    NP,
    NButton,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const handleBtnClick = () => router.push('/login');

    const isPrimary = computed(() => route.path !== '/login');

    return { isPrimary, handleBtnClick };
  },
});
</script>

<style lang="scss" src="./VHeader.scss" scoped />
