define(["exports","micromark-util-character","micromark-util-html-tag-name","./blank-line","micromark-factory-space"],(function(n,e,t,r,u){const o={name:"htmlFlow",tokenize:function(n,r,u){const o=this;let i,m,a,l,s;return function(e){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(e),f};function f(t){return 33===t?(n.consume(t),d):47===t?(n.consume(t),w):63===t?(n.consume(t),i=3,o.interrupt?r:_):e.asciiAlpha(t)?(n.consume(t),a=String.fromCharCode(t),m=!0,k):u(t)}function d(t){return 45===t?(n.consume(t),i=2,p):91===t?(n.consume(t),i=5,a="CDATA[",l=0,h):e.asciiAlpha(t)?(n.consume(t),i=4,o.interrupt?r:_):u(t)}function p(e){return 45===e?(n.consume(e),o.interrupt?r:_):u(e)}function h(e){return e===a.charCodeAt(l++)?(n.consume(e),l===a.length?o.interrupt?r:b:h):u(e)}function w(t){return e.asciiAlpha(t)?(n.consume(t),a=String.fromCharCode(t),k):u(t)}function k(c){return null===c||47===c||62===c||e.markdownLineEndingOrSpace(c)?47!==c&&m&&t.htmlRawNames.includes(a.toLowerCase())?(i=1,o.interrupt?r(c):b(c)):t.htmlBlockNames.includes(a.toLowerCase())?(i=6,47===c?(n.consume(c),g):o.interrupt?r(c):b(c)):(i=7,o.interrupt&&!o.parser.lazy[o.now().line]?u(c):m?E(c):C(c)):45===c||e.asciiAlphanumeric(c)?(n.consume(c),a+=String.fromCharCode(c),k):u(c)}function g(e){return 62===e?(n.consume(e),o.interrupt?r:b):u(e)}function C(t){return e.markdownSpace(t)?(n.consume(t),C):D(t)}function E(t){return 47===t?(n.consume(t),D):58===t||95===t||e.asciiAlpha(t)?(n.consume(t),L):e.markdownSpace(t)?(n.consume(t),E):D(t)}function L(t){return 45===t||46===t||58===t||95===t||e.asciiAlphanumeric(t)?(n.consume(t),L):S(t)}function S(t){return 61===t?(n.consume(t),A):e.markdownSpace(t)?(n.consume(t),S):E(t)}function A(t){return null===t||60===t||61===t||62===t||96===t?u(t):34===t||39===t?(n.consume(t),s=t,F):e.markdownSpace(t)?(n.consume(t),A):(s=null,x(t))}function F(t){return null===t||e.markdownLineEnding(t)?u(t):t===s?(n.consume(t),y):(n.consume(t),F)}function x(t){return null===t||34===t||39===t||60===t||61===t||62===t||96===t||e.markdownLineEndingOrSpace(t)?S(t):(n.consume(t),x)}function y(n){return 47===n||62===n||e.markdownSpace(n)?E(n):u(n)}function D(e){return 62===e?(n.consume(e),z):u(e)}function z(t){return e.markdownSpace(t)?(n.consume(t),z):null===t||e.markdownLineEnding(t)?b(t):u(t)}function b(t){return 45===t&&2===i?(n.consume(t),v):60===t&&1===i?(n.consume(t),P):62===t&&4===i?(n.consume(t),j):63===t&&3===i?(n.consume(t),_):93===t&&5===i?(n.consume(t),T):!e.markdownLineEnding(t)||6!==i&&7!==i?null===t||e.markdownLineEnding(t)?B(t):(n.consume(t),b):n.check(c,j,B)(t)}function B(e){return n.exit("htmlFlowData"),N(e)}function N(t){return null===t?M(t):e.markdownLineEnding(t)?n.attempt({tokenize:O,partial:!0},N,M)(t):(n.enter("htmlFlowData"),b(t))}function O(n,e,t){return function(e){return n.enter("lineEnding"),n.consume(e),n.exit("lineEnding"),r};function r(n){return o.parser.lazy[o.now().line]?t(n):e(n)}}function v(e){return 45===e?(n.consume(e),_):b(e)}function P(e){return 47===e?(n.consume(e),a="",R):b(e)}function R(r){return 62===r&&t.htmlRawNames.includes(a.toLowerCase())?(n.consume(r),j):e.asciiAlpha(r)&&a.length<8?(n.consume(r),a+=String.fromCharCode(r),R):b(r)}function T(e){return 93===e?(n.consume(e),_):b(e)}function _(e){return 62===e?(n.consume(e),j):45===e&&2===i?(n.consume(e),_):b(e)}function j(t){return null===t||e.markdownLineEnding(t)?(n.exit("htmlFlowData"),M(t)):(n.consume(t),j)}function M(e){return n.exit("htmlFlow"),r(e)}},resolveTo:function(n){let e=n.length;for(;e--&&("enter"!==n[e][0]||"htmlFlow"!==n[e][1].type););e>1&&"linePrefix"===n[e-2][1].type&&(n[e][1].start=n[e-2][1].start,n[e+1][1].start=n[e-2][1].start,n.splice(e-2,2));return n},concrete:!0},c={tokenize:function(n,e,t){return function(u){return n.exit("htmlFlowData"),n.enter("lineEndingBlank"),n.consume(u),n.exit("lineEndingBlank"),n.attempt(r.blankLine,e,t)}},partial:!0};n.htmlFlow=o,Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=html-flow.js.map