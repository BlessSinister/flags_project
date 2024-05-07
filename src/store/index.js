import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './theme/theme-reducer'
import { searchCountrySlice } from './search-country/reducer-search'
import { setRegionSlice } from './region-filter/region-filter-reducer'
import { currentCountrySlice } from './current_countries/current-reducer'
import { allCountriesSlice } from './countries/countries-reducer'

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    searchCountry: searchCountrySlice.reducer,
    regionFilter: setRegionSlice.reducer,
    currentCountry: currentCountrySlice.reducer,
    allCountries: allCountriesSlice.reducer,
  },
  devTools: true,
})
