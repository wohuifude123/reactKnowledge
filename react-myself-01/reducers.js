import { combineReducers } from 'redux'


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
