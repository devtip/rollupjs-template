// 变量列表
var objProto = Object.prototype
var arrProto = Array.prototype
var funcProto = Function.prototype

export var toString = objProto.toString
export var hasOwn = Object.prototype.hasOwnProperty

// Array methods
export var slice = arrProto.slice

// Function methods
export var bind = funcProto.bind // ES5

// ES5 feature
export var indexOf = arrProto.indexOf;
