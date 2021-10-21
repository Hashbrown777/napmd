define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","hoist-non-react-statics","@material-ui/utils","./useTheme","./useTheme/ThemeContext"],(function(e,t,n,o,r,i,a,u,f){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=s(o),d=s(r),p=s(i);function l(e={}){const{defaultTheme:o}=e;return e=>{if("production"!==process.env.NODE_ENV&&void 0===e)throw new Error(["You are calling withTheme(Component) with an undefined component.","You may have forgotten to import it."].join("\n"));const r=c.default.forwardRef((function(r,i){const{innerRef:a}=r,f=n._objectWithoutPropertiesLoose(r,["innerRef"]),s=u()||o;return c.default.createElement(e,t._extends({theme:s,ref:a||i},f))}));return"production"!==process.env.NODE_ENV&&(r.propTypes={innerRef:a.chainPropTypes(d.default.oneOfType([d.default.func,d.default.object]),(e=>null==e.innerRef?null:new Error("Material-UI: The `innerRef` prop is deprecated and will be removed in v5. Refs are now automatically forwarded to the inner component.")))}),"production"!==process.env.NODE_ENV&&(r.displayName=`WithTheme(${a.getDisplayName(e)})`),p.default(r,e),"production"!==process.env.NODE_ENV&&(r.Naked=e),r}}const h=l();e.default=h,e.withThemeCreator=l,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=withTheme.js.map
