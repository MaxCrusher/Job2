import { combineReducers } from 'redux'
import SingIn from '../Reducers/SingIn'
import Registration from '../Reducers/Registation'

const allReducers = combineReducers({
  sing: SingIn,
  registration: Registration,
})
export default allReducers
