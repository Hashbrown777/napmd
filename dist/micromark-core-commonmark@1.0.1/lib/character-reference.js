define(["exports","parse-entities/decode-entity.js","micromark-util-character"],(function(e,r,c){const a={name:"characterReference",tokenize:function(e,a,t){const n=this;let i,u,f=0;return function(r){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(r),e.exit("characterReferenceMarker"),h};function h(r){return 35===r?(e.enter("characterReferenceMarkerNumeric"),e.consume(r),e.exit("characterReferenceMarkerNumeric"),o):(e.enter("characterReferenceValue"),i=31,u=c.asciiAlphanumeric,s(r))}function o(r){return 88===r||120===r?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(r),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,u=c.asciiHexDigit,s):(e.enter("characterReferenceValue"),i=7,u=c.asciiDigit,s(r))}function s(h){let o;return 59===h&&f?(o=e.exit("characterReferenceValue"),u!==c.asciiAlphanumeric||r.decodeEntity(n.sliceSerialize(o))?(e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),e.exit("characterReference"),a):t(h)):u(h)&&f++<i?(e.consume(h),s):t(h)}}};e.characterReference=a,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=character-reference.js.map
