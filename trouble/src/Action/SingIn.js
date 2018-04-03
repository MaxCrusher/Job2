import store from '../store'
import * as types from '../action-type'

function setSingValTrueC(sing) {
  return {
    type: types.SET_VAL_TRUE,
    sing,
  }
}
function setSingValFalseC(sing) {
  return {
    type: types.SET_VAL_FALSE,
    sing,
  }
}

export function setSingValTrue(sing) {
  sing = { val: true, message: '' }
  return store.dispatch(setSingValTrueC(sing))
}
export function setSingValFalse(sing) {
  sing = { val: false, message: 'erorr' }
  return store.dispatch(setSingValFalseC(sing))
}
