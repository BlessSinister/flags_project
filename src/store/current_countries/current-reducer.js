import { createSlice } from '@reduxjs/toolkit'

export const currentCountrySlice = createSlice({
  name: 'currentCountry',
  initialState: [],
  reducers: {
    setCurrentCountry: (state, action) => {
      return action.payload[0].filter(
        (item) => item.name.common === action.payload[1]
      )
    },
  },
})
export const { setCurrentCountry } = currentCountrySlice.actions
