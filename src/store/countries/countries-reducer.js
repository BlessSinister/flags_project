import { ADD_COUNTRIES } from './countries-actions'

export const allCountriesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_COUNTRIES: {
      return payload
    }
    default: {
      return state
    }
  }
}
