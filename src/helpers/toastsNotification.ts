import { ToastType } from '@/types';
import { useToast, POSITION } from 'vue-toastification';

const toast = useToast();

export const toastNotification = (
  type: ToastType,
  msg: string,
  time: number = 2000,
) => {
  if (type === ToastType.SUCCESS) {
    toast.success(msg, {
      timeout: time,
      toastClassName: 'custom_toast',
      position: POSITION.BOTTOM_RIGHT,
    });
  } else if (type === ToastType.INFO) {
    toast.info(msg, {
      timeout: time,
      toastClassName: 'custom_toast',
      position: POSITION.BOTTOM_RIGHT,
    });
  } else {
    toast.error(msg, {
      timeout: time,
      toastClassName: 'custom_toast',
      position: POSITION.BOTTOM_RIGHT,
    });
  }
};
