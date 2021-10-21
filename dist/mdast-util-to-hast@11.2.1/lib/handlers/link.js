define(["exports","mdurl/encode.js","../traverse","unist-builder"],(function(e,t,l,n){function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=u(t);e.link=function(e,t){const n={href:i.default(t.url)};return null!==t.title&&void 0!==t.title&&(n.title=t.title),e(t,"a",n,l.all(e,t))},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=link.js.map
