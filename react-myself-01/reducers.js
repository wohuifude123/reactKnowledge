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
    console.log("action.type=="+action.type)
    switch (action.type) {
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
// action ({ type: '@@redux/INIT' })

function postsBySubreddit(state = {abc: 123}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            console.log("接收数据了")
        case REQUEST_POSTS:
            console.log("action.subreddit=="+action.subreddit)
            let ob1 = Object.assign({}, state, {// 请求，增加state
                [action.subreddit]: posts(state[action.subreddit], action)
            })
            for(var i in ob1)
            {
                console.log(i+"="+ob1[i])
                if(typeof(ob1[i])=='object')
                {
                    for(var j in ob1[i])
                    {
                        console.log(j+"="+ob1[i][j])
                    }
                }
            }
            return ob1;
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
