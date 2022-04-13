<template>
  <div class="container landing-page">
    <svg
      class="landing-page__ornament-blob"
      width="109"
      height="109"
      viewBox="0 0 109 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84.0917 43.9814C88.6697 58.9144 85.2907 75.5369 75.1537 82.8944C65.0167 90.2519 48.1217 88.3989 36.0227 79.6244C23.9237 70.9044 16.6207 55.3719 20.4902 41.4199C24.3597 27.4679 39.4562 15.0419 53.2447 15.4779C67.0332 15.9139 79.5682 29.1029 84.0917 43.9814Z"
        fill="black"
      />
    </svg>
    <svg
      class="landing-page__ornament-blob-2"
      width="109"
      height="109"
      viewBox="0 0 109 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84.0917 43.9814C88.6697 58.9144 85.2907 75.5369 75.1537 82.8944C65.0167 90.2519 48.1217 88.3989 36.0227 79.6244C23.9237 70.9044 16.6207 55.3719 20.4902 41.4199C24.3597 27.4679 39.4562 15.0419 53.2447 15.4779C67.0332 15.9139 79.5682 29.1029 84.0917 43.9814Z"
        fill="black"
      />
    </svg>
    <svg
      class="landing-page__ornament-blob-3"
      width="109"
      height="109"
      viewBox="0 0 109 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84.0917 43.9814C88.6697 58.9144 85.2907 75.5369 75.1537 82.8944C65.0167 90.2519 48.1217 88.3989 36.0227 79.6244C23.9237 70.9044 16.6207 55.3719 20.4902 41.4199C24.3597 27.4679 39.4562 15.0419 53.2447 15.4779C67.0332 15.9139 79.5682 29.1029 84.0917 43.9814Z"
        fill="black"
      />
    </svg>

    <svg
      class="landing-page__ornament-leaf"
      width="160"
      height="187"
      viewBox="0 0 160 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M62.055 72.5021C62.5973 72.3857 63.1519 72.3962 63.6872 72.5331C64.2225 72.6699 64.728 72.9303 65.1747 73.2995C65.6215 73.6687 66.0008 74.1394 66.291 74.6848C66.5812 75.2302 66.7766 75.8395 66.866 76.4779C71.1693 107.211 79.8343 131.238 94.4976 152.515C102.014 146.71 107.819 138.146 111.165 127.749C115.604 113.954 115.399 98.3456 110.576 82.6172C106.27 68.5765 98.873 59.3891 91.7159 50.5025C82.6871 39.2906 74.1592 28.6988 72.3666 8.65004C72.1616 6.42637 71.0805 4.65404 69.4556 3.88622C67.5913 3.02007 65.6208 3.56731 63.5816 5.54548C58.8074 10.1743 49.4387 26.6828 42.033 46.3001C30.132 77.8146 29.8409 98.8119 31.6922 110.88C34.0886 126.466 41.3574 140.333 51.6099 149.369C53.54 151.075 55.5783 152.607 57.7075 153.95C67.3826 160.022 77.9258 161.176 86.8312 157.186C71.9185 135.001 63.0477 109.989 58.5962 78.2514C58.5065 77.6119 58.5249 76.9557 58.6503 76.3203C58.7756 75.685 59.0056 75.0831 59.3269 74.549C59.6482 74.0149 60.0546 73.5592 60.5227 73.208C60.9909 72.8567 61.5116 72.6169 62.055 72.5021V72.5021ZM103.133 163.932C100.044 160.204 97.171 156.409 94.4949 152.525C92.4031 154.141 90.1952 155.533 87.8981 156.685C87.5479 156.862 87.1911 157.029 86.8332 157.188C90.0537 161.967 93.4821 166.544 97.1049 170.901C97.4825 171.377 97.938 171.758 98.4448 172.02C98.9516 172.283 99.4995 172.423 100.056 172.432C100.613 172.441 101.167 172.318 101.687 172.071C102.207 171.824 102.681 171.458 103.083 170.994C103.484 170.531 103.804 169.978 104.025 169.37C104.245 168.762 104.361 168.11 104.366 167.452C104.371 166.795 104.264 166.145 104.053 165.54C103.841 164.936 103.529 164.39 103.135 163.934L103.133 163.932Z"
        fill="black"
      />
    </svg>

    <!-- <img
      class="landing-page__ornament-blob"
      src="@/assets/flafi.svg"
      alt="flafi"
    /> -->
    <div class="landing-page__wrapper">
      <div class="landing-page__text">
        <n-h1>Już dziś spotkajmy się w nowej rzeczywistości </n-h1>
        <n-p class="description">
          Dzięki naszej aplikacji zoorganizujesz własne wydarzenia, poznasz nowe
          twarze oraz będziesz miał okazje robić to wszystko przy okazji
          ciekawych aktywności
        </n-p>

        <n-button type="primary" @click="handleBtnClick"
          >Zorganizuj spotkanie</n-button
        >
      </div>

      <img
        class="landing-page__img"
        src="@/assets/images/main.jpg"
        alt="park"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NH1, NP, NButton } from 'naive-ui';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    NH1,
    NP,
    NButton,
  },
  setup() {
    const router = useRouter();

    const handleBtnClick = () => router.push('/login');

    return { handleBtnClick };
  },
});
</script>

<style lang="scss" src="./WLandingPage.scss" />
