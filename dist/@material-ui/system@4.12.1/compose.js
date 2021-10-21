define(["../extends","./merge","@material-ui/utils"],(function(e,r,n){return function(...n){const t=e=>n.reduce(((n,t)=>{const o=t(e);return o?r(n,o):n}),{});return t.propTypes="production"!==process.env.NODE_ENV?n.reduce(((r,n)=>e._extends(r,n.propTypes)),{}):{},t.filterProps=n.reduce(((e,r)=>e.concat(r.filterProps)),[]),t}}));
//# sourceMappingURL=compose.js.map
