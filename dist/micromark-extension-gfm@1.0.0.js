define(["exports","micromark-util-combine-extensions","micromark-extension-gfm-autolink-literal","micromark-extension-gfm-strikethrough","micromark-extension-gfm-table","micromark-extension-gfm-tagfilter","micromark-extension-gfm-task-list-item"],(function(t,e,m,i,n,o,r){const l=e.combineHtmlExtensions([m.gfmAutolinkLiteralHtml,i.gfmStrikethroughHtml,n.gfmTableHtml,o.gfmTagfilterHtml,r.gfmTaskListItemHtml]);t.gfm=function(t){return e.combineExtensions([m.gfmAutolinkLiteral,i.gfmStrikethrough(t),n.gfmTable,r.gfmTaskListItem])},t.gfmHtml=l,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=micromark-extension-gfm@1.0.0.js.map