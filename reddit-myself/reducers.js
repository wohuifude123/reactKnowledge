import { combineReducers } from 'redux'
import {
    SELECT_SUBREDDIT,
    // INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from './actions'
/*
    开发一个 函数来做为主 reducer，它调用多个子 reducer 分别处理 state 中的一部分数据，
    然后再把这些数据合成一个大的单一对象。

    主 reducer 并不需要设置初始化时完整的 state。初始时，如果传入 undefined, 子 reducer 将负责返回它们的默认值。
 */
function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}


const rootReducer = combineReducers({
    // postsBySubreddit,
    selectedSubreddit
})

/*
    combineReducers() 所做的只是生成一个函数，这个函数来调用你的一系列 reducer，
    每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，
    然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象。
 */

export default rootReducer
