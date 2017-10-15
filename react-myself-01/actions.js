import fetch from 'isomorphic-fetch'

// 是为了后面在 reducer 中可以匹配到对应到 type

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

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

/*
    let b2 = (avc) => avc
    let a1 = b2('世界');

    console.log("a1==" + a1)

    function selectSubreddit(subreddit) {
      return {
        type: 'SELECT_SUBREDDIT',
        subreddit
      }
    }

    let action = selectSubreddit("ub");

    console.log("action.subreddit==" + action.subreddit)
 */


function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

/*
function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}
 */
function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit: subreddit
    };
}


// fetchPostsIfNeeded 需要用的函数

function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit)) // 请求数据，寻找 reducer 处理 type: REQUEST_POSTS
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json))) // 接收数据
    }
}

function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit];
    console.log('shouldFetchPosts=开始');
    console.log(posts);
    console.log(subreddit);
    console.log(state);
    console.log('shouldFetchPosts=结束');
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        // console.log('结果=='+shouldFetchPosts(getState(), subreddit));
        if (shouldFetchPosts(getState(), subreddit)) { // true
            return dispatch(fetchPosts(subreddit))
        }
    }
}
