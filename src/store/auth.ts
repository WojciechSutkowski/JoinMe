import { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import router from '@/router';

import AuthService from '@/service/auth/auth.service';
import {
  LoginModel,
  LoginResponse,
  RegisterResponse,
  SignUpModelPayload,
  UpdateUserPayload,
  User,
  UserPayload,
} from '@/types';
import { ToastType } from '@/types';
import { toastNotification } from '@/helpers';

export const useAuth = defineStore('auth', {
  state: () => ({
    user: {} as User,
  }),
  actions: {
    async login(payload: LoginModel): Promise<void> {
      try {
        const response: AxiosResponse<LoginResponse, any> =
          await AuthService.login(payload);
        this.user = response.data;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        router.push('/dashboard');
      } catch (err) {
        toastNotification(
          ToastType.ERROR,
          'Błędne dane. Spróbuj ponownie.',
        );
      }
    },
    async register(payload: SignUpModelPayload): Promise<void> {
      try {
        const response: AxiosResponse<RegisterResponse, any> =
          await AuthService.register(payload);
        if (response.data.id) {
          const newPayload: LoginModel = {
            email: payload.email,
            password: payload.password,
          };
          this.login(newPayload);
        }
      } catch (err) {
        toastNotification(ToastType.ERROR, 'Rejestracja nie powiodła się.');
      }
    },
    async changeEmail(payload: UpdateUserPayload): Promise<void> {
      try {
        await AuthService.changeEmail(payload);
        toastNotification(ToastType.SUCCESS, 'Email zmieniony pomyślnie.');
      } catch (err) {
        toastNotification(ToastType.ERROR, 'Błąd! Email nie został zmieniony.');
      }
    },
    async changePassword(payload: UpdateUserPayload): Promise<void> {
      try {
        await AuthService.changePassword(payload);
        toastNotification(ToastType.SUCCESS, 'Hasło zmienione pomyślnie.');
      } catch (err) {
        toastNotification(ToastType.ERROR, 'Błąd! Hasło nie zostało zmienione.');
      }
    },
    async update(payload: UserPayload): Promise<void> {
      try {
        await AuthService.update(payload);
        toastNotification(ToastType.SUCCESS, 'Avatar zmieniony pomyślnie.');
      } catch (err) {
        toastNotification(ToastType.ERROR, 'Błąd! Avatar nie został zmieniony.');
      }
    },
    logout(): void {
      (this.user = {} as User), router.push('/');
      localStorage.removeItem('currentUser');
    },
  },
});
