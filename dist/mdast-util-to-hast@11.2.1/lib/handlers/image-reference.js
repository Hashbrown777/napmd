define(["exports","mdurl/encode.js","../revert","unist-builder","../traverse"],(function(e,t,i,r,n){function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=l(t);e.imageReference=function(e,t){const r=e.definition(t.identifier);if(!r)return i.revert(e,t);const n={src:u.default(r.url||""),alt:t.alt};return null!==r.title&&void 0!==r.title&&(n.title=r.title),e(t,"img",n)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=image-reference.js.map
