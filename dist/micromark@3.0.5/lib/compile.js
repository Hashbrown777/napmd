define(["exports","parse-entities/decode-entity.js","micromark-util-combine-extensions","micromark-util-chunked","micromark-util-decode-numeric-character-reference","../../micromark-util-encode@1.0.0","micromark-util-normalize-identifier","micromark-util-sanitize-uri"],(function(e,n,i,t,o,c,l,r){const a={}.hasOwnProperty,s=/^(https?|ircs?|mailto|xmpp)$/i,u=/^https?$/i;e.compile=function(e={}){let d=!0;const f={},g=[[]],h=[],p=[],m={enter:{blockQuote:function(){p.push(!1),D(),L("<blockquote>")},codeFenced:function(){D(),L("<pre><code"),T("fencesCount",0)},codeFencedFenceInfo:I,codeFencedFenceMeta:I,codeIndented:function(){D(),L("<pre><code>")},codeText:function(){T("inCodeText",!0),L("<code>")},content:function(){T("slurpAllLineEndings",!0)},definition:function(){I(),h.push({})},definitionDestinationString:function(){I(),T("ignoreEncode",!0)},definitionLabelString:I,definitionTitleString:I,emphasis:function(){L("<em>")},htmlFlow:function(){D(),M()},htmlText:M,image:function(){h.push({image:!0}),d=void 0},label:I,link:function(){h.push({})},listItemMarker:function(){z("expectFirstItem")?L(">"):w();D(),L("<li>"),T("expectFirstItem"),T("lastWasTag")},listItemValue:function(e){if(z("expectFirstItem")){const n=Number.parseInt(this.sliceSerialize(e),10);1!==n&&L(' start="'+v(String(n))+'"')}},listOrdered:function(e){p.push(!e._loose),D(),L("<ol"),T("expectFirstItem",!0)},listUnordered:function(e){p.push(!e._loose),D(),L("<ul"),T("expectFirstItem",!0)},paragraph:function(){p[p.length-1]||(D(),L("<p>"));T("slurpAllLineEndings")},reference:I,resource:function(){I(),h[h.length-1].destination=""},resourceDestinationString:function(){I(),T("ignoreEncode",!0)},resourceTitleString:I,setextHeading:function(){I(),T("slurpAllLineEndings")},strong:function(){L("<strong>")}},exit:{atxHeading:function(){L("</h"+z("headingRank")+">"),T("headingRank")},atxHeadingSequence:function(e){if(z("headingRank"))return;T("headingRank",this.sliceSerialize(e).length),D(),L("<h"+z("headingRank")+">")},autolinkEmail:function(e){const n=this.sliceSerialize(e);L('<a href="'+r.sanitizeUri("mailto:"+n)+'">'),R(v(n)),L("</a>")},autolinkProtocol:function(n){const i=this.sliceSerialize(n);L('<a href="'+r.sanitizeUri(i,e.allowDangerousProtocol?void 0:s)+'">'),R(v(i)),L("</a>")},blockQuote:function(){p.pop(),D(),L("</blockquote>"),T("slurpAllLineEndings")},characterEscapeValue:O,characterReferenceMarkerHexadecimal:U,characterReferenceMarkerNumeric:U,characterReferenceValue:function(e){let i=this.sliceSerialize(e);i=z("characterReferenceType")?o.decodeNumericCharacterReference(i,"characterReferenceMarkerNumeric"===z("characterReferenceType")?10:16):n.decodeEntity(i),R(v(i)),T("characterReferenceType")},codeFenced:C,codeFencedFence:function(){const e=z("fencesCount")||0;e||(L(">"),T("slurpOneLineEnding",!0));T("fencesCount",e+1)},codeFencedFenceInfo:function(){L(' class="language-'+F()+'"')},codeFencedFenceMeta:F,codeFlowValue:function(e){R(v(this.sliceSerialize(e))),T("flowCodeSeenData",!0)},codeIndented:C,codeText:function(){T("inCodeText"),L("</code>")},codeTextData:O,data:O,definition:function(){const e=h[h.length-1],n=l.normalizeIdentifier(e.labelId);F(),a.call(f,n)||(f[n]=h[h.length-1]);h.pop()},definitionDestinationString:function(){h[h.length-1].destination=F(),T("ignoreEncode")},definitionLabelString:function(e){F(),h[h.length-1].labelId=this.sliceSerialize(e)},definitionTitleString:function(){h[h.length-1].title=F()},emphasis:function(){L("</em>")},hardBreakEscape:H,hardBreakTrailing:H,htmlFlow:P,htmlFlowData:O,htmlText:P,htmlTextData:O,image:A,label:function(){h[h.length-1].label=F()},labelText:function(e){h[h.length-1].labelId=this.sliceSerialize(e)},lineEnding:function(e){if(z("slurpAllLineEndings"))return;if(z("slurpOneLineEnding"))return void T("slurpOneLineEnding");if(z("inCodeText"))return void R(" ");R(v(this.sliceSerialize(e)))},link:A,listOrdered:function(){w(),p.pop(),y(),L("</ol>")},listUnordered:function(){w(),p.pop(),y(),L("</ul>")},paragraph:function(){p[p.length-1]?T("slurpAllLineEndings",!0):L("</p>")},reference:F,referenceString:function(e){h[h.length-1].referenceId=this.sliceSerialize(e)},resource:F,resourceDestinationString:function(){h[h.length-1].destination=F(),T("ignoreEncode")},resourceTitleString:function(){h[h.length-1].title=F()},setextHeading:function(){const e=F();D(),L("<h"+z("headingRank")+">"),R(e),L("</h"+z("headingRank")+">"),T("slurpAllLineEndings"),T("headingRank")},setextHeadingLineSequence:function(e){T("headingRank",61===this.sliceSerialize(e).charCodeAt(0)?1:2)},setextHeadingText:function(){T("slurpAllLineEndings",!0)},strong:function(){L("</strong>")},thematicBreak:function(){D(),L("<hr />")}}},k=i.combineHtmlExtensions([m].concat(e.htmlExtensions||[])),x={tightStack:p},S={lineEndingIfNeeded:D,options:e,encode:v,raw:R,tag:L,buffer:I,resume:F,setData:T,getData:z};let E=e.defaultLineEnding;return function(e){let n=-1,i=0;const o=[];let c=[],l=[];for(;++n<e.length;)E||"lineEnding"!==e[n][1].type&&"lineEndingBlank"!==e[n][1].type||(E=e[n][2].sliceSerialize(e[n][1])),"listOrdered"!==e[n][1].type&&"listUnordered"!==e[n][1].type||("enter"===e[n][0]?o.push(n):b(e.slice(o.pop(),n))),"definition"===e[n][1].type&&("enter"===e[n][0]?(l=t.push(l,e.slice(i,n)),i=n):(c=t.push(c,e.slice(i,n+1)),i=n+1));c=t.push(c,l),c=t.push(c,e.slice(i)),n=-1;const r=c;k.enter.null&&k.enter.null.call(S);for(;++n<e.length;){const e=k[r[n][0]];a.call(e,r[n][1].type)&&e[r[n][1].type].call(Object.assign({sliceSerialize:r[n][2].sliceSerialize},S),r[n][1])}k.exit.null&&k.exit.null.call(S);return g[0].join("")};function b(e){const n=e.length;let i,t=0,o=0,c=!1;for(;++t<n;){const n=e[t];if(n[1]._container)i=void 0,"enter"===n[0]?o++:o--;else switch(n[1].type){case"listItemPrefix":"exit"===n[0]&&(i=!0);break;case"linePrefix":break;case"lineEndingBlank":"enter"!==n[0]||o||(i?i=void 0:c=!0);break;default:i=void 0}}e[0][1]._loose=c}function T(e,n){x[e]=n}function z(e){return x[e]}function I(){g.push([])}function F(){return g.pop().join("")}function L(e){d&&(T("lastWasTag",!0),g[g.length-1].push(e))}function R(e){T("lastWasTag"),g[g.length-1].push(e)}function y(){R(E||"\n")}function D(){const e=g[g.length-1],n=e[e.length-1],i=n?n.charCodeAt(n.length-1):null;10!==i&&13!==i&&null!==i&&y()}function v(e){return z("ignoreEncode")?e:c.encode(e)}function w(){z("lastWasTag")&&!z("slurpAllLineEndings")&&D(),L("</li>"),T("slurpAllLineEndings")}function C(){const e=z("fencesCount");void 0!==e&&e<2&&x.tightStack.length>0&&!z("lastWasTag")&&y(),z("flowCodeSeenData")&&D(),L("</code></pre>"),void 0!==e&&e<2&&D(),T("flowCodeSeenData"),T("fencesCount"),T("slurpOneLineEnding")}function A(){let n=h.length-1;const i=h[n],t=i.referenceId||i.labelId,o=void 0===i.destination?f[l.normalizeIdentifier(t)]:i;for(d=!0;n--;)if(h[n].image){d=void 0;break}i.image?(L('<img src="'+r.sanitizeUri(o.destination,e.allowDangerousProtocol?void 0:u)+'" alt="'),R(i.label),L('"')):L('<a href="'+r.sanitizeUri(o.destination,e.allowDangerousProtocol?void 0:s)+'"'),L(o.title?' title="'+o.title+'"':""),i.image?L(" />"):(L(">"),R(i.label),L("</a>")),h.pop()}function O(e){R(v(this.sliceSerialize(e)))}function H(){L("<br />")}function P(){T("ignoreEncode")}function M(){e.allowDangerousHtml&&T("ignoreEncode",!0)}function U(e){T("characterReferenceType",e.type)}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=compile.js.map