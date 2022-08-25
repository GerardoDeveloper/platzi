const bcrypt = require('bcrypt');

const password = '1234Segura!';

// Genera el hash del string.
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    // Permite comprar el hash con el string a encriptado y nos devuelve un true o false.
    bcrypt.compare(password, hash, function(err, res) {
        // console.log(err)
        console.log(res)
    })
});