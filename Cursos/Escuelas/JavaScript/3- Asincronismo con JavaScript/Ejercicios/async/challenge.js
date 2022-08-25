import { fetchData } from "../utils/fetch.js";

const URL_API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
  try {
    const dataResponse = await fetchData(url_api);
    const character = await fetchData(`${url_api}${dataResponse.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(dataResponse.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
}

anotherFunction(URL_API);

