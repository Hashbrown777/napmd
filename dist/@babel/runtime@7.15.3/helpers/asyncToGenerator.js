define((function(){function n(n,t,r,e,o,i,u){try{var c=n[i](u),f=c.value}catch(n){return void r(n)}c.done?t(f):Promise.resolve(f).then(e,o)}return function(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var u=t.apply(r,e);function c(t){n(u,o,i,c,f,"next",t)}function f(t){n(u,o,i,c,f,"throw",t)}c(void 0)}))}}}));
//# sourceMappingURL=asyncToGenerator.js.map
