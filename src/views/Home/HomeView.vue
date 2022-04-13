<template>
  <div class="container home">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VHeader from '@/components/VHeader/VHeader.vue';

export default defineComponent({
  components: {
    VHeader,
  },
});
</script>

<style lang="scss" src="./HomeView.scss" />
