define(["exports","micromark-util-character"],(function(n,t){const e={tokenize:function(n,e,u){return function(t){return n.consume(t),r};function r(t){return 87===t||119===t?(n.consume(t),i):u(t)}function i(t){return 87===t||119===t?(n.consume(t),o):u(t)}function o(t){return 46===t?(n.consume(t),c):u(t)}function c(n){return null===n||t.markdownLineEnding(n)?u(n):e(n)}},partial:!0},u={tokenize:function(n,e,u){let r,c;return l;function l(e){return 38===e?n.check(o,f,a)(e):46===e||95===e?n.check(i,f,a)(e):null===e||t.asciiControl(e)||t.unicodeWhitespace(e)||45!==e&&t.unicodePunctuation(e)?f(e):(n.consume(e),l)}function a(t){return 46===t?(c=r,r=void 0,n.consume(t),l):(95===t&&(r=!0),n.consume(t),l)}function f(n){return c||r?u(n):e(n)}},partial:!0},r={tokenize:function(n,t){let e=0;return u;function u(l){return 38===l?n.check(o,t,r)(l):(40===l&&e++,41===l?n.check(i,c,r)(l):p(l)?t(l):k(l)?n.check(i,t,r)(l):(n.consume(l),u))}function r(t){return n.consume(t),u}function c(n){return e--,e<0?t(n):r(n)}},partial:!0},i={tokenize:function(n,t,e){return function(t){return n.consume(t),u};function u(r){return k(r)?(n.consume(r),u):p(r)?t(r):e(r)}},partial:!0},o={tokenize:function(n,e,u){return function(t){return n.consume(t),r};function r(e){return t.asciiAlpha(e)?(n.consume(e),r):59===e?(n.consume(e),i):u(e)}function i(n){return p(n)?e(n):u(n)}},partial:!0},c={tokenize:function(n,t,i){const o=this;return function(t){if(87!==t&&119!==t||!A(o.previous)||g(o.events))return i(t);return n.enter("literalAutolink"),n.enter("literalAutolinkWww"),n.check(e,n.attempt(u,n.attempt(r,c),i),i)(t)};function c(e){return n.exit("literalAutolinkWww"),n.exit("literalAutolink"),t(e)}},previous:A},l={tokenize:function(n,e,i){const o=this;return function(t){if(72!==t&&104!==t||!d(o.previous)||g(o.events))return i(t);return n.enter("literalAutolink"),n.enter("literalAutolinkHttp"),n.consume(t),c};function c(t){return 84===t||116===t?(n.consume(t),l):i(t)}function l(t){return 84===t||116===t?(n.consume(t),a):i(t)}function a(t){return 80===t||112===t?(n.consume(t),f):i(t)}function f(t){return 83===t||115===t?(n.consume(t),s):s(t)}function s(t){return 58===t?(n.consume(t),m):i(t)}function m(t){return 47===t?(n.consume(t),k):i(t)}function k(t){return 47===t?(n.consume(t),p):i(t)}function p(e){return null===e||t.asciiControl(e)||t.unicodeWhitespace(e)||t.unicodePunctuation(e)?i(e):n.attempt(u,n.attempt(r,h),i)(e)}function h(t){return n.exit("literalAutolinkHttp"),n.exit("literalAutolink"),e(t)}},previous:d},a={tokenize:function(n,e,u){const r=this;let o,c;return function(t){if(!h(t)||!v(r.previous)||g(r.events))return u(t);return n.enter("literalAutolink"),n.enter("literalAutolinkEmail"),l(t)};function l(t){return h(t)?(n.consume(t),l):64===t?(n.consume(t),a):u(t)}function a(e){return 46===e?n.check(i,k,f)(e):45===e||95===e?n.check(i,u,s)(e):t.asciiAlphanumeric(e)?(!c&&t.asciiDigit(e)&&(c=!0),n.consume(e),a):k(e)}function f(t){return n.consume(t),o=!0,c=void 0,a}function s(t){return n.consume(t),m}function m(t){return 46===t?n.check(i,u,f)(t):a(t)}function k(t){return o&&!c?(n.exit("literalAutolinkEmail"),n.exit("literalAutolink"),e(t)):u(t)}},previous:v},f={},s={text:f};let m=48;for(;m<123;)f[m]=a,m++,58===m?m=65:91===m&&(m=97);function k(n){return 33===n||34===n||39===n||41===n||42===n||44===n||46===n||58===n||59===n||60===n||63===n||95===n||126===n}function p(n){return null===n||60===n||t.markdownLineEndingOrSpace(n)}function h(n){return 43===n||45===n||46===n||95===n||t.asciiAlphanumeric(n)}function A(n){return null===n||40===n||42===n||95===n||126===n||t.markdownLineEndingOrSpace(n)}function d(n){return null===n||!t.asciiAlpha(n)}function v(n){return 47!==n&&d(n)}function g(n){let t=n.length,e=!1;for(;t--;){const u=n[t][1];if(("labelLink"===u.type||"labelImage"===u.type)&&!u._balanced){e=!0;break}if(u._gfmAutolinkLiteralWalkedInto){e=!1;break}}return n.length>0&&!e&&(n[n.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),e}f[43]=a,f[45]=a,f[46]=a,f[95]=a,f[72]=[a,l],f[104]=[a,l],f[87]=[a,c],f[119]=[a,c],n.gfmAutolinkLiteral=s,Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=syntax.js.map