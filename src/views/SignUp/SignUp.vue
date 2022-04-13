<template>
  <div class="sign-up">
    <n-form ref="formRef" :model="model" :rules="rules" class="sign-up__form">
      <n-h1>Nie masz jeszcze konta?</n-h1>
      <n-h2>Dołącz do naszej społeczności</n-h2>
      <n-form-item path="name" label="Imię i nazwisko">
        <n-input
          type="text"
          placeholder=""
          v-model:value="model.name"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="email" label="Email">
        <n-input type="text" placeholder="" v-model:value="model.email" />
      </n-form-item>
      <div class="sign-up__password-container">
        <n-form-item path="password" label="Hasło" class="sign-up__password">
          <n-input
            type="password"
            placeholder=""
            v-model:value="model.password"
          />
          <n-popover trigger="hover" placement="right" class="sign-up__tooltip">
            <template #trigger>
              <icon size="20">
                <information></information>
              </icon>
            </template>
            Hasło musi zawierać:
            <ul>
              <li>Przynajmniej 9 znaków</li>
              <li>Przynajmniej 1 cyfrę</li>
              <li>Przynajmniej jeden symbol specjalny</li>
              <li>Przynajmniej jedną wielką literę</li>
              <li>Przynajmniej jedną małą literę</li>
            </ul>
          </n-popover>
        </n-form-item>
        <password-meter :password="model.password" @score="handleScore" />
      </div>

      <div class="sign-up__buttons">
        <n-button type="primary" @click="handleCreateAccount">
          Stwórz konto
        </n-button>
        <n-p
          ><span> Masz już konto? </span>
          <router-link to="/login">Zaloguj się</router-link>
        </n-p>
      </div>
    </n-form>
    <div class="sign-up__footer">
      <n-p>Warunki użytkowania</n-p>
      <n-p>Pomoc techniczna</n-p>
      <n-p>&copy; JoinMe 2022</n-p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { enc, SHA256 } from 'crypto-js';
import PasswordMeter from 'vue-simple-password-meter';
import {
  FormInst,
  FormItemInst,
  FormRules,
  NButton,
  NForm,
  NFormItem,
  NH1,
  NH2,
  NInput,
  NP,
  NPopover,
} from 'naive-ui';
import { Information } from '@vicons/carbon';
import { Icon } from '@vicons/utils';
import { SignUpModel, SignUpModelPayload } from '@/types';
import { splitFullName, validateEmail, validateFullName } from '@/helpers';
import { useAuth } from '@/store/auth';

export default defineComponent({
  components: {
    NButton,
    NForm,
    NFormItem,
    NH1,
    NH2,
    NP,
    NInput,
    PasswordMeter,
    Information,
    Icon,
    NPopover,
  },
  setup() {
    const formRef = ref<FormInst | null>(null);
    const auth = useAuth();
    const rPasswordFormItemRef = ref<FormItemInst | null>(null);
    const passwordScore = ref(0);

    const model = ref<SignUpModel>({
      name: '',
      email: '',
      phone: '',
      password: '',
    });

    const handleScore = ({ score }: { score: any }) =>
      (passwordScore.value = score);

    const rules: FormRules = {
      name: [
        {
          required: true,
          validator: validateFullName,
          message: 'Please enter both first and last name',
          trigger: 'blur',
        },
      ],
      email: [
        {
          required: true,
          validator: validateEmail,
          message: 'Please enter a valid email address',
          trigger: 'blur',
        },
      ],
      phone: [
        {
          required: false,
          // validator: validatePhone,
          message: 'Please enter a valid phone number',
          trigger: 'blur',
        },
      ],
      password: [
        {
          validator: () => passwordScore.value === 4,
          trigger: 'blur',
        },
      ],
    };

    const handleCreateAccount = async (e: MouseEvent): Promise<void> => {
      e.preventDefault();
      await formRef.value?.validate((errors) => {
        if (errors) {
          return;
        }
      });

      const hashedPassword = SHA256(model.value.password);

      const { firstName, lastName } = splitFullName(
        model.value.name.trim().split(' '),
      );

      const payload: SignUpModelPayload = {
        firstName,
        lastName,
        email: model.value.email,
        phone: model.value.phone,
        password: hashedPassword.toString(enc.Hex),
      };

      auth.register(payload);
    };

    return {
      formRef,
      rPasswordFormItemRef,
      model,
      rules,
      handleCreateAccount,
      handleScore,
    };
  },
});
</script>

<style lang="scss" src="./SignUp.scss" />
