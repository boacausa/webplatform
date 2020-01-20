export const types = {
  SET_SEX_FILTER: 'ADOPTION_FILTERS/SET_SEX_FILTER',
  SET_DESCRIPTION_FILTER: 'ADOPTION_FILTERS/SET_DESCRIPTION_FILTER',
  SET_CITY_FILTER: 'ADOPTION_FILTERS/SET_CITY_FILTER'
};

export const setSexFilter = (sex = '') => ({
  type: types.SET_SEX_FILTER,
  sex
});

export const setDescriptionFilter = (description = '') => ({
  type: types.SET_DESCRIPTION_FILTER,
  description
});

export const setCityFilter = (city = '') => ({
  type: types.SET_CITY_FILTER,
  city
});
