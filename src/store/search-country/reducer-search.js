import { SEARCH_COUNTRY } from './actino-search'

export const searchCountryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SEARCH_COUNTRY: {
      console.log(payload)
      return payload[0].filter((item) => item.name.common.includes(payload[1]))
    }
    default: {
      return state
    }
  }
}
