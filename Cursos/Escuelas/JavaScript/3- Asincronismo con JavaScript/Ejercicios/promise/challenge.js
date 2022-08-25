const fetchData = (url_api) => {
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

const URL_API = 'https://rickandmortyapi.com/api/character/';

fetchData(URL_API)
  .then(response => {
    console.log(response.info.count);
    return fetchData(`${URL_API}${response.results[0].id}`)
  })
  .then(response => {
    console.log(response.name);
    return fetchData(response.origin.url)
  })
  .then(response => {
    console.log(response.dimension);
  })
  .catch(error => {
    console.error(error);
  })