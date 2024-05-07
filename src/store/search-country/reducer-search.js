import { createSlice } from '@reduxjs/toolkit'

export const searchCountrySlice = createSlice({
  name: 'searchCountry',
  initialState: [],
  reducers: {
    setSearchCountry: (state, action) => {
      return action.payload[0].filter((item) =>
        item.name.common.toLowerCase().includes(action.payload[1].toLowerCase())
      )
    },
  },
})
export const { setSearchCountry } = searchCountrySlice.actions
