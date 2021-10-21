define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","./utils/capitalize","./styles/withStyles","@material-ui/utils","./utils/useIsFocusVisible","./utils/useForkRef","./Typography","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex","react-dom","./utils/setRef"],(function(e,t,o,r,n,s,a,l,i,c,u,d,p,f,y,b,m,g,h,v,x,j,O,T,k,w,F,N,P,R,V,_,B,D,S,z){function C(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function M(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var E=M(r),A=C(n),L=C(s);const W={root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},q=E.forwardRef((function(e,r){const{classes:n,className:s,color:l="primary",component:i="a",onBlur:p,onFocus:f,TypographyClasses:y,underline:b="hover",variant:m="inherit"}=e,g=o._objectWithoutPropertiesLoose(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),{isFocusVisible:h,onBlurVisible:v,ref:x}=c.default(),[j,O]=E.useState(!1),T=u(r,x);return E.createElement(d.default,t._extends({className:L.default(n.root,n[`underline${a(b)}`],s,j&&n.focusVisible,"button"===i&&n.button),classes:y,color:l,component:i,onBlur:e=>{j&&(v(),O(!1)),p&&p(e)},onFocus:e=>{h(e)&&O(!0),f&&f(e)},ref:T,variant:m},g))}));"production"!==process.env.NODE_ENV&&(q.propTypes={children:A.default.node.isRequired,classes:A.default.object.isRequired,className:A.default.string,color:A.default.oneOf(["initial","inherit","primary","secondary","textPrimary","textSecondary","error"]),component:i.elementTypeAcceptingRef,onBlur:A.default.func,onFocus:A.default.func,TypographyClasses:A.default.object,underline:A.default.oneOf(["none","hover","always"]),variant:A.default.string});var H=l(W,{name:"MuiLink"})(q);e.default=H,e.styles=W,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=Link.js.map
