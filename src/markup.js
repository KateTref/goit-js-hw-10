function createCoutriesListMarkup({ flags, name }) {
  return `<li class="country-list__item">
      <img
        class="country-list__flag"
        src="${flags.svg}"
        width="30px"
        height="20px"
      />
      <p class="country-list__name">${name.official}</p>
    </li>`;
}

function createCountriesDataMarkup({ flags, name, capital, population, languages }) {
    const langString = Object.values(languages).join(', ');
    return `<div class="country-info__title ">
    <img
        class="country-info__title__flag"
        src="${flags.svg}"
        width="30px"
        height="20px"
      />
      <h1 class="country-info__title__text">${name.official}</h1>
      </div>
      <div class="country-info__dscr">
      <ul class="country-info__dscr__list">
      <li class="country-info__dscr__item">Capital:<span>${capital}</span></li>
      <li class="country-info__dscr__item">Population:<span>${population}</span></li>
      <li class="country-info__dscr__item">Languages:<span>${langString}</span></li>
      </ul></div>`;
};

export {createCoutriesListMarkup, createCountriesDataMarkup}
