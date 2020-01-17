export const types = {
  SET_SEX_FILTER: 'ADOPTION_FILTERS/SET_SEX_FILTER'
};

const setSexFilter = (sex = '') => ({
  type: types.SET_SEX_FILTER,
  sex
});

export default setSexFilter;
