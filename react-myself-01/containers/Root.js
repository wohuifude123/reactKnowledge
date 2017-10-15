import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import AsyncApp from './AsyncApp'

// 从 configureStore.js 获取初始化 store
const store = configureStore()
// 此时 state = {}

console.log(store.getState())

// Provider 接受Redux的store作为 props 并将其声明为context的属性之一
// 子组件可以在声明了contextTypes之后，通过this.context.store访问到store

export default class Root extends Component {
    // 获取初始化 state 后，调用 <AsyncApp />
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        )
    }
}
