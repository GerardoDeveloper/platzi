/**
 * Realiza una petición HTTP utilizando XMLHttpRequest.
 * @param {string} url_api URL de la API.
 * @returns Promise
 */
export const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (() => {
      if (xhttp.readyState === 4) {
        (xhttp.status === 200) ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error('Error ', url_api));
      }
    });
    xhttp.send();
  });
};