import { combineReducers } from 'redux'

/*
    初始化应用state的时候，Redux调用dispatch初始化了一个 action ({ type: '@@redux/INIT' })
    reducer的入参为(state, action)
    state还没有被初始化，自然为undefined
 */

import {
    REQUEST_POSTS,
    RECEIVE_POSTS
} from './actions'

function posts(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

// 初始化 state

function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {// 请求，增加state
                [action.subreddit]: posts(state[action.subreddit], action)
            })
        default:
            return state
    }
}

/*

初始化 state

function postsBySubreddit(state = { abc: 123 }, action) {
    switch (action.type) {
        default:
            return state
    }
}
*/

const rootReducer = combineReducers({
    postsBySubreddit
})

export default rootReducer
