define(["exports","./handlers/thematic-break","./handlers/list","./wrap","./traverse","unist-builder"],(function(e,t,n,o,r,l){e.footer=function(e){const r=e.footnoteById,l=e.footnoteOrder;let i=-1;const s=[];for(;++i<l.length;){const e=r[l[i].toUpperCase()];if(!e)continue;const t=String(i+1),n=[...e.children],o={type:"link",url:"#fnref"+t,data:{hProperties:{className:["footnote-back"],role:"doc-backlink"}},children:[{type:"text",value:"↩"}]},a=n[n.length-1];a&&"paragraph"===a.type?a.children.push(o):n.push(o),s.push({type:"listItem",data:{hProperties:{id:"fn"+t,role:"doc-endnote"}},children:n,position:e.position})}return 0===s.length?null:e(null,"section",{className:["footnotes"],role:"doc-endnotes"},o.wrap([t.thematicBreak(e),n.list(e,{type:"list",ordered:!0,children:s})],!0))},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=footer.js.map