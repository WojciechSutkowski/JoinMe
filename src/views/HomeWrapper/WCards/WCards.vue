<template>
  <div class="container cards" id="about-us">
    <n-h2 class="secondary-heading">Kilka słów o nas</n-h2>
    <div class="cards__list">
      <div class="card">
        <img
          class="card__icon"
          src="@/assets/images/icons/location-outline.svg"
        />
        <n-h3>Miejsca</n-h3>
        <n-p>W łatwy sposób znajdź miejsce na spotkanie</n-p>
      </div>
      <div class="card">
        <img
          class="card__icon"
          src="@/assets/images/icons/people-outline.svg"
        />
        <n-h3>Spotkania</n-h3>
        <n-p>Zorganizuj spotkanie biznesowe lub w gronie przyjaciół</n-p>
      </div>
      <div class="card">
        <img
          class="card__icon"
          src="@/assets/images/icons/chatbubbles-outline.svg"
        />
        <n-h3>Komunikacja</n-h3>
        <n-p>Wspólnie ustalcie szczegóły spotkania za pomocą czatu</n-p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NH1, NH2, NH3, NIcon, NP, NButton } from 'naive-ui';

export default defineComponent({
  components: {
    NH1,
    NH2,
    NH3,
    NIcon,
    NP,
    NButton,
  },
});
</script>

<style lang="scss" src="./WCards.scss" scoped />
