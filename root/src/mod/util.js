import {
    indexOf,
    slice,
    toString,
    hasOwn,
    bind
} from './var.js';


export var isArray = Array.isArray || function(item) {
    return toString.call(item) === '[object Array]';
}

// 判断元素是否在数组中
// @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#浏览器兼容性
export var inArray = function(arr, item){
    if (indexOf) {
        return !!~arr.indexOf(item);
    }
    for (var i = arr.length - 1; i >= 0; i--) {
        if ( arr[ i ] === item ) {
            return true;
        }
    }
    return false;
}


/**
 * 以给定的对象obj作为原形来生成新的对象
 */
export var clone = Object.create || function( obj ){
    var F = function(){};
    F.prototype = obj;
    return new F();
}


