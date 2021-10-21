define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","@material-ui/utils","./styles/withStyles","./utils/capitalize","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex"],(function(e,t,o,r,a,l,s,i,n,c,d,f,u,p,m,y,h,S,z,g,b,j,x,O,T,v,w,P,N,_,E){function M(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function I(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var R=I(r),k=M(a),D=M(l);const L=e=>({root:{userSelect:"none",fontSize:e.typography.pxToRem(24),width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(36)}}),U=R.forwardRef((function(e,r){const{classes:a,className:l,color:s="inherit",component:i="span",fontSize:c="medium"}=e,d=o._objectWithoutPropertiesLoose(e,["classes","className","color","component","fontSize"]);return R.createElement(i,t._extends({className:D.default("material-icons",a.root,l,"inherit"!==s&&a[`color${n(s)}`],"default"!==c&&"medium"!==c&&a[`fontSize${n(c)}`]),"aria-hidden":!0,ref:r},d))}));"production"!==process.env.NODE_ENV&&(U.propTypes={children:k.default.node,classes:k.default.object.isRequired,className:k.default.string,color:k.default.oneOf(["inherit","primary","secondary","action","error","disabled"]),component:k.default.elementType,fontSize:s.chainPropTypes(k.default.oneOf(["default","inherit","large","medium","small"]),(e=>{const{fontSize:t}=e;if("default"===t)throw new Error('Material-UI: `fontSize="default"` is deprecated. Use `fontSize="medium"` instead.');return null}))}),U.muiName="Icon";var W=i(L,{name:"MuiIcon"})(U);e.default=W,e.styles=L,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=Icon.js.map