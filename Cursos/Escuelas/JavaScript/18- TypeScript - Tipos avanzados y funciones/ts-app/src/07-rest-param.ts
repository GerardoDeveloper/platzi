import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }

  return false;
};

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

export const checkRole = (role1: string, role2: string): boolean => {
  if (currentUser.role === role1) {
    return true;
  }

  if (currentUser.role === role2) {
    return true;
  }

  return false;
};

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);

// Recibviendo rest param como argumento.
export const checkRoleV2 = (roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

// Le enviamos un array de roles
const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV2', rta3);

// Utilizando el spread operator como argumento.
export const checkRoleV3 = (...roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

// Le enviamos los parámetros.
const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV2', rta4);
