const express = require('express');
const router = express.Router();


// Raíz por default.
router.get('/', (request, reponse) => {
  reponse.send('Hola mundo');
});

// Exportamos las rutas.
module.exports = router;