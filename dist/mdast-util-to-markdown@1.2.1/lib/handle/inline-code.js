define(["exports","../util/pattern-compile"],(function(e,t){function n(e,n,r){let i=e.value||"",o="`",l=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(i);)o+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++l<r.unsafe.length;){const e=r.unsafe[l],n=t.patternCompile(e);let o;if(e.atBreak)for(;o=n.exec(i);){let e=o.index;10===i.charCodeAt(e)&&13===i.charCodeAt(e-1)&&e--,i=i.slice(0,e)+" "+i.slice(o.index+1)}}return o+i+o}n.peek=function(){return"`"},e.inlineCode=n,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=inline-code.js.map