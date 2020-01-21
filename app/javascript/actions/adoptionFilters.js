export const types = {
  SET_CITY_FILTER: 'ADOPTION_FILTERS/SET_CITY_FILTER',
  SET_NGO_ID_FILTER: 'ADOPTION_FILTERS/SET_NGO_ID_FILTER',
  SET_SEX_FILTER: 'ADOPTION_FILTERS/SET_SEX_FILTER',
  SET_DESCRIPTION_FILTER: 'ADOPTION_FILTERS/SET_DESCRIPTION_FILTER'
};

export const setCityFilter = (city = '') => ({
  type: types.SET_CITY_FILTER,
  city
});

export const setNgoIdFilter = (ngo_id = '') => ({
  type: types.SET_NGO_ID_FILTER,
  ngo_id
});

export const setSexFilter = (sex = '') => ({
  type: types.SET_SEX_FILTER,
  sex
});

export const setDescriptionFilter = (description = '') => ({
  type: types.SET_DESCRIPTION_FILTER,
  description
});
