define(["./getPrototypeOf","./isNativeReflectConstruct","./possibleConstructorReturn","./typeof","./assertThisInitialized"],(function(t,e,r,n,i){return function(n){var i=e();return function(){var e,s=t(n);if(i){var o=t(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return r(this,e)}}}));
//# sourceMappingURL=createSuper.js.map
