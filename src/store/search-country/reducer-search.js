import { createSlice } from '@reduxjs/toolkit'

export const searchCountrySlice = createSlice({
  name: 'searchCountry',
  initialState: [],
  reducers: {
    setSearchCountry: (state, action) => {
      return action.payload[0].filter((item) =>
        item.name.common.includes(action.payload[1])
      )
    },
  },
})
export const { setSearchCountry } = searchCountrySlice.actions
