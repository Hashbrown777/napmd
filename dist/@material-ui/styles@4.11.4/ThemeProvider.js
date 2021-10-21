define(["../extends","react","prop-types","@material-ui/utils","./useTheme/ThemeContext","./useTheme","./ThemeProvider/nested"],(function(e,o,t,r,n,u,i){function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=c(o),p=c(t);function d(o){const{children:t,theme:r}=o,c=u();"production"!==process.env.NODE_ENV&&null===c&&"function"==typeof r&&console.error(["Material-UI: You are providing a theme function prop to the ThemeProvider component:","<ThemeProvider theme={outerTheme => outerTheme} />","","However, no outer theme is present.","Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));const p=s.default.useMemo((()=>{const o=null===c?r:function(o,t){if("function"==typeof t){const e=t(o);return"production"!==process.env.NODE_ENV&&(e||console.error(["Material-UI: You should return an object from your theme function, i.e.","<ThemeProvider theme={() => ({})} />"].join("\n"))),e}return e._extends({},o,t)}(c,r);return null!=o&&(o[i]=null!==c),o}),[r,c]);return s.default.createElement(n.Provider,{value:p},t)}return"production"!==process.env.NODE_ENV&&(d.propTypes={children:p.default.node.isRequired,theme:p.default.oneOfType([p.default.object,p.default.func]).isRequired}),"production"!==process.env.NODE_ENV&&"production"!==process.env.NODE_ENV&&(d.propTypes=r.exactProp(d.propTypes)),d}));
//# sourceMappingURL=ThemeProvider.js.map