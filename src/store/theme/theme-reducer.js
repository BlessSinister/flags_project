import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    setTheme: (state, action) => {
      return action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
