define(["prop-types","./chainPropTypes"],(function(e,n){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);function i(e,n,t,o,i){const r=e[n],u=i||n;if(null==r)return null;let a;const l=r.type;return"function"!=typeof l||function(e){const{prototype:n={}}=e;return Boolean(n.isReactComponent)}(l)||(a="Did you accidentally use a plain function component for an element instead?"),void 0!==a?new Error(`Invalid ${o} \`${u}\` supplied to \`${t}\`. Expected an element that can hold a ref. ${a} For more information see https://material-ui.com/r/caveat-with-refs-guide`):null}const r=n(o.default.element,i);return r.isRequired=n(o.default.element.isRequired,i),r}));
//# sourceMappingURL=elementAcceptingRef.js.map
