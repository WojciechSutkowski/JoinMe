<template>
  <header class="header">
    <router-link to="/dashbord">
      <div class="header__logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
        <n-p>JoinMe</n-p>
      </div>
    </router-link>
    <div class="header__profile">
      <div class="header__icons">
        <img src="@/assets/images/icons/menu.svg" alt="menu" />
        <img src="@/assets/images/icons/question-mark.svg" alt="mark" />
        <img src="@/assets/images/icons/bell.svg" alt="bell" />
      </div>
      <div class="header__wrapper">
        <div class="header__avatar">
          <label for="avatar">
            <n-avatar round size="large" :src="avatarSrc" />
          </label>
          <input type="file" id="avatar" @change="handleChangeAvatar" />
        </div>
        <div class="header__name">
          <n-p>{{ user.firstName }} {{ user.lastName }}</n-p>
        </div>
        <div class="header__dropdown-btn" @click="toggleDropdown">
          <img
            src="@/assets/images/icons/chevron-down-outline.svg"
            alt="arrow down"
          />
        </div>
        <div class="header__toggle-dropdown" :class="{ hidden: isOpen }">
          <div class="header__dropdown-options">
            <n-p class="option email">
              <strong>
                {{ user.email }}
              </strong>
            </n-p>
            <n-p class="option">ustawienia konta</n-p>
            <n-p class="option">zmień hasło</n-p>
            <n-p class="option">pomoc</n-p>
            <n-button type="primary" @click="handleLogout"
              >Wyloguj się</n-button
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed, ref } from 'vue';
import { NP, NAvatar, NButton } from 'naive-ui';
import { useFile } from '@/store/file';
import { useAuth } from '@/store/auth';

export default defineComponent({
  components: {
    NP,
    NAvatar,
    NButton,
  },
  setup() {
    const file = useFile();
    const auth = useAuth();

    const isOpen = ref(true);
    const isRotated = ref(false);

    const avatarSrc = computed(() =>
      auth.user?.avatar?.id
        ? `https://hacknarok-api.verybadcode.pl/api/drive/uploads/${auth.user.avatar.id}`
        : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E',
    );

    const { user } = auth;

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const rotateArrow = () => {
      isRotated.value = !isRotated.value;
    };

    const handleChangeAvatar = async (e: any) => {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      await file.upload(formData);
      localStorage.setItem('currentUser', JSON.stringify(auth.user));
    };

    onBeforeMount(() => {});

    const handleLogout = () => auth.logout();

    return {
      user,
      isOpen,
      isRotated,
      avatarSrc,
      handleLogout,
      toggleDropdown,
      rotateArrow,
      handleChangeAvatar,
    };
  },
});
</script>

<style lang="scss" src="./DHeader.scss" scoped />
