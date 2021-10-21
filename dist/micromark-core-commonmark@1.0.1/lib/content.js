define(["exports","micromark-factory-space","micromark-util-character","micromark-util-subtokenize"],(function(n,e,t,r){const i={tokenize:function(n,e){let r;return function(e){return n.enter("content"),r=n.enter("chunkContent",{contentType:"content"}),i(e)};function i(e){return null===e?c(e):t.markdownLineEnding(e)?n.check(o,u,c)(e):(n.consume(e),i)}function c(t){return n.exit("chunkContent"),n.exit("content"),e(t)}function u(e){return n.consume(e),n.exit("chunkContent"),r.next=n.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,i}},resolve:function(n){return r.subtokenize(n),n}},o={tokenize:function(n,r,i){const o=this;return function(t){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(t),n.exit("lineEnding"),e.factorySpace(n,c,"linePrefix")};function c(e){if(null===e||t.markdownLineEnding(e))return i(e);const c=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&c&&"linePrefix"===c[1].type&&c[2].sliceSerialize(c[1],!0).length>=4?r(e):n.interrupt(o.parser.constructs.flow,i,r)(e)}},partial:!0};n.content=i,Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=content.js.map
