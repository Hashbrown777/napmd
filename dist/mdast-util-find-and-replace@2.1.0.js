define(["exports","escape-string-regexp","unist-util-visit-parents","unist-util-is"],(function(e,t,n,r){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=i(t);const o={}.hasOwnProperty;function u(e){return"string"==typeof e?new RegExp(l.default(e),"g"):e}function s(e){return"function"==typeof e?e:()=>e}e.findAndReplace=function(e,t,i,l){let f,c;"string"==typeof t||t instanceof RegExp?(c=[[t,i]],f=l):(c=t,f=i),f||(f={});const a=r.convert(f.ignore||[]),p=function(e){const t=[];if("object"!=typeof e)throw new TypeError("Expected array or object as schema");if(Array.isArray(e)){let n=-1;for(;++n<e.length;)t.push([u(e[n][0]),s(e[n][1])])}else{let n;for(n in e)o.call(e,n)&&t.push([u(n),s(e[n])])}return t}(c);let d=-1;for(;++d<p.length;)n.visitParents(e,"text",h);return e;function h(e,t){let n,r=-1;for(;++r<t.length;){const e=t[r];if(a(e,n?n.children.indexOf(e):void 0,n))return;n=e}if(n)return function(e,t){const n=p[d][0],r=p[d][1];let i,l=0,o=t.children.indexOf(e),u=[];n.lastIndex=0;let s=n.exec(e.value);for(;s;){i=s.index;let t=r(...s,{index:s.index,input:s.input});if("string"==typeof t&&(t=t.length>0?{type:"text",value:t}:void 0),!1!==t&&(l!==i&&u.push({type:"text",value:e.value.slice(l,i)}),Array.isArray(t)?u.push(...t):t&&u.push(t),l=i+s[0].length),!n.global)break;s=n.exec(e.value)}void 0===i?(u=[e],o--):(l<e.value.length&&u.push({type:"text",value:e.value.slice(l)}),t.children.splice(o,1,...u));return o+u.length+1}(e,n)}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=mdast-util-find-and-replace@2.1.0.js.map