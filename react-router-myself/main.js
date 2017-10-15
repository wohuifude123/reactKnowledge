import BasicExample from './Router/Basic.Router.js'
import React from 'react'
import ReactDOM from 'react-dom';
/*
    // profile.js
    export var firstName = 'Michael';
    export var lastName = 'Jackson';
    export var year = 1958;

    // main.js
    import {firstName, lastName, year} from './profile';

    function setName(element) {
        element.textContent = firstName + ' ' + lastName;
    }

    // export-default.js
    export default function () {
        console.log('foo');
    }

    上面代码是一个模块文件export-default.js，它的默认输出是一个函数。

    其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。

    // import-default.js
    import customName from './export-default';
    customName(); // 'foo'

    上面代码的import命令，可以用任意名称指向export-default.js输出的方法，
    这时就不需要知道原模块输出的函数名。
    需要注意的是，这时import命令后面，不使用大括号
 */

ReactDOM.render((
    <BasicExample />
), document.getElementById('app'))
