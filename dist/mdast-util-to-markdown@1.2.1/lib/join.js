define(["exports","./util/format-code-as-indented","./util/format-heading-as-setext","unist-util-visit","mdast-util-to-string"],(function(e,t,o,r,n){const d=[function(e,r,n,d){if("code"===r.type&&t.formatCodeAsIndented(r,d)&&("list"===e.type||e.type===r.type&&t.formatCodeAsIndented(e,d)))return!1;if("list"===e.type&&e.type===r.type&&Boolean(e.ordered)===Boolean(r.ordered)&&!(e.ordered?d.options.bulletOrderedOther:d.options.bulletOther))return!1;if("spread"in n&&"boolean"==typeof n.spread){if("paragraph"===e.type&&(e.type===r.type||"definition"===r.type||"heading"===r.type&&o.formatHeadingAsSetext(r,d)))return;return n.spread?1:0}}];e.join=d,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=join.js.map