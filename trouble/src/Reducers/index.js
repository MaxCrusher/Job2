import { combineReducers } from 'redux'
import SingIn from './SingIn'
import Registration from './Registation'
import Drag from './Drag'

const allReducers = combineReducers({
  sing: SingIn,
  reg: Registration,
  drag: Drag,
})
export default allReducers
