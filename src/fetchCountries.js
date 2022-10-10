const BASED_URL = "https://restcountries.com/v3.1/name/";
const BASED_PARAMS = "?fields=name,capital,population,flags,languages";

export function fetchCountries(name) {
    return fetch(`${BASED_URL}${name}${BASED_PARAMS}`)
    .then(response => {
        if (!response.ok) {
           throw new Error(response.status);
    }
    return response.json();
  })
}