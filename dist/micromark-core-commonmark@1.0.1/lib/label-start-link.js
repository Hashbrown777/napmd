define(["exports","./label-end","micromark-factory-destination","micromark-factory-label","micromark-factory-title","micromark-factory-whitespace","micromark-util-character","micromark-util-chunked","micromark-util-normalize-identifier","micromark-util-resolve-all"],(function(e,r,t,i,l,n,a,o,c,m){const u={name:"labelStartLink",tokenize:function(e,r,t){const i=this;return function(r){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(r),e.exit("labelMarker"),e.exit("labelLink"),l};function l(e){return 94===e&&"_hiddenFootnoteSupport"in i.parser.constructs?t(e):r(e)}},resolveAll:r.labelEnd.resolveAll};e.labelStartLink=u,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=label-start-link.js.map