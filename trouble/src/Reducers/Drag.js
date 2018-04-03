import * as types from '../action-type'

const initialState = {
  mas: [],
  id: 1,  
}

export default function drag(state = initialState, action) {
  switch (action.type) {
    case types.SET_DRAG_ID:
      return { ...state, id: action.id }
    case types.SET_DRAG_MAS:
      return { ...state, mas: action.mas }
    default: 
      return state
  }
}
