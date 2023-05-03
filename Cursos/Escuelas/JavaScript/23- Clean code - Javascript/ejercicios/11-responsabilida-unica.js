// Sín princiopio de responsabilidad única
class UserSetting {
  constructor(user, settings) {
    this.user = user;
    this.settings = settings;
  }

  changeSetting(settings) {
    if (this.verifyCredencials()) {

    }
  }

  verifyCredencials() { }
}

// Con princiopio de responsabilidad única
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredencials() {
    return true;
  }
}

class UserSetting extends UserAuth {
  constructor(user, settings) {
    super(user)
    this.settings = settings;
  }

  changeSetting(settings) {
    if (this.verifyCredencials()) {
      console.log(`Puede modificar su configuración`);
    } else {
      console.log(`No tiene acceso.`);
    }
  }
}

const newAccess = new UserSetting('Alex', 'Dark Mode');
newAccess.changeSetting();