// Declaración de un enum. NOTA: Es de buena práctica declarar los enums en mayúsculas junto con sus propiedades.
enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

// Declarando el tipo User.
type User = {
  username: string;
  role: string;
};

const gerardo: User = {
  username: 'gerardo',
  role: ROLES.ADMIN, // Utilizando los enum.
};

export {ROLES, User}