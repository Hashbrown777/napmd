define(["exports","../util/check-emphasis","../util/container-phrasing"],(function(e,n,i){function s(e,s,t){const r=n.checkEmphasis(t),o=t.enter("emphasis"),a=i.containerPhrasing(e,t,{before:r,after:r});return o(),r+a+r}s.peek=function(e,n,i){return i.options.emphasis||"*"},e.emphasis=s,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=emphasis.js.map
