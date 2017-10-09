import { combineReducers } from 'redux'

/*
    初始化应用state的时候，Redux调用dispatch初始化了一个 action ({ type: '@@redux/INIT' })
    reducer的入参为(state, action)
    state还没有被初始化，自然为undefined
 */
function postsBySubreddit(state = { abc: 123 }, action) {
    switch (action.type) {
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsBySubreddit
})

export default rootReducer
