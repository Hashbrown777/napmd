define(["exports","micromark-util-character"],(function(e,r){e.factorySpace=function(e,n,t,c){const o=c?c-1:Number.POSITIVE_INFINITY;let u=0;return function(c){if(r.markdownSpace(c))return e.enter(t),a(c);return n(c)};function a(c){return r.markdownSpace(c)&&u++<o?(e.consume(c),a):(e.exit(t),n(c))}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=micromark-factory-space@1.0.0.js.map