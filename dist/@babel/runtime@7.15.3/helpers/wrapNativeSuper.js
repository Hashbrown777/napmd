define(["./getPrototypeOf","./setPrototypeOf","./isNativeFunction","./construct","./isNativeReflectConstruct"],(function(t,e,r,n,o){function u(o){var i="function"==typeof Map?new Map:void 0;return u=function(o){if(null===o||!r(o))return o;if("function"!=typeof o)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(o))return i.get(o);i.set(o,u)}function u(){return n(o,arguments,t(this).constructor)}return u.prototype=Object.create(o.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),e(u,o)},u(o)}return u}));
//# sourceMappingURL=wrapNativeSuper.js.map
