define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","@material-ui/utils","./createGenerateClassName","jss","./jssPreset","./ThemeProvider/nested","jss-plugin-rule-value-function","jss-plugin-global","jss-plugin-nested","jss-plugin-camel-case","jss-plugin-default-unit","jss-plugin-vendor-prefixer","jss-plugin-props-sort"],(function(e,t,s,n,o,r,i,a,l,u,c,d,p,f,j,h,g){function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var N=m(n),v=m(o);const b=a.create(l()),y=i(),E=new Map,C={disableGeneration:!1,generateClassName:y,jss:b,sheetsCache:null,sheetsManager:E,sheetsRegistry:null},P=N.default.createContext(C);let _;function x(e){const{children:n,injectFirst:o=!1,disableGeneration:r=!1}=e,i=s._objectWithoutPropertiesLoose(e,["children","injectFirst","disableGeneration"]),u=N.default.useContext(P),c=t._extends({},u,{disableGeneration:r},i);if("production"!==process.env.NODE_ENV&&("undefined"!=typeof window||c.sheetsManager||console.error("Material-UI: You need to use the ServerStyleSheets API when rendering on the server.")),"production"!==process.env.NODE_ENV&&c.jss.options.insertionPoint&&o&&console.error("Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time."),"production"!==process.env.NODE_ENV&&o&&i.jss&&console.error("Material-UI: You cannot use the jss and injectFirst props at the same time."),!c.jss.options.insertionPoint&&o&&"undefined"!=typeof window){if(!_){const e=document.head;_=document.createComment("mui-inject-first"),e.insertBefore(_,e.firstChild)}c.jss=a.create({plugins:l().plugins,insertionPoint:_})}return N.default.createElement(P.Provider,{value:c},n)}"production"!==process.env.NODE_ENV&&(P.displayName="StylesContext"),"production"!==process.env.NODE_ENV&&(x.propTypes={children:v.default.node.isRequired,disableGeneration:v.default.bool,generateClassName:v.default.func,injectFirst:v.default.bool,jss:v.default.object,serverGenerateClassName:v.default.func,sheetsCache:v.default.object,sheetsManager:v.default.object,sheetsRegistry:v.default.object}),"production"!==process.env.NODE_ENV&&"production"!==process.env.NODE_ENV&&(x.propTypes=r.exactProp(x.propTypes)),e.StylesContext=P,e.default=x,e.sheetsManager=E,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=StylesProvider.js.map