define(["exports","../util/check-strong","../util/container-phrasing"],(function(n,e,t){function r(n,r,o){const i=e.checkStrong(o),c=o.enter("strong"),s=t.containerPhrasing(n,o,{before:i,after:i});return c(),i+i+s+i+i}r.peek=function(n,e,t){return t.options.strong||"*"},n.strong=r,Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=strong.js.map
