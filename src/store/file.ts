import { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';

import FileService from '@/service/file/file.service';
import { Avatar, UserPayload } from '@/types';
import { ToastType } from '@/types';
import { toastNotification } from '@/helpers';
import { useAuth } from './auth';

export const useFile = defineStore('file', {
  state: () => ({
    file: {} as string,
  }),
  actions: {
    async upload(payload: FormData): Promise<void> {
      try {
        const response: AxiosResponse<Avatar, any> = await FileService.upload(
          payload,
        );
        const auth = useAuth();
        auth.user.avatar = response.data;
        const userPayload: UserPayload = {
          avatarId: auth.user.avatar.id,
        };
        auth.update(userPayload);
      } catch (err) {
        toastNotification(ToastType.ERROR, 'Something is wrong');
      }
    },
  },
});
