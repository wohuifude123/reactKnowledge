import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

// rootReducer 构造最原始的 store
// 寻找 reducer
export default function configureStore(preloadedState) {
    return createStore(
        rootReducer, // 从 reducers.js 获取初始化 state
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}

// return createStore( rootReducer, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware) );
