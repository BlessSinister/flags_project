import { combineReducers } from 'redux'
import { themeReducer } from './theme/theme-reducer'
import { allCountriesReducer } from './countries/countries-reducer'
import { currentCountryReducer } from './current_countries/current-reducer'
import { searchCountryReducer } from './search-country/reducer-search'

export const rootReducer = combineReducers({
  theme: themeReducer,
  allCountries: allCountriesReducer,
  currentCountry: currentCountryReducer,
  searchCountry: searchCountryReducer,
})
