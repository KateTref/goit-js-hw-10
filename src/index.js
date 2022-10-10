import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { createCoutriesListMarkup, createCountriesDataMarkup } from './markup';


const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector("#search-box");
const listRef = document.querySelector(".country-list");
const infoCountryRef = document.querySelector(".country-info");

inputRef.addEventListener("input", debounce(onSearchCountry, DEBOUNCE_DELAY));

let inputValue = "";

function renderCreateDataMurkup(data) {
    const markup = data.map(createCountriesDataMarkup).join("");
    infoCountryRef.insertAdjacentHTML("beforeend", markup);
};
function renderCreateListMurkup(data) {
    const markup = data.map(createCoutriesListMarkup).join("");
    listRef.insertAdjacentHTML("beforeend", markup);
}

function informInvalidRequest() {
    return Notify.info("Too many matches found. Please enter a more specific name.");
}
function onNotFound() {
    return Notify.failure("Oops, there is no country with that name.");
}

function clearResultData() {
    infoCountryRef.innerHTML = "";
}
function clearResaultList() {
    listRef.innerHTML = "";
}

function onSearchCountry(event) {
    clearResultData();
    clearResaultList();

    inputValue = event.target.value.trim().toLowerCase();
    if (!inputValue) {
        return
    }
    
    fetchCountries(inputValue)
        .then(data => {
            console.log(data.length);
            if (data.length === 1) {
                renderCreateDataMurkup(data);
            } else if (data.length > 1 && data.length <= 10) {
                renderCreateListMurkup(data);
            } else {
                informInvalidRequest();
        }
        })
        .catch(error => {
            onNotFound();
    })
};