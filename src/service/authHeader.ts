import { User } from '@/types';

export const authHeader = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      let user: User = JSON.parse(currentUser);

      if (user && user.token.type) {
        return { Authorization: `Bearer ${user.token.type}` };
      }
    }
}