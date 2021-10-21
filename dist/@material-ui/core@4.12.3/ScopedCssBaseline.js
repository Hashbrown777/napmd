define(["exports","../objectWithoutPropertiesLoose","../extends","react","prop-types","clsx","@material-ui/core/styles","./CssBaseline","./styles/withStyles","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","@material-ui/utils","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex"],(function(e,t,s,o,r,l,a,n,c,i,u,f,d,y,p,m,b,h,g,j,x,O,_,v,N,P,w,M,S,B,E,T){function W(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function k(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(s){if("default"!==s){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}})),t.default=e,Object.freeze(t)}var z=k(o),C=W(r),D=W(l);const L=e=>({root:s._extends({},n.html,n.body(e),{"& *, & *::before, & *::after":{boxSizing:"inherit"},"& strong, & b":{fontWeight:e.typography.fontWeightBold}})}),I=z.forwardRef((function(e,o){const{classes:r,className:l}=e,a=t._objectWithoutPropertiesLoose(e,["classes","className"]);return z.createElement("div",s._extends({className:D.default(r.root,l),ref:o},a))}));"production"!==process.env.NODE_ENV&&(I.propTypes={children:C.default.node,classes:C.default.object,className:C.default.string});var R=a.withStyles(L,{name:"MuiScopedCssBaseline"})(I);e.default=R,e.styles=L,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=ScopedCssBaseline.js.map