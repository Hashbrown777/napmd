define(["exports","./label-end","micromark-factory-destination","micromark-factory-label","micromark-factory-title","micromark-factory-whitespace","micromark-util-character","micromark-util-chunked","micromark-util-normalize-identifier","micromark-util-resolve-all"],(function(e,r,t,a,l,n,o,i,c,m){const u={name:"labelStartImage",tokenize:function(e,r,t){const a=this;return function(r){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(r),e.exit("labelImageMarker"),l};function l(r){return 91===r?(e.enter("labelMarker"),e.consume(r),e.exit("labelMarker"),e.exit("labelImage"),n):t(r)}function n(e){return 94===e&&"_hiddenFootnoteSupport"in a.parser.constructs?t(e):r(e)}},resolveAll:r.labelEnd.resolveAll};e.labelStartImage=u,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=label-start-image.js.map
