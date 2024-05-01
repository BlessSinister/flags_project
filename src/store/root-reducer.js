import { combineReducers } from 'redux'
import { themeReducer } from './theme/theme-reducer'
import { allCountriesReducer } from './countries/countries-reducer'

export const rootReducer = combineReducers({
  theme: themeReducer,
  allCountries: allCountriesReducer,
})
