var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createDataBind(data) {
    var keyStack = [];
    function createProxy(target) {
        var clone = __assign({}, target);
        Object.keys(target)
            .filter(function (k) { return typeof target[k] === 'object'; })
            .forEach(function (k) {
            clone[k] = createProxy(target[k]);
        });
        return new Proxy(clone, {
            get: function (t, p, r) {
                keyStack.push(p);
                console.log(keyStack);
                var val = t[p]; //Reflect.get(t, p, r);
                keyStack.pop();
                return val;
            },
            set: function (t, p, v, r) {
                return Reflect.set(t, p, v, r);
            }
        });
    }
    var proxyData = createProxy(data);
    return proxyData;
}
var obj = {
    foo: 1,
    far: 'Hello',
    bar: function () {
        return 'function call!';
    },
    baz: {
        child: {
            grandChild: 2
        }
    }
};
var objProxy = createDataBind(obj);
console.log(objProxy.foo);
console.log(objProxy.far);
console.log(objProxy.bar());
console.log(objProxy.baz.child.grandChild);
