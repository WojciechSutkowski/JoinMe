<template>
  <section id="how-to-start" class="container how-to-start">
    <n-h2 class="secondary-heading">Jak zacząć</n-h2>

    <div class="container grid grid--2-cols grid--center-v">
      <!-- STEP 01 -->
      <div class="how-to-start__step-text-box">
        <n-p class="how-to-start__step-number">01</n-p>
        <n-h3 class="tertiary-heading">Intuicyjny interfejs</n-h3>
        <n-p class="how-to-start__step-description"
          >Dzięki JoinMe łatwo znajdziesz interesujące cię spotkania i
          wydarzenia w twoim mieście, które pozwolą Ci nawiązać nowe znajomości,
          a także umacniać trwające przyjaźnie.</n-p
        >
      </div>
      <div class="how-to-start__step-img-box">
        <img
          src="@/assets/images/dashboard.jpg"
          class="how-to-start__step-img"
          alt="main dashboard"
        />
      </div>

      <!-- STEP 02 -->
      <div class="how-to-start__step-img-box">
        <img
          src="@/assets/images/create-event.jpg"
          class="how-to-start__step-img custom"
          alt="iPhone app
            meal approving plan screen"
        />
      </div>
      <div class="how-to-start__step-text-box">
        <n-p class="how-to-start__step-number">02</n-p>
        <n-h3 class="tertiary-heading">Nieoceniona prostota i szybkość</n-h3>
        <n-p class="how-to-start__step-description">
          Nigdy więcej nie marnuj swojego cennego czasu na samodzielną i
          uciążliwą organizację spotkań. Z JoinMe zorganizujesz spotkanie w
          wybranej lokalizacji w 5 minut!
        </n-p>
      </div>

      <!-- STEP 03 -->
      <div class="how-to-start__step-text-box">
        <n-p class="how-to-start__step-number">03</n-p>
        <n-h3 class="tertiary-heading"
          >Wszystkie informacje w zasięgu ręki</n-h3
        >
        <n-p class="how-to-start__step-description">
          Na stronie danego wydarzenia znajdziesz najpotrzebniejsze informacje
          oraz będziesz mógł ustalić szczegóły z pozostałymi uczestnikami.
        </n-p>
      </div>
      <div class="how-to-start__step-img-box">
        <img
          src="@/assets/images/details.jpg"
          class="how-to-start__step-img"
          alt="iPhone app
            delivery screen"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NH2, NH3, NP } from 'naive-ui';

export default defineComponent({
  components: {
    NH2,
    NH3,
    NP,
  },
});
</script>

<style lang="scss" src="./WHow.scss" scoped />
