define(["exports","../extends"],(function(e,t){function n(e){return e&&"object"==typeof e&&e.constructor===Object}e.default=function e(o,c,r={clone:!0}){const f=r.clone?t._extends({},o):o;return n(o)&&n(c)&&Object.keys(c).forEach((t=>{"__proto__"!==t&&(n(c[t])&&t in o?f[t]=e(o[t],c[t],r):f[t]=c[t])})),f},e.isPlainObject=n,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=deepmerge.js.map
