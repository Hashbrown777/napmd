define((function(){return{set:(e,t,n,g)=>{let d=e.get(t);d||(d=new Map,e.set(t,d)),d.set(n,g)},get:(e,t,n)=>{const g=e.get(t);return g?g.get(n):void 0},delete:(e,t,n)=>{e.get(t).delete(n)}}}));
//# sourceMappingURL=multiKeyStore.js.map
