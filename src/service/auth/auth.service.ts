import instance from '../axios-config';
import {
  LoginModel,
  UpdateUserPayload,
  SignUpModelPayload,
  UserPayload,
} from '@/types';

class AuthService {
  login(payload: LoginModel) {
    return instance.post('api/auth/login', payload);
  }
  register(payload: SignUpModelPayload) {
    return instance.post('api/auth/register', payload);
  }
  changeEmail(payload: UpdateUserPayload) {
    return instance.post('api/user', payload);
  }
  changePassword(payload: UpdateUserPayload) {
    return instance.post('api/user/password', payload);
  }
  update(payload: UserPayload) {
    return instance.post('api/user', payload);
  }
  // Example querry with param:
  getUser(id: string | number) {
    return instance.get('api/auth/user?id=' + id);
  }
}

export default new AuthService();
