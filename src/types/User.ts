interface Name {
  title: string;
  first: string;
  last: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Dob {
  date: Date;
  age: number;
}

interface Registered {
  date: Date;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserInTable {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export enum roles {
  ROLE_USER = 'ROLE_USER',
  ROLE_ADMIN = 'ROLE_ADMIN',
}

export interface userRoles {
  id: number;
  name: roles;
  objectId: any;
}

export interface token {
  token: string;
  type: string;
}

export interface Avatar {
  id: string;
  name: string;
  extension: string;
  timestamp: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: Avatar;
  roles: userRoles[];
  token: token;
}

export interface UserPayload {
  avatarId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  avatar?: Avatar;
  roles?: userRoles[];
  token?: token;
}
