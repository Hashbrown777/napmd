define(["exports"],(function(e){const t={resolveAll:o()},n=i("string"),r=i("text");function i(e){return{tokenize:function(t){const n=this,r=this.parser.constructs[e],i=t.attempt(r,o,s);return o;function o(e){return l(e)?i(e):s(e)}function s(e){if(null!==e)return t.enter("data"),t.consume(e),f;t.consume(e)}function f(e){return l(e)?(t.exit("data"),i(e)):(t.consume(e),f)}function l(e){if(null===e)return!0;const t=r[e];let i=-1;if(t)for(;++i<t.length;){const e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}},resolveAll:o("text"===e?s:void 0)}}function o(e){return function(t,n){let r,i=-1;for(;++i<=t.length;)void 0===r?t[i]&&"data"===t[i][1].type&&(r=i,i++):t[i]&&"data"===t[i][1].type||(i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),i=r+2),r=void 0);return e?e(t,n):t}}function s(e,t){let n=-1;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){const r=e[n-1][1],i=t.sliceStream(r);let o,s=i.length,f=-1,l=0;for(;s--;){const e=i[s];if("string"==typeof e){for(f=e.length;32===e.charCodeAt(f-1);)l++,f--;if(f)break;f=-1}else if(-2===e)o=!0,l++;else if(-1!==e){s++;break}}if(l){const i={type:n===e.length||o||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+s,_bufferIndex:s?f:r.start._bufferIndex+f},end:Object.assign({},r.end)};r.end=Object.assign({},i.start),r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,["enter",i,t],["exit",i,t]),n+=2)}n++}return e}e.resolver=t,e.string=n,e.text=r,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=text.js.map
