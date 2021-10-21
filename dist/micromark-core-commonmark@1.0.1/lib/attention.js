define(["exports","micromark-util-chunked","micromark-util-classify-character","micromark-util-resolve-all"],(function(e,t,n,s){const r={name:"attention",tokenize:function(e,t){const s=this.parser.constructs.attentionMarkers.null,r=this.previous,i=n.classifyCharacter(r);let o;return function(t){return e.enter("attentionSequence"),o=t,a(t)};function a(c){if(c===o)return e.consume(c),a;const f=e.exit("attentionSequence"),u=n.classifyCharacter(c),l=!u||2===u&&i||s.includes(c),d=!i||2===i&&u||s.includes(r);return f._open=Boolean(42===o?l:l&&(i||!d)),f._close=Boolean(42===o?d:d&&(u||!l)),t(c)}},resolveAll:function(e,n){let r,o,a,c,f,u,l,d,p=-1;for(;++p<e.length;)if("enter"===e[p][0]&&"attentionSequence"===e[p][1].type&&e[p][1]._close)for(r=p;r--;)if("exit"===e[r][0]&&"attentionSequence"===e[r][1].type&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[p][1]).charCodeAt(0)){if((e[r][1]._close||e[p][1]._open)&&(e[p][1].end.offset-e[p][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[p][1].end.offset-e[p][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[p][1].end.offset-e[p][1].start.offset>1?2:1;const h=Object.assign({},e[r][1].end),g=Object.assign({},e[p][1].start);i(h,-u),i(g,u),c={type:u>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},e[r][1].end)},f={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[p][1].start),end:g},a={type:u>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[p][1].start)},o={type:u>1?"strong":"emphasis",start:Object.assign({},c.start),end:Object.assign({},f.end)},e[r][1].end=Object.assign({},c.start),e[p][1].start=Object.assign({},f.end),l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=t.push(l,[["enter",e[r][1],n],["exit",e[r][1],n]])),l=t.push(l,[["enter",o,n],["enter",c,n],["exit",c,n],["enter",a,n]]),l=t.push(l,s.resolveAll(n.parser.constructs.insideSpan.null,e.slice(r+1,p),n)),l=t.push(l,[["exit",a,n],["enter",f,n],["exit",f,n],["exit",o,n]]),e[p][1].end.offset-e[p][1].start.offset?(d=2,l=t.push(l,[["enter",e[p][1],n],["exit",e[p][1],n]])):d=0,t.splice(e,r-1,p-r+3,l),p=r+l.length-d-2;break}p=-1;for(;++p<e.length;)"attentionSequence"===e[p][1].type&&(e[p][1].type="data");return e}};function i(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}e.attention=r,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=attention.js.map
