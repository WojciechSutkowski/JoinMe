<template>
  <footer class="container footer">
    <div class="footer__grid">
      <div class="logo-col">
        <div class="logo-col__logo-container">
          <a href="#" class="logo">
            <img
              class="logo__image"
              alt="Omnifood logo"
              src="@/assets/images/logo.svg"
            />
            <p class="logo__name">JoinMe</p>
          </a>
        </div>

        <ul class="logo-col__social-links">
          <li>
            <a class="footer-link" href="#">
              <img
                class="footer-link__social-icon"
                src="@/assets/images/icons/logo-facebook.svg"
              />
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              <img
                class="footer-link__social-icon"
                src="@/assets/images/icons/logo-instagram.svg"
              />
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              <img
                class="footer-link__social-icon"
                src="@/assets/images/icons/logo-twitter.svg"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="address-col">
        <p class="footer-heading">Kontakt</p>
        <address class="contacts">
          <p class="contacts__address">Mickiewicza 8, 33-100 Tarnów</p>
          <p>
            <a class="footer-link" href="mailto:hello@omnifood.com"
              >verybadcode@business.com</a
            >
          </p>
        </address>
      </div>

      <nav class="nav-col">
        <p class="footer-heading">Konto</p>
        <ul class="footer-nav">
          <li><a class="footer-link" href="#">Zarejestruj się</a></li>
          <li><a class="footer-link" href="#">Zaloguj się</a></li>
          <li><a class="footer-link" href="#">Pomoc</a></li>
        </ul>
      </nav>

      <nav class="nav-col">
        <p class="footer-heading">O nas</p>
        <ul class="footer-nav">
          <li><a class="footer-link" href="#">Kilka słów o nas</a></li>
          <li><a class="footer-link" href="#">Jak to działa</a></li>
          <li><a class="footer-link" href="#">Kariera</a></li>
        </ul>
      </nav>

      <p class="copyright">
        Copyright &copy; <span class="year">2022</span> by VeryBadCode All
        rights reserved.
      </p>
    </div>
  </footer>
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

<style lang="scss" src="./WFooter.scss" />
