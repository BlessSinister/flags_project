import { CURRENT_COUNTRY } from './current-actions'

export const currentCountryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case CURRENT_COUNTRY: {
      return payload[0].filter((item) => item.name.common === payload[1])
    }
    default: {
      return state
    }
  }
}
