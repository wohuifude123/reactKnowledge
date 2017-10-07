import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) { // 请求
    return {
        type: REQUEST_POSTS,
        subreddit
    }
    /*
    return {
        type: SELECT_SUBREDDIT,
        subreddit: subreddit
    };
    */
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) { // 接收
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

/*

function receivePosts(subreddit, json) {
    // 接收
    return {
        type: RECEIVE_POSTS,
        subreddit: subreddit,
        posts: json.data.children.map(function (child) {
            return child.data;
        }),
        receivedAt: Date.now()
    };
}

 */

/*
let json = {
  data: {
    children: [
        {
          id: 32,
          data: 'Confusion about Flux and Relay'
        },
        {
          id: 500,
          data: 'Creating a Simple Application Using React JS and Flux Architecture'
        },
        {
          id: 891,
          data: 'Creating'
        }
    ]
  }
}

let ar = json.data.children.map(function (child) {
  return child.data;
});

console.log(ar);

//    [ 'Confusion about Flux and Relay',
//      'Creating a Simple Application Using React JS and Flux Architecture',
//      'Creating' ]

let ai = json.data.children.map(function (child) {
    return child.id;
});

console.log(ai);

// [ 32, 500, 891 ]

 */

// 选择
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
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



// Meet our first thunk action creator!
// 来看一下我们写的第一个 thunk action creator

// Though its insides are different, you would use it just like any other action creator:
// 虽然内部操作不同，你可以像其它 action creator 一样使用它

// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts(subreddit) {
    // Thunk middleware knows how to handle functions.
    // Thunk middleware 知道如何处理函数
    // It passes the dispatch method as an argument to the function,
    // 这里把 dispatch 方法通过参数的形式传给函数
    // thus making it able to dispatch actions itself.
    // 以此来让它自己也能 dispatch action

    return function (dispatch) {
        // First dispatch: the app state is updated to inform
        // 首次 dispatch 更新应用的 state 来通知
        // that the API call is starting.
        // API 请求发起了。

        dispatch(requestPosts(subreddit))

        // The function called by the thunk middleware can return a value,
        // thunk middleware 调用的函数可以有返回值，
        // that is passed on as the return value of the dispatch method.
        // 它会被当作 dispatch 方法的返回值传递。

        // In this case, we return a promise to wait for.
        // 这个案例中，我们返回一个等待处理的 promise。
        // This is not required by thunk middleware, but it is convenient for us.
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(
                response => response.json(),
                // Do not use catch, because that will also catch
                // any errors in the dispatch and resulting render,
                // causing an loop of 'Unexpected batch number' errors.
                // https://github.com/facebook/react/issues/6895
                error => console.log('An error occured.', error) // 在实际应用中，还需要捕获网络请求的异常。
            )
            .then(json =>
                // We can dispatch many times!
                // 可以多次 dispatch
                // Here, we update the app state with the results of the API call.
                // 这里，使用 API 请求结果来更新应用的 state。

                dispatch(receivePosts(subreddit, json))
            )
    }
}



function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

function fetchPosts(subreddit) {
    return dispatch => {
        // 首次 dispatch 更新应用的 state 来通知
        // API 请求发起了
        dispatch(requestPosts(subreddit))
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            // 可以多次 dispatch
            // 这里，使用 API 请求结果来更新应用的 state。
            .then(json => dispatch(receivePosts(subreddit, json)))
    }
}

function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit]
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
        if (shouldFetchPosts(getState(), subreddit)) {
            return dispatch(fetchPosts(subreddit))
        }
    }
    /*
        return function (dispatch, getState) {
            if (shouldFetchPosts(getState(), subreddit)) {
                return dispatch(fetchPosts(subreddit));
            }
        };
     */
}
