import { ADD_THEME } from './theme-actions'

export const themeReducer = (state = 'dark', action) => {
  switch (action.type) {
    case ADD_THEME: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
