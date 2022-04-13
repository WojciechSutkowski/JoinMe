import { User } from './User';

export interface RegisterResponse {
  id: string;
}

export interface LoginResponse extends User {}

export interface UpdateUserModel {
  email: string;
  password: string;
}

export interface UpdateUserPayload {
  email?: string;
  password?: string;
}
