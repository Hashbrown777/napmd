define(["../extends","@material-ui/utils","./getStylesCreator/noopTheme"],(function(e,t,o){return function(r){const n="function"==typeof r;return"production"!==process.env.NODE_ENV&&("object"==typeof r||n||console.error(["Material-UI: The `styles` argument provided is invalid.","You need to provide a function generating the styles or a styles object."].join("\n"))),{create:(i,s)=>{let a;try{a=n?r(i):r}catch(e){throw"production"!==process.env.NODE_ENV&&!0===n&&i===o&&console.error(["Material-UI: The `styles` argument provided is invalid.","You are providing a function without a theme in the context.","One of the parent elements needs to use a ThemeProvider."].join("\n")),e}if(!s||!i.overrides||!i.overrides[s])return a;const c=i.overrides[s],d=e._extends({},a);return Object.keys(c).forEach((e=>{"production"!==process.env.NODE_ENV&&(d[e]||console.warn(["Material-UI: You are trying to override a style that does not exist.",`Fix the \`${e}\` key of \`theme.overrides.${s}\`.`].join("\n"))),d[e]=t.deepmerge(d[e],c[e])})),d},options:{}}}}));
//# sourceMappingURL=getStylesCreator.js.map