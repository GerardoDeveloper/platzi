const readyState = {
  request_not_initialized : 0,
  server_connection_established : 1,
  request_received : 2,
  processing_request: 3,
  request_finished_and_response_is_ready: 4
};

const statuss = {
  OK: 200,
  Forbidden: 403,
  Page_not_found: 404
};


function loadDoc(url_api) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === readyState.request_finished_and_response_is_ready && this.status === statuss.OK) {
      callBack(null, JSON.parse(xhttp.responseText));
    } else {
      const error = new Error('Error' + url_api);
      return callBack(error, null);
    }
  };
  xhttp.open("GET", url_api, true);
  xhttp.send();
}

// loadDoc("https://rickandmortyapi.com/api/character");

const URL_API = 'https://rickandmortyapi.com/api/character/';

// funcion principal
function fetchData(url_api, callback) {
  // instanciamos la conexion
  let xhttp = new XMLHttpRequest();
  // abrir una conexion con el metodo, la ruta y si es asincrono
  xhttp.open('GET', url_api, true);
  // validacion del llamado
  xhttp.onreadystatechange = (event) => {
    // el state 4 es el ultimo de la peticion
    if (xhttp.readyState === readyState.request_finished_and_response_is_ready) {
      // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
      if (xhttp.status === statuss.OK) {
        // el primer valor es el err, y el siguiente el resultado
        // ejecutamos el callback con el resultado
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // si no es 200
        let error = new Error('Error: ' + url_api);
        // matamos el proceso con un error
        return callback(error, null);
      }
    }
  }
  // por ultimo enviamos la peticion
  xhttp.send();
}

fetchData(URL_API, (error1, data1) => {
  if (error1) {
    return console.error(error1);
  }

  fetchData(URL_API + data1.results[0].id, (error2, data2) =>{
    if (error2) {
      return console.error(error2);
    }

    fetchData(data2.origin.url, (error3, data3) =>{
      if (error3) {
        return console.error(error3);
      }

      // mostramos los resultados :) 
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);

      // rutas de las peticiones en orden
      console.log(URL_API);
      console.log(URL_API + data1.results[0].id);
      console.log(data2.origin.url);
    })
  })
});