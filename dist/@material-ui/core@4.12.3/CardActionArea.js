define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","./styles/withStyles","./ButtonBase","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","@material-ui/utils","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex","react-dom","./utils/useForkRef","./utils/setRef","./utils/useEventCallback","./utils/deprecatedPropType","./utils/useIsFocusVisible","./ButtonBase/TouchRipple","react-transition-group","./ButtonBase/Ripple"],(function(e,t,s,o,r,i,a,l,c,n,u,f,d,p,y,h,b,g,m,v,N,j,O,V,k,x,B,C,E,P,_,w,R,T,M,H,A,$,z,D){function F(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function I(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(s){if("default"!==s){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}})),t.default=e,Object.freeze(t)}var L=I(o),S=F(r),W=F(i);const q=e=>({root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}),G=L.forwardRef((function(e,o){const{children:r,classes:i,className:a,focusVisibleClassName:c}=e,n=s._objectWithoutPropertiesLoose(e,["children","classes","className","focusVisibleClassName"]);return L.createElement(l.default,t._extends({className:W.default(i.root,a),focusVisibleClassName:W.default(c,i.focusVisible),ref:o},n),r,L.createElement("span",{className:i.focusHighlight}))}));"production"!==process.env.NODE_ENV&&(G.propTypes={children:S.default.node,classes:S.default.object,className:S.default.string,focusVisibleClassName:S.default.string});var J=a(q,{name:"MuiCardActionArea"})(G);e.default=J,e.styles=q,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=CardActionArea.js.map