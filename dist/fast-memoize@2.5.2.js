define(["exports"],(function(e){var t={exports:{}};function r(e,t,r,n){var i,c=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=t.get(c);return void 0===a&&(a=e.call(this,n),t.set(c,a)),a}function n(e,t,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),c=t.get(i);return void 0===c&&(c=e.apply(this,n),t.set(i,c)),c}function i(e,t,r,n,i){return r.bind(t,e,n,i)}function c(e,t){return i(e,this,1===e.length?r:n,t.cache.create(),t.serializer)}function a(){return JSON.stringify(arguments)}function o(){this.cache=Object.create(null)}o.prototype.has=function(e){return e in this.cache},o.prototype.get=function(e){return this.cache[e]},o.prototype.set=function(e,t){this.cache[e]=t};var s={create:function(){return new o}};t.exports=function(e,t){var r=t&&t.cache?t.cache:s,n=t&&t.serializer?t.serializer:a;return(t&&t.strategy?t.strategy:c)(e,{cache:r,serializer:n})};var u=t.exports.strategies={variadic:function(e,t){return i(e,this,n,t.cache.create(),t.serializer)},monadic:function(e,t){return i(e,this,r,t.cache.create(),t.serializer)}},h=t.exports;e.default=h,e.strategies=u,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=fast-memoize@2.5.2.js.map