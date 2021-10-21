import { combineReducers,applyMiddleware,createStore } from 'redux'
import {combineEpics,createEpicMiddleware} from 'redux-observable'
import { editUserEpic, getUserByEmailEpic } from './user/middlewares'
import { userReducer } from './user/reducer'
import logger from 'redux-logger'

const rootEpic = combineEpics(getUserByEmailEpic,editUserEpic)

const rootReducer = combineReducers({user:userReducer})

const epicMiddleware = createEpicMiddleware();

function configureStore(){
    const store = createStore(rootReducer,applyMiddleware(epicMiddleware,logger))
    epicMiddleware.run(rootEpic);

    return store
}

const store = configureStore();

export default store


export type RootState = ReturnType<typeof rootReducer>

