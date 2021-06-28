import auth from './ducks/auth'
import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
    auth,
})

export default function store(){
    return createStore(reducers)
}