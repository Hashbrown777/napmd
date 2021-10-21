define(["exports"],(function(n){function t(n,t,e){if(!t)return e;"string"==typeof t&&(t=[t]);let r=-1;for(;++r<t.length;)if(n.includes(t[r]))return!0;return!1}n.patternInScope=function(n,e){return t(n,e.inConstruct,!0)&&!t(n,e.notInConstruct,!1)},Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=pattern-in-scope.js.map
