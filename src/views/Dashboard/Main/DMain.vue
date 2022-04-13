<template>
  <div class="container home">
    <d-header></d-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DHeader from '@/components/DHeader/DHeader.vue';

export default defineComponent({
  components: {
    DHeader,
  },
});
</script>

<style lang="scss" src="./DMain.scss" />
