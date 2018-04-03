import store from '../store'
import * as types from '../action-type'

function setRegValFalseC(reg) {
  return {
    type: types.SET_REG_VAL_FALSE,
    reg,
  }
}

function setRegValTrueC(reg) {
  return {
    type: types.SET_REG_VAL_TRUE,
    reg,
  }
}
function setRegCheckTrueC(reg) {
  return {
    type: types.SET_REG_CHECK_TRUE,
    reg,
  }
}


export function setRegValTrue(reg) {
  console.log(reg)
  reg = { validation: true }
  return store.dispatch(setRegValTrueC(reg))
}

export function setRegValFalse(reg) {
  reg = { validation: false }
  return store.dispatch(setRegValFalseC(reg))
}

export function setRegCheckTrue(reg) {
  reg = { validation: true, check: true }
  return store.dispatch(setRegCheckTrueC(reg))
}
