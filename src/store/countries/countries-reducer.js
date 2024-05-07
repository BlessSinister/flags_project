import { createSlice } from '@reduxjs/toolkit'

export const allCountriesSlice = createSlice({
  name: 'allCountries',
  initialState: [],
  reducers: {
    allCountries: (state, action) => {
      console.log(action)
      return action.payload
    },
  },
})
export const { allCountries } = allCountriesSlice.actions
