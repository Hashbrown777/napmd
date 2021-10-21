define(["exports","../util/check-rule-repetition","../util/check-rule"],(function(e,t,c){e.thematicBreak=function(e,i,u){const n=(c.checkRule(u)+(u.options.ruleSpaces?" ":"")).repeat(t.checkRuleRepetition(u));return u.options.ruleSpaces?n.slice(0,-1):n},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=thematic-break.js.map
