define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","./styles/withStyles","./utils/capitalize","./Paper","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","@material-ui/utils","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex"],(function(e,t,o,r,s,a,i,l,n,c,p,u,d,f,y,m,b,g,x,h,k,j,v,O,P,T,S,_,z,N,w,C){function M(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function D(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var E=D(r),I=M(s),B=M(a);const A=e=>{const t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}},L=E.forwardRef((function(e,r){const{classes:s,className:a,color:i="primary",position:c="fixed"}=e,p=o._objectWithoutPropertiesLoose(e,["classes","className","color","position"]);return E.createElement(n.default,t._extends({square:!0,component:"header",elevation:4,className:B.default(s.root,s[`position${l(c)}`],s[`color${l(i)}`],a,"fixed"===c&&"mui-fixed"),ref:r},p))}));"production"!==process.env.NODE_ENV&&(L.propTypes={children:I.default.node,classes:I.default.object,className:I.default.string,color:I.default.oneOf(["default","inherit","primary","secondary","transparent"]),position:I.default.oneOf(["absolute","fixed","relative","static","sticky"])});var R=i(A,{name:"MuiAppBar"})(L);e.default=R,e.styles=A,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=AppBar.js.map