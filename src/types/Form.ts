export interface SignUpModel {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface LoginModel {
  email: string;
  password: string;
}

export interface SignUpModelPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export interface FullName {
  firstName: string;
  lastName: string;
}
