define(["exports","micromark-util-character/lib/unicode-punctuation-regex"],(function(n,i){const t=l(/[A-Za-z]/),e=l(/\d/),u=l(/[\dA-Fa-f]/),c=l(/[\dA-Za-z]/),r=l(/[!-/:-@[-`{-~]/),o=l(/[#-'*+\--9=?A-Z^-~]/);const a=l(/\s/),d=l(i.unicodePunctuationRegex);function l(n){return function(i){return null!==i&&n.test(String.fromCharCode(i))}}n.asciiAlpha=t,n.asciiAlphanumeric=c,n.asciiAtext=o,n.asciiControl=function(n){return null!==n&&(n<32||127===n)},n.asciiDigit=e,n.asciiHexDigit=u,n.asciiPunctuation=r,n.markdownLineEnding=function(n){return null!==n&&n<-2},n.markdownLineEndingOrSpace=function(n){return null!==n&&(n<0||32===n)},n.markdownSpace=function(n){return-2===n||-1===n||32===n},n.unicodePunctuation=d,n.unicodeWhitespace=a,Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=micromark-util-character@1.1.0.js.map