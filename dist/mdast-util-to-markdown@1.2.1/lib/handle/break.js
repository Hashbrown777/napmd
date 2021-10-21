define(["exports","../util/pattern-in-scope"],(function(e,t){e.hardBreak=function(e,n,r,a){let f=-1;for(;++f<r.unsafe.length;)if("\n"===r.unsafe[f].character&&t.patternInScope(r.stack,r.unsafe[f]))return/[ \t]/.test(a.before)?"":" ";return"\\\n"},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=break.js.map
