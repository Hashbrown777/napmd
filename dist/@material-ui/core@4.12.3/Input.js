define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","@material-ui/utils","./InputBase","./styles/withStyles","./FormControl/formControlState","./FormControl/FormControlContext","./utils/capitalize","./utils/useForkRef","./utils/setRef","./TextareaAutosize","./utils/debounce","./utils/deprecatedPropType","./InputBase/utils","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex"],(function(e,t,o,r,n,l,a,s,i,u,d,f,p,c,m,b,y,g,h,x,C,O,v,T,j,B,$,P,_,M,W,w,E,S,F,I,R,k,z,D){function A(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function N(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var U=N(r),X=A(n),L=A(l);const V=e=>{const t="light"===e.palette.type?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{root:{position:"relative"},formControl:{"label + &":{marginTop:16}},focused:{},disabled:{},colorSecondary:{"&$underline:after":{borderBottomColor:e.palette.secondary.main}},underline:{"&:after":{borderBottom:`2px solid ${e.palette.primary.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${t}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:not($disabled):before":{borderBottom:`2px solid ${e.palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${t}`}},"&$disabled:before":{borderBottomStyle:"dotted"}},error:{},marginDense:{},multiline:{},fullWidth:{},input:{},inputMarginDense:{},inputMultiline:{},inputTypeSearch:{}}},q=U.forwardRef((function(e,r){const{disableUnderline:n,classes:l,fullWidth:a=!1,inputComponent:i="input",multiline:u=!1,type:d="text"}=e,f=o._objectWithoutPropertiesLoose(e,["disableUnderline","classes","fullWidth","inputComponent","multiline","type"]);return U.createElement(s.default,t._extends({classes:t._extends({},l,{root:L.default(l.root,!n&&l.underline),underline:null}),fullWidth:a,inputComponent:i,multiline:u,ref:r,type:d},f))}));"production"!==process.env.NODE_ENV&&(q.propTypes={autoComplete:X.default.string,autoFocus:X.default.bool,classes:X.default.object,color:X.default.oneOf(["primary","secondary"]),defaultValue:X.default.any,disabled:X.default.bool,disableUnderline:X.default.bool,endAdornment:X.default.node,error:X.default.bool,fullWidth:X.default.bool,id:X.default.string,inputComponent:X.default.elementType,inputProps:X.default.object,inputRef:a.refType,margin:X.default.oneOf(["dense","none"]),maxRows:X.default.oneOfType([X.default.number,X.default.string]),multiline:X.default.bool,name:X.default.string,onChange:X.default.func,placeholder:X.default.string,readOnly:X.default.bool,required:X.default.bool,rows:X.default.oneOfType([X.default.number,X.default.string]),startAdornment:X.default.node,type:X.default.string,value:X.default.any}),q.muiName="Input";var G=i(V,{name:"MuiInput"})(q);e.default=G,e.styles=V,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=Input.js.map