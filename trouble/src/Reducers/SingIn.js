import * as types from '../action-type'

const initialState = {
  val: false,
  message: '',
}

export default function sing(state = initialState, action) {
  switch (action.type) {
    case types.SET_VAL_TRUE:
      return Object.assign({}, state, { val: action.sing.val, message: action.sing.message })
    case types.SET_VAL_FALSE:
      return Object.assign({}, state, { val: action.sing.val, message: action.sing.message })
    default: {
      return state
    } 
  }
}

