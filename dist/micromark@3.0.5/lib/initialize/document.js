define(["exports","micromark-factory-space","micromark-util-character","micromark-util-chunked"],(function(e,t,n,r){const o={tokenize:function(e){const t=this,o=[];let c,s,u,l=0;return a;function a(n){if(l<o.length){const r=o[l];return t.containerState=r[1],e.attempt(r[0].continuation,f,v)(n)}return v(n)}function f(e){if(l++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,c&&x();const n=t.events.length;let o,i=n;for(;i--;)if("exit"===t.events[i][0]&&"chunkFlow"===t.events[i][1].type){o=t.events[i][1].end;break}S(l);let s=n;for(;s<t.events.length;)t.events[s][1].end=Object.assign({},o),s++;return r.splice(t.events,i+1,0,t.events.slice(n)),t.events.length=s,v(e)}return a(e)}function v(n){if(l===o.length){if(!c)return p(n);if(c.currentConstruct&&c.currentConstruct.concrete)return m(n);t.interrupt=Boolean(c.currentConstruct)}return t.containerState={},e.check(i,d,h)(n)}function d(e){return c&&x(),S(l),p(e)}function h(e){return t.parser.lazy[t.now().line]=l!==o.length,u=t.now().offset,m(e)}function p(n){return t.containerState={},e.attempt(i,k,m)(n)}function k(e){return l++,o.push([t.currentConstruct,t.containerState]),p(e)}function m(n){return null===n?(c&&x(),S(0),void e.consume(n)):(c=c||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:s,_tokenizer:c}),w(n))}function w(r){return null===r?(g(e.exit("chunkFlow"),!0),S(0),void e.consume(r)):n.markdownLineEnding(r)?(e.consume(r),g(e.exit("chunkFlow")),l=0,t.interrupt=void 0,a):(e.consume(r),w)}function g(e,n){const o=t.sliceStream(e);if(n&&o.push(null),e.previous=s,s&&(s.next=e),s=e,c.defineSkip(e.start),c.write(o),t.parser.lazy[e.start.line]){let e=c.events.length;for(;e--;)if(c.events[e][1].start.offset<u&&(!c.events[e][1].end||c.events[e][1].end.offset>u))return;const n=t.events.length;let o,i,s=n;for(;s--;)if("exit"===t.events[s][0]&&"chunkFlow"===t.events[s][1].type){if(o){i=t.events[s][1].end;break}o=!0}for(S(l),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},i),e++;r.splice(t.events,s+1,0,t.events.slice(n)),t.events.length=e}}function S(n){let r=o.length;for(;r-- >n;){const n=o[r];t.containerState=n[1],n[0].exit.call(t,e)}o.length=n}function x(){c.write([null]),s=void 0,c=void 0,t.containerState._closeFlow=void 0}}},i={tokenize:function(e,n,r){return t.factorySpace(e,e.attempt(this.parser.constructs.document,n,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};e.document=o,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=document.js.map