<template>
  <div class="auth">
    <n-h1>{{ `${user.email}: ${user.firstName} ${user.lastName}` }}</n-h1>
    <n-p>This is only visible for authenticated users</n-p>
    <n-button type="primary" @click="handleLogout"> Logout </n-button>

    <div class="xd">
      <n-form ref="formRef" :model="model" class="essa">
        <n-form-item path="name" label="Enter New Email">
          <n-input
            v-model:value="model.email"
            type="text"
            placeholder=""
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-button type="primary" @click="handleChangeEmail">
          Change Email
        </n-button>
      </n-form>
      <n-form ref="formRef" :model="model" class="essa">
        <n-form-item path="name" label="Enter New Password">
          <n-input
            v-model:value="model.password"
            type="password"
            placeholder=""
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-button type="primary" @click="handleChangePassword">
          Change Password
        </n-button>
      </n-form>
      <input type="file" @change="handleChangeAvatar">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NButton, NP, NH1, NForm, NFormItem, NInput, FormInst } from 'naive-ui';
import { useAuth } from '@/store/auth';
import { useFile } from '@/store/file';
import { storeToRefs } from 'pinia';
import { UpdateUserModel, UpdateUserPayload } from '@/types';
import { SHA256, enc } from 'crypto-js';

export default defineComponent({
  components: {
    NButton,
    NP,
    NH1,
    NForm,
    NFormItem,
    NInput,
  },
  setup() {
    const auth = useAuth();
    const file = useFile();

    const { user } = storeToRefs(auth);

    const formRef = ref<FormInst | null>(null);
    
    const model = ref<UpdateUserModel>({
      email: '',
      password: '',
    });

    const handleChangeEmail = () => {
      const payload: UpdateUserPayload = {
        email: model.value.email,
      };

      auth.changeEmail(payload);
    };

    const handleChangePassword = () => {
      const hashedPassword = SHA256(model.value.password);

      const payload: UpdateUserPayload = {
        password: hashedPassword.toString(enc.Hex),
      };

      auth.changePassword(payload);
    };

    const handleChangeAvatar = (e : any) => {
      file.upload(e.target.files[0])
    }

    const handleLogout = () => auth.logout();

    return {
      model,
      formRef,
      user,
      handleLogout,
      handleChangeEmail,
      handleChangePassword,
      handleChangeAvatar,
    };
  },
});
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}

.xd {
  margin-top: 5rem;
}

.essa {
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
