import fetch from 'isomorphic-fetch'

// 是为了后面在 reducer 中可以匹配到对应到 type
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

// 接收到添加的请求，去找 reducers 实现
export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
    /*
    return {
        type: SELECT_SUBREDDIT,
        subreddit: subreddit
    };
     */
}
