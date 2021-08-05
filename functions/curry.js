var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function curry(func) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return func.apply(__spreadArray(__spreadArray([], params), args), this);
    };
}
function add(a, b) {
    return a + b;
}
function tripleAdd(a, b, c) {
    return a + b + c;
}
var addThree = curry(add, 3);
var addTwo = curry(tripleAdd, 2);
var addFive = curry(add, 2, 3);
console.log(addThree(2));
console.log(addTwo(2, 1));
console.log(addThree(2));
