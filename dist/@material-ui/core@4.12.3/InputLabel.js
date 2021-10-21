define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","./FormControl/formControlState","./FormControl/useFormControl","./styles/withStyles","./FormLabel","./FormControl/FormControlContext","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","@material-ui/utils","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex","./utils/capitalize"],(function(e,t,r,s,a,o,n,l,i,d,c,f,u,m,p,y,b,x,g,h,k,O,v,j,C,D,F,_,E,N,P,z,M,$,q){function w(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function I(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var L=I(s),S=w(a),T=w(o);const A=e=>({root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}),W=L.forwardRef((function(e,s){const{classes:a,className:o,disableAnimation:i=!1,shrink:c}=e,f=r._objectWithoutPropertiesLoose(e,["classes","className","disableAnimation","margin","shrink","variant"]),u=l();let m=c;void 0===m&&u&&(m=u.filled||u.focused||u.adornedStart);const p=n({props:e,muiFormControl:u,states:["margin","variant"]});return L.createElement(d.default,t._extends({"data-shrink":m,className:T.default(a.root,o,u&&a.formControl,!i&&a.animated,m&&a.shrink,"dense"===p.margin&&a.marginDense,{filled:a.filled,outlined:a.outlined}[p.variant]),classes:{focused:a.focused,disabled:a.disabled,error:a.error,required:a.required,asterisk:a.asterisk},ref:s},f))}));"production"!==process.env.NODE_ENV&&(W.propTypes={children:S.default.node,classes:S.default.object,className:S.default.string,color:S.default.oneOf(["primary","secondary"]),disableAnimation:S.default.bool,disabled:S.default.bool,error:S.default.bool,focused:S.default.bool,margin:S.default.oneOf(["dense"]),required:S.default.bool,shrink:S.default.bool,variant:S.default.oneOf(["filled","outlined","standard"])});var B=i(A,{name:"MuiInputLabel"})(W);e.default=B,e.styles=A,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=InputLabel.js.map