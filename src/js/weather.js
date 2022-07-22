// https://www.weatherbit.io/api
'use strict';
import { fetchCurrentWeather } from './weather-api';
import weatherCardTemplate from '../templates/weather-card.hbs';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = (seconds, timezone) => {
  const currentTimezone = -new Date().getTimezoneOffset() * 60;

  const diffOfTimeZone = timezone - currentTimezone;

  const date = new Date((seconds + diffOfTimeZone) * 1000);

  return `${new String(date.getHours()).padStart(2, 0)}:${new String(
    date.getMinutes()
  ).padStart(2, 0)}`;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  let searchQuery = event.currentTarget.elements.user_country.value;

  fetchCurrentWeather(searchQuery)
    .then(data => {
      console.log(data);

      data.sys.sunset = convertSecondsToHoursAndMinutes(
        data.sys.sunset,
        data.timezone
      );
      data.sys.sunrise = convertSecondsToHoursAndMinutes(
        data.sys.sunrise,
        data.timezone
      );

      weatherWrapperEl.innerHTML = weatherCardTemplate(data);
    })
    .catch(err => {
      if (err.message === '404') {
        console.log('Невірна назва міста');
      }

      console.dir(err);
    });
};

weatherFormEl.addEventListener('submit', onSearchFormSubmit);

// if (currentTimezone < timezone) {
//   diffOfTimeZone = timezone - currentTimezone;
//   date = new Date((seconds + diffOfTimeZone) * 1000);
// } else {
//   diffOfTimeZone = currentTimezone - timezone;
//   date = new Date((seconds - diffOfTimeZone) * 1000);
// }
