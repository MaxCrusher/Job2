import * as types from '../action-type'

const initialState = {
  validation: false,
  check: false,
}

export default function registr(state = initialState, action) {
  switch (action.type) {
    case types.SET_REG_VAL_TRUE:
      return { ...state, validation: action.reg.validation }
    case types.SET_REG_VAL_FALSE:
      return { ...state, validation: action.reg.validation }
    case types.SET_REG_CHECK_TRUE:
      return { ...state, validation: action.reg.validation, check: action.reg.check }
    default: {
      return state
    } 
  }
}
