define(["exports","unist-util-position","../wrap","../traverse","unist-builder"],(function(t,n,e,i,l){t.table=function(t,l){const o=l.children;let r=-1;const a=l.align||[],s=[];for(;++r<o.length;){const n=o[r].children,c=0===r?"th":"td";let d=l.align?a.length:n.length;const p=[];for(;d--;){const e=n[d];p[d]=t(e,c,{align:a[d]},e?i.all(t,e):[])}s[r]=t(o[r],"tr",e.wrap(p,!0))}return t(l,"table",e.wrap([t(s[0].position,"thead",e.wrap([s[0]],!0))].concat(s[1]?t({start:n.pointStart(s[1]),end:n.pointEnd(s[s.length-1])},"tbody",e.wrap(s.slice(1),!0)):[]),!0))},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=table.js.map
