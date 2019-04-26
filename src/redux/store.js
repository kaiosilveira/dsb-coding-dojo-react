import { createStore, combineReducers, applyMiddleware } from "redux"
import users from './users'
import usersLogics from './users/logic'
import todos from './todos'
import { createLogicMiddleware } from "redux-logic"

const logics = [...usersLogics]
const store = createStore(
    combineReducers({ users, todos }),
    applyMiddleware(createLogicMiddleware(logics))
)

export default store