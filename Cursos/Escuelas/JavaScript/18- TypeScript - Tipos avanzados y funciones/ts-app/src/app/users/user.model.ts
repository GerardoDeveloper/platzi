import { BaseModel } from './../base.model';

enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

interface User {
  id: string | number;
  username: string;
  role: ROLES;
}

export { ROLES, User };
