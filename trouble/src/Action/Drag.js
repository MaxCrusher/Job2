import store from '../store'
import * as types from '../action-type'

function setDragMasC(mas) {
  return {
    type: types.SET_DRAG_MAS,
    mas,
  }
}
function setDragIdC(id) {
  return {
    type: types.SET_DRAG_ID,
    id,
  }
}
  
export function setDragId(id) {
  return store.dispatch(setDragIdC(id))
}
export function setDragMas(mas) {
  return store.dispatch(setDragMasC(mas))
}
