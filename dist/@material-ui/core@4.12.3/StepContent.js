define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","./Collapse","./styles/withStyles","@material-ui/utils","react-transition-group","./styles/transitions","./utils/deprecatedPropType","./transitions/utils","./styles/useTheme","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/zIndex","./SvgIcon","./utils/capitalize","./utils/useForkRef","./utils/setRef","react-dom"],(function(e,t,o,s,r,a,n,i,l,u,c,d,p,f,y,m,g,b,h,v,T,x,O,j,P,N,_,E,L,C,D,M,S,w,k,R,z,I,V,W){function A(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function B(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var F=B(s),U=A(r),$=A(a);const q=e=>({root:{marginTop:8,marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:`1px solid ${"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]}`},last:{borderLeft:"none"},transition:{}}),G=F.forwardRef((function(e,s){const{active:r,children:a,classes:i,className:l,expanded:u,last:c,orientation:d,TransitionComponent:p=n.default,transitionDuration:f="auto",TransitionProps:y}=e,m=o._objectWithoutPropertiesLoose(e,["active","alternativeLabel","children","classes","className","completed","expanded","last","optional","orientation","TransitionComponent","transitionDuration","TransitionProps"]);"production"!==process.env.NODE_ENV&&"vertical"!==d&&console.error("Material-UI: <StepContent /> is only designed for use with the vertical stepper.");let g=f;return"auto"!==f||p.muiSupportAuto||(g=void 0),F.createElement("div",t._extends({className:$.default(i.root,l,c&&i.last),ref:s},m),F.createElement(p,t._extends({in:r||u,className:i.transition,timeout:g,unmountOnExit:!0},y),a))}));"production"!==process.env.NODE_ENV&&(G.propTypes={children:U.default.node,classes:U.default.object,className:U.default.string,TransitionComponent:U.default.elementType,transitionDuration:U.default.oneOfType([U.default.oneOf(["auto"]),U.default.number,U.default.shape({appear:U.default.number,enter:U.default.number,exit:U.default.number})]),TransitionProps:U.default.object});var H=i(q,{name:"MuiStepContent"})(G);e.default=H,e.styles=q,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=StepContent.js.map