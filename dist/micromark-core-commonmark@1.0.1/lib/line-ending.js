define(["exports","micromark-factory-space","micromark-util-character"],(function(e,n,i){const r={name:"lineEnding",tokenize:function(e,i){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n.factorySpace(e,i,"linePrefix")}}};e.lineEnding=r,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=line-ending.js.map
