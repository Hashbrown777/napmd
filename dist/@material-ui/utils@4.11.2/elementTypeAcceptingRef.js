define(["prop-types","./chainPropTypes"],(function(e,t){function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}return t(n(e).elementType,(function(e,t,n,r,o){const i=e[t],c=o||t;if(null==i)return null;let u;return"function"!=typeof i||function(e){const{prototype:t={}}=e;return Boolean(t.isReactComponent)}(i)||(u="Did you accidentally provide a plain function component instead?"),void 0!==u?new Error(`Invalid ${r} \`${c}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${u} For more information see https://material-ui.com/r/caveat-with-refs-guide`):null}))}));
//# sourceMappingURL=elementTypeAcceptingRef.js.map
