const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {

    // Sí el estado es COMPLETADO
    if (xhttp.readyState === 4) {

      // Sí el estado es OK
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    }
  }

  xhttp.send();
}

// Primera petición
fetchData(`${API}/products`, (error, response) => {
  if (error) {
    console.error(`error: ${error.message}`);
  }

  console.log(response);

  // Sedunda petición.
  fetchData(`${API}/products/${response[0].id}`, (error2, response2) => {
    if (error2) {
      console.log(error2.message);
    }

    console.log(response2);
  })
});
