define(["@emotion/hash"],(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e);function t(e){const o=String(e);return"production"!==process.env.NODE_ENV&&o.length>=256&&console.error(`Material-UI: The class name prefix is too long: ${o}.`),o}const r={};return function(e={}){const{dangerouslyUseGlobalCSS:o=!1,productionPrefix:s="jss",seed:i=""}=e;let a=0;return(e,u)=>{const c=!u.options.link;if(o&&u&&u.options.name&&c)return`${t(u.options.name)}-${e.key}`;let l;if(c){let o=r[u.options.theme];o||(o=n.default(JSON.stringify(u.options.theme)),r[u.theme]=o);const t=u.rules.raw[e.key];l=n.default(`${o}${e.key}${JSON.stringify(t)}`)}return l||(a+=1,"production"!==process.env.NODE_ENV&&a>=1e10&&console.warn(["Material-UI: You might have a memory leak.","The ruleCounter is not supposed to grow that much."].join("")),l=a),"production"===process.env.NODE_ENV?`${s}${i}${l}`:u.options.classNamePrefix?`${t(u.options.classNamePrefix)}-${e.key}-${i}${l}`:`${e.key}-${i}${l}`}}}));
//# sourceMappingURL=createGenerateClassNameHash.js.map