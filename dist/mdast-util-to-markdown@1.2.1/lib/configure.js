define(["exports"],(function(e){e.configure=function e(n,o){let s,i=-1;if(o.extensions)for(;++i<o.extensions.length;)e(n,o.extensions[i]);for(s in o)"extensions"===s||("unsafe"===s||"join"===s?n[s]=[...n[s]||[],...o[s]||[]]:"handlers"===s?n[s]=Object.assign(n[s],o[s]||{}):n.options[s]=o[s]);return n},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=configure.js.map
