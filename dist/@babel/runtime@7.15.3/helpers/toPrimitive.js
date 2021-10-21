define(["./typeof"],(function(r){return function(t,e){if("object"!==r(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}}));
//# sourceMappingURL=toPrimitive.js.map
