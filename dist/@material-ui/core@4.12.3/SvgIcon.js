define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","@material-ui/utils","./styles/withStyles","./utils/capitalize","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex"],(function(e,t,o,r,l,i,n,s,a,c,d,f,u,p,m,y,h,g,S,b,z,v,x,w,j,O,T,P,E,N,_){function M(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function k(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var B=k(r),I=M(l),R=M(i);const A=e=>({root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}),C=B.forwardRef((function(e,r){const{children:l,classes:i,className:n,color:s="inherit",component:c="svg",fontSize:d="medium",htmlColor:f,titleAccess:u,viewBox:p="0 0 24 24"}=e,m=o._objectWithoutPropertiesLoose(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return B.createElement(c,t._extends({className:R.default(i.root,n,"inherit"!==s&&i[`color${a(s)}`],"default"!==d&&"medium"!==d&&i[`fontSize${a(d)}`]),focusable:"false",viewBox:p,color:f,"aria-hidden":!u||void 0,role:u?"img":void 0,ref:r},m),l,u?B.createElement("title",null,u):null)}));"production"!==process.env.NODE_ENV&&(C.propTypes={children:I.default.node,classes:I.default.object,className:I.default.string,color:I.default.oneOf(["action","disabled","error","inherit","primary","secondary"]),component:I.default.elementType,fontSize:n.chainPropTypes(I.default.oneOf(["default","inherit","large","medium","small"]),(e=>{const{fontSize:t}=e;if("default"===t)throw new Error('Material-UI: `fontSize="default"` is deprecated. Use `fontSize="medium"` instead.');return null})),htmlColor:I.default.string,shapeRendering:I.default.string,titleAccess:I.default.string,viewBox:I.default.string}),C.muiName="SvgIcon";var D=s(A,{name:"MuiSvgIcon"})(C);e.default=D,e.styles=A,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=SvgIcon.js.map