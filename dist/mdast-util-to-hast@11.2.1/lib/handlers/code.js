define(["exports","unist-builder"],(function(e,t){e.code=function(e,a){const n=a.value?a.value+"\n":"",o=a.lang&&a.lang.match(/^[^ \t]+(?=[ \t]|$)/),u={};o&&(u.className=["language-"+o]);const c=e(a,"code",u,[t.u("text",n)]);return a.meta&&(c.data={meta:a.meta}),e(a.position,"pre",[c])},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=code.js.map
