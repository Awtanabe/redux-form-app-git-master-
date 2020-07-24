
import {combineReducers} from 'redux'
import {reducer as FormReducer} from 'redux-form'

const reducer = combineReducers({
  form: FormReducer
})

export default reducer