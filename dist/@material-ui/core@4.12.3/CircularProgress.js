define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","@material-ui/utils","./styles/withStyles","./utils/capitalize","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex"],(function(e,t,r,a,s,i,n,o,l,c,d,f,u,m,p,y,h,k,b,v,x,g,D,w,O,S,j,P,M,E,N){function T(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function _(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var z=_(a),I=T(s),$=T(i);const U=44,W=e=>({root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}),B=z.forwardRef((function(e,a){const{classes:s,className:i,color:n="primary",disableShrink:o=!1,size:c=40,style:d,thickness:f=3.6,value:u=0,variant:m="indeterminate"}=e,p=r._objectWithoutPropertiesLoose(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),y={},h={},k={};if("determinate"===m||"static"===m){const e=2*Math.PI*((U-f)/2);y.strokeDasharray=e.toFixed(3),k["aria-valuenow"]=Math.round(u),y.strokeDashoffset=`${((100-u)/100*e).toFixed(3)}px`,h.transform="rotate(-90deg)"}return z.createElement("div",t._extends({className:$.default(s.root,i,"inherit"!==n&&s[`color${l(n)}`],{determinate:s.determinate,indeterminate:s.indeterminate,static:s.static}[m]),style:t._extends({width:c,height:c},h,d),ref:a,role:"progressbar"},k,p),z.createElement("svg",{className:s.svg,viewBox:"22 22 44 44"},z.createElement("circle",{className:$.default(s.circle,o&&s.circleDisableShrink,{determinate:s.circleDeterminate,indeterminate:s.circleIndeterminate,static:s.circleStatic}[m]),style:y,cx:U,cy:U,r:(U-f)/2,fill:"none",strokeWidth:f})))}));"production"!==process.env.NODE_ENV&&(B.propTypes={classes:I.default.object,className:I.default.string,color:I.default.oneOf(["inherit","primary","secondary"]),disableShrink:n.chainPropTypes(I.default.bool,(e=>e.disableShrink&&e.variant&&"indeterminate"!==e.variant?new Error("Material-UI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect."):null)),size:I.default.oneOfType([I.default.number,I.default.string]),style:I.default.object,thickness:I.default.number,value:I.default.number,variant:n.chainPropTypes(I.default.oneOf(["determinate","indeterminate","static"]),(e=>{const{variant:t}=e;if("static"===t)throw new Error('Material-UI: `variant="static"` was deprecated. Use `variant="determinate"` instead.');return null}))});var C=o(W,{name:"MuiCircularProgress",flip:!1})(B);e.default=C,e.styles=W,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=CircularProgress.js.map
