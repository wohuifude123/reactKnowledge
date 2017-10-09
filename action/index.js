import { createStore } from 'redux'
import todoApp from './reducers'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'


const reducer_01 = function (...args) {
    console.log('Reducer was called with args', args)
}

const store_01 = createStore(reducer_01)




let store = createStore(todoApp)

// Log the initial state
// Log 载入正式记录 initial 最初的；开始的
// 打印初始状态
console.log(store.getState())





// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// Dispatch some actions
// dispatch 派遣
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()
