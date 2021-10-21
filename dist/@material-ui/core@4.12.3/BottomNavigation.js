define(["exports","../extends","../objectWithoutPropertiesLoose","react","react-is","prop-types","clsx","./styles/withStyles","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","@material-ui/utils","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex"],(function(e,t,o,s,a,r,n,l,c,i,u,d,p,f,y,h,m,g,b,v,j,w,N,O,C,E,L,_,x,M,P){function T(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function k(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var B=k(s),D=T(r),V=T(n);const z=e=>({root:{display:"flex",justifyContent:"center",height:56,backgroundColor:e.palette.background.paper}}),F=B.forwardRef((function(e,s){const{children:r,classes:n,className:l,component:c="div",onChange:i,showLabels:u=!1,value:d}=e,p=o._objectWithoutPropertiesLoose(e,["children","classes","className","component","onChange","showLabels","value"]);return B.createElement(c,t._extends({className:V.default(n.root,l),ref:s},p),B.Children.map(r,((e,t)=>{if(!B.isValidElement(e))return null;"production"!==process.env.NODE_ENV&&a.isFragment(e)&&console.error(["Material-UI: The BottomNavigation component doesn't accept a Fragment as a child.","Consider providing an array instead."].join("\n"));const o=void 0===e.props.value?t:e.props.value;return B.cloneElement(e,{selected:o===d,showLabel:void 0!==e.props.showLabel?e.props.showLabel:u,value:o,onChange:i})})))}));"production"!==process.env.NODE_ENV&&(F.propTypes={children:D.default.node,classes:D.default.object,className:D.default.string,component:D.default.elementType,onChange:D.default.func,showLabels:D.default.bool,value:D.default.any});var I=l(z,{name:"MuiBottomNavigation"})(F);e.default=I,e.styles=z,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=BottomNavigation.js.map