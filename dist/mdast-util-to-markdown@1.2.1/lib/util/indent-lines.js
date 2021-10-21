define(["exports"],(function(e){const n=/\r?\n|\r/g;e.indentLines=function(e,i){const t=[];let o,c=0,s=0;for(;o=n.exec(e);)r(e.slice(c,o.index)),t.push(o[0]),c=o.index+o[0].length,s++;return r(e.slice(c)),t.join("");function r(e){t.push(i(e,s,!e))}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=indent-lines.js.map
