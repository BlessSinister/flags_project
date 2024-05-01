export const CURRENT_COUNTRY = 'CURRENT_COUNTRY'
export const addCurrentCountry = (currentCountry) => ({
  type: CURRENT_COUNTRY,
  payload: currentCountry,
})
