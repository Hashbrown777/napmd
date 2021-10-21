define(["../../extends","../../objectWithoutPropertiesLoose","react","prop-types","../internal/svg-icons/KeyboardArrowLeft","../internal/svg-icons/KeyboardArrowRight","../styles/useTheme","../IconButton","../utils/createSvgIcon","../SvgIcon","clsx","@material-ui/utils","../styles/withStyles","@material-ui/styles","../styles/defaultTheme","../styles/createTheme","../styles/createBreakpoints","../styles/createMixins","../styles/createPalette","../colors/common","../colors/grey","../colors/indigo","../colors/pink","../colors/red","../colors/orange","../colors/blue","../colors/green","../styles/colorManipulator","../styles/createTypography","../styles/shadows","../styles/shape","../styles/createSpacing","@material-ui/system","../styles/transitions","../styles/zIndex","../utils/capitalize","../ButtonBase","react-dom","../utils/useForkRef","../utils/setRef","../utils/useEventCallback","../utils/deprecatedPropType","../utils/useIsFocusVisible","../ButtonBase/TouchRipple","react-transition-group","../ButtonBase/Ripple"],(function(e,t,o,n,r,s,a,l,c,u,i,d,p,f,g,y,b,P,h,m,B,E,I,j,k,v,x,w,C,R,O,T,_,M,S,q,z,L,A,D,F,K,N,V,W,G){function H(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function J(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,n.get?n:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var Q=J(o),U=H(n),X=Q.createElement(s,null),Y=Q.createElement(r,null),Z=Q.createElement(r,null),$=Q.createElement(s,null);const ee=Q.forwardRef((function(o,n){const{backIconButtonProps:r,count:s,nextIconButtonProps:c,onChangePage:u=(()=>{}),onPageChange:i=(()=>{}),page:d,rowsPerPage:p}=o,f=t._objectWithoutPropertiesLoose(o,["backIconButtonProps","count","nextIconButtonProps","onChangePage","onPageChange","page","rowsPerPage"]),g=a();return Q.createElement("div",e._extends({ref:n},f),Q.createElement(l.default,e._extends({onClick:e=>{u(e,d-1),i(e,d-1)},disabled:0===d,color:"inherit"},r),"rtl"===g.direction?X:Y),Q.createElement(l.default,e._extends({onClick:e=>{u(e,d+1),i(e,d+1)},disabled:-1!==s&&d>=Math.ceil(s/p)-1,color:"inherit"},c),"rtl"===g.direction?Z:$))}));return"production"!==process.env.NODE_ENV&&(ee.propTypes={backIconButtonProps:U.default.object,count:U.default.number.isRequired,nextIconButtonProps:U.default.object,onChangePage:U.default.func,onPageChange:U.default.func,page:U.default.number.isRequired,rowsPerPage:U.default.number.isRequired}),ee}));
//# sourceMappingURL=TablePaginationActions.js.map