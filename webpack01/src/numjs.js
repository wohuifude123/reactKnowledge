import _ from 'lodash';
import numRef from './ref.json';

/*
    import numRef from './ref.json';

    console.log(numRef);

    console.log('第一个='+numRef[0].num+'='+numRef[0].word);
 */
export function numToWord(num) {
    return _.reduce(numRef, (accum, ref) => {
        return ref.num === num ? ref.word : accum;
    }, '');
};

export function wordToNum(word) {
    return _.reduce(numRef, (accum, ref) => {
        return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
};

/*
    var arr = ["apple","orange","apple","orange","pear","orange"];

    function getWordCnt(){
        var obj = {};

        for(var i= 0, l = arr.length; i< l; i++){
            var item = arr[i];
            console.log(item);
            obj[item] = (obj[item] +1 ) || 1;
            console.log(obj[item]);
        }

        return obj;
    }

    console.log(getWordCnt());

    // 结果
    apple
    1
    orange
    1
    apple
    2
    orange
    2
    pear
    1
    orange
    3
    { apple: 2, orange: 3, pear: 1 }

    // reduce

    var arr = ["apple","orange","apple","orange","pear","orange"];

    function getWordCnt(){
        return arr.reduce(function(prev,next){
            prev[next] = (prev[next] + 1) || 1;
            return prev;
        },{});
    }

    console.log(getWordCnt());

    // prev和next
    var arr = ["apple","orange"];

    function noPassValue(){
        return arr.reduce(function(prev,next){
            console.log("prev:",prev);
            console.log("next:",next);

            return prev + " " +next;
        });
    }
    function passValue(){
        return arr.reduce(function(prev,next){
            console.log("prev:",prev);
            console.log("next:",next);

            prev[next] = 1;
            return prev;
        },{});
    }

    console.log("No Additional parameter:",noPassValue());
    console.log("----------------");
    console.log("With {} as an additional parameter:",passValue());

    // 结果
    prev: apple
    next: orange
    No Additional parameter: apple orange
    ----------------
    prev: {}
    next: apple
    prev: { apple: 1 }
    next: orange
    With {} as an additional parameter: { apple: 1, orange: 1 }

    // reduce
    var arr = ["apple","orange","apple","orange","pear","orange"];

    function getWordCnt(){
        return arr.reduce(function(prev,next){
        	console.log('prev='+prev)
        	console.log('next='+next)
            prev[next] = (prev[next] + 1) || 1;
            return prev;
        },{});
    }

    console.log(getWordCnt());

    // 结果
    prev=[object Object]
    next=apple
    prev=[object Object]
    next=orange
    prev=[object Object]
    next=apple
    prev=[object Object]
    next=orange
    prev=[object Object]
    next=pear
    prev=[object Object]
    next=orange
    { apple: 2, orange: 3, pear: 1 }


 */

