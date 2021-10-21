define(["micromark-extension-gfm","mdast-util-gfm"],(function(n,o){return function(t={}){const i=this.data();function m(n,o){(i[n]?i[n]:i[n]=[]).push(o)}m("micromarkExtensions",n.gfm(t)),m("fromMarkdownExtensions",o.gfmFromMarkdown),m("toMarkdownExtensions",o.gfmToMarkdown(t))}}));
//# sourceMappingURL=remark-gfm@2.0.0.js.map
