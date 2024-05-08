import { createSlice } from '@reduxjs/toolkit'

export const setRegionSlice = createSlice({
  name: 'setRegion',
  initialState: [],
  reducers: {
    setRegion: (state, action) => {
      return action.payload[0].filter(
        (item) => item.region === action.payload[1]
      )
    },
    serchSetRegion: (state, action) => {
      console.log(action)
      return action.payload[0].filter((item) => item === action.payload[1])
    },
  },
})

export const { setRegion, serchSetRegion } = setRegionSlice.actions
