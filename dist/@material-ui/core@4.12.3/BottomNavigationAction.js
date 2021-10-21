define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","./styles/withStyles","./ButtonBase","./utils/unsupportedProp","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","@material-ui/utils","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex","react-dom","./utils/useForkRef","./utils/setRef","./utils/useEventCallback","./utils/deprecatedPropType","./utils/useIsFocusVisible","./ButtonBase/TouchRipple","react-transition-group","./ButtonBase/Ripple"],(function(e,t,o,s,l,a,n,r,i,c,u,p,d,f,y,m,b,h,g,x,O,j,v,w,T,k,C,N,B,P,R,E,_,z,D,L,M,F,S,W,$){function I(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function V(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var A=V(s),q=I(l),G=I(a);const H=e=>({root:{transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"6px 12px 8px",minWidth:80,maxWidth:168,color:e.palette.text.secondary,flex:"1","&$iconOnly":{paddingTop:16},"&$selected":{paddingTop:6,color:e.palette.primary.main}},selected:{},iconOnly:{},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"},label:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s","&$iconOnly":{opacity:0,transitionDelay:"0s"},"&$selected":{fontSize:e.typography.pxToRem(14)}}}),J=A.forwardRef((function(e,s){const{classes:l,className:a,icon:n,label:i,onChange:c,onClick:u,selected:p,showLabel:d,value:f}=e,y=o._objectWithoutPropertiesLoose(e,["classes","className","icon","label","onChange","onClick","selected","showLabel","value"]);return A.createElement(r.default,t._extends({ref:s,className:G.default(l.root,a,p?l.selected:!d&&l.iconOnly),focusRipple:!0,onClick:e=>{c&&c(e,f),u&&u(e)}},y),A.createElement("span",{className:l.wrapper},n,A.createElement("span",{className:G.default(l.label,p?l.selected:!d&&l.iconOnly)},i)))}));"production"!==process.env.NODE_ENV&&(J.propTypes={children:i,classes:q.default.object,className:q.default.string,icon:q.default.node,label:q.default.node,onChange:q.default.func,onClick:q.default.func,selected:q.default.bool,showLabel:q.default.bool,value:q.default.any});var K=n(H,{name:"MuiBottomNavigationAction"})(J);e.default=K,e.styles=H,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=BottomNavigationAction.js.map