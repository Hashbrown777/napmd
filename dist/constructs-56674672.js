define(["exports","micromark-core-commonmark","./micromark@3.0.5/lib/initialize/text"],(function(e,t,n){const i={42:t.list,43:t.list,45:t.list,48:t.list,49:t.list,50:t.list,51:t.list,52:t.list,53:t.list,54:t.list,55:t.list,56:t.list,57:t.list,62:t.blockQuote},l={91:t.definition},a={[-2]:t.codeIndented,[-1]:t.codeIndented,32:t.codeIndented},r={35:t.headingAtx,42:t.thematicBreak,45:[t.setextUnderline,t.thematicBreak],60:t.htmlFlow,61:t.setextUnderline,95:t.thematicBreak,96:t.codeFenced,126:t.codeFenced},c={38:t.characterReference,92:t.characterEscape},o={[-5]:t.lineEnding,[-4]:t.lineEnding,[-3]:t.lineEnding,33:t.labelStartImage,38:t.characterReference,42:t.attention,60:[t.autolink,t.htmlText],91:t.labelStartLink,92:[t.hardBreakEscape,t.characterEscape],93:t.labelEnd,95:t.attention,96:t.codeText},d={null:[t.attention,n.resolver]},s={null:[42,95]},m={null:[]};var k=Object.freeze({__proto__:null,document:i,contentInitial:l,flowInitial:a,flow:r,string:c,text:o,insideSpan:d,attentionMarkers:s,disable:m});e.attentionMarkers=s,e.contentInitial=l,e.defaultConstructs=k,e.disable=m,e.document=i,e.flow=r,e.flowInitial=a,e.insideSpan=d,e.string=c,e.text=o}));
//# sourceMappingURL=constructs-56674672.js.map