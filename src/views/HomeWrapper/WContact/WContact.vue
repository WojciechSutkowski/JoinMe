<template>
  <div id="contact" class="container contact">
    <n-h2 class="secondary-heading">Napisz do nas</n-h2>
    <n-form class="contact__form">
      <n-form-item class="name" label="Imię">
        <n-input type="text" placeholder="" />
      </n-form-item>
      <n-form-item class="email" label="Email">
        <n-input type="text" placeholder="" />
      </n-form-item>
      <n-form-item class="message" label="Wiadomość">
        <n-input
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
      </n-form-item>

      <n-button type="primary"> Wyślij </n-button>
    </n-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NH2, NP, NButton, NForm, NFormItem, NInput } from 'naive-ui';

export default defineComponent({
  components: {
    NH2,
    NP,
    NButton,
    NForm,
    NFormItem,
    NInput,
  },
});
</script>

<style lang="scss" src="./WContact.scss" />
