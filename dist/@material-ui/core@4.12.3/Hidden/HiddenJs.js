define(["prop-types","@material-ui/utils","../withWidth","../styles/useTheme","../../extends","../../objectWithoutPropertiesLoose","react","@material-ui/styles","hoist-non-react-statics","../styles/createBreakpoints","../useMediaQuery","../styles/defaultTheme","../styles/createTheme","../styles/createMixins","../styles/createPalette","../colors/common","../colors/grey","../colors/indigo","../colors/pink","../colors/red","../colors/orange","../colors/blue","../colors/green","../styles/colorManipulator","../styles/createTypography","../styles/shadows","../styles/shape","../styles/createSpacing","@material-ui/system","../styles/transitions","../styles/zIndex"],(function(e,t,o,s,l,a,r,n,i,d,f,u,c,p,y,m,h,b,g,x,w,k,D,T,O,U,W,j,M,N,P){function v(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var A=v(e);function E(e){const{children:t,only:l,width:a}=e,r=s();let n=!0;if(l)if(Array.isArray(l))for(let e=0;e<l.length;e+=1){if(a===l[e]){n=!1;break}}else l&&a===l&&(n=!1);if(n)for(let t=0;t<r.breakpoints.keys.length;t+=1){const s=r.breakpoints.keys[t],l=e[`${s}Up`],i=e[`${s}Down`];if(l&&o.isWidthUp(s,a)||i&&o.isWidthDown(s,a)){n=!1;break}}return n?t:null}return E.propTypes={children:A.default.node,className:A.default.string,implementation:A.default.oneOf(["js","css"]),initialWidth:A.default.oneOf(["xs","sm","md","lg","xl"]),lgDown:A.default.bool,lgUp:A.default.bool,mdDown:A.default.bool,mdUp:A.default.bool,only:A.default.oneOfType([A.default.oneOf(["xs","sm","md","lg","xl"]),A.default.arrayOf(A.default.oneOf(["xs","sm","md","lg","xl"]))]),smDown:A.default.bool,smUp:A.default.bool,width:A.default.string.isRequired,xlDown:A.default.bool,xlUp:A.default.bool,xsDown:A.default.bool,xsUp:A.default.bool},"production"!==process.env.NODE_ENV&&(E.propTypes=t.exactProp(E.propTypes)),o.default()(E)}));
//# sourceMappingURL=HiddenJs.js.map