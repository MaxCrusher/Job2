import * as types from '../action-type'

const initialState = {
  mas: [],
  id: 1,  
}

export default function drag(state = initialState, action) {
  switch (action.type) {
    case types.SET_DRAG_ID:
      return Object.assign({}, state, { id: action.id })
    case types.SET_DRAG_MAS:
      return Object.assign({}, state, { mas: action.mas })
    default: 
      return state
  }
}
