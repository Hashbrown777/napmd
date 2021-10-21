define(["./setPrototypeOf","./isNativeReflectConstruct"],(function(t,n){function e(r,u,o){return e=n()?Reflect.construct:function(n,e,r){var u=[null];u.push.apply(u,e);var o=new(Function.bind.apply(n,u));return r&&t(o,r.prototype),o},e.apply(null,arguments)}return e}));
//# sourceMappingURL=construct.js.map
