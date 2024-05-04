import { SET_REGION } from './region-filter-actions'

export const setRegionReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_REGION: {
      console.log(payload)
      return payload[0].filter((item) => item.region === payload[1])
    }
    default: {
      return state
    }
  }
}
