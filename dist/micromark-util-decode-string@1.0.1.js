define(["exports","parse-entities/decode-entity.js","micromark-util-decode-numeric-character-reference"],(function(e,r,t){const c=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function n(e,c,n){if(c)return c;if(35===n.charCodeAt(0)){const e=n.charCodeAt(1),r=120===e||88===e;return t.decodeNumericCharacterReference(n.slice(r?2:1),r?16:10)}return r.decodeEntity(n)||e}e.decodeString=function(e){return e.replace(c,n)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=micromark-util-decode-string@1.0.1.js.map