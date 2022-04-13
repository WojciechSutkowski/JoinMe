import { FullName } from '@/types';

export const splitFullName = (name: string[]): FullName => ({
  firstName: name.slice(0, 1).join(''),
  lastName: name.slice(1).join(' '),
});
