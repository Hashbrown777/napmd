define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","@material-ui/utils","./Input","./FilledInput","./OutlinedInput","./InputLabel","./FormControl","./FormControl/FormControlContext","./FormHelperText","./Select","./styles/withStyles","./InputBase","./FormControl/formControlState","./utils/capitalize","./utils/useForkRef","./utils/setRef","./TextareaAutosize","./utils/debounce","./utils/deprecatedPropType","./InputBase/utils","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex","./OutlinedInput/NotchedOutline","./styles/useTheme","./FormControl/useFormControl","./FormLabel","./utils/isMuiElement","./Select/SelectInput","react-is","./utils/ownerDocument","./Menu","./Popover","react-dom","./utils/ownerWindow","./utils/createChainedFunction","./Modal","./Portal","./utils/useEventCallback","./Modal/ModalManager","./utils/getScrollbarSize","./Unstable_TrapFocus","./Modal/SimpleBackdrop","./Grow","react-transition-group","./transitions/utils","./Paper","./MenuList","./List","./List/ListContext","./utils/useControlled","./internal/svg-icons/ArrowDropDown","./utils/createSvgIcon","./SvgIcon","./NativeSelect","./NativeSelect/NativeSelectInput"],(function(e,t,l,o,a,r,n,s,u,i,d,c,f,p,m,b,y,h,g,x,v,w,F,P,T,C,I,O,M,S,j,L,R,E,_,N,k,B,W,z,D,V,q,H,A,U,$,G,J,K,Q,X,Y,Z,ee,te,le,oe,ae,re,ne,se,ue,ie,de,ce,fe,pe,me,be,ye,he,ge,xe,ve,we,Fe,Pe,Te,Ce){function Ie(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function Oe(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(l){if("default"!==l){var o=Object.getOwnPropertyDescriptor(e,l);Object.defineProperty(t,l,o.get?o:{enumerable:!0,get:function(){return e[l]}})}})),t.default=e,Object.freeze(t)}var Me=Oe(o),Se=Ie(a),je=Ie(r);const Le={standard:s.default,filled:u.default,outlined:i.default},Re={root:{}},Ee=Me.forwardRef((function(e,o){const{autoComplete:a,autoFocus:r=!1,children:n,classes:s,className:u,color:i="primary",defaultValue:f,disabled:b=!1,error:y=!1,FormHelperTextProps:h,fullWidth:g=!1,helperText:x,hiddenLabel:v,id:w,InputLabelProps:F,inputProps:P,InputProps:T,inputRef:C,label:I,multiline:O=!1,name:M,onBlur:S,onChange:j,onFocus:L,placeholder:R,required:E=!1,rows:_,rowsMax:N,maxRows:k,minRows:B,select:W=!1,SelectProps:z,type:D,value:V,variant:q="standard"}=e,H=l._objectWithoutPropertiesLoose(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]);"production"!==process.env.NODE_ENV&&W&&!n&&console.error("Material-UI: `children` must be passed when using the `TextField` component with `select`.");const A={};if("outlined"===q&&(F&&void 0!==F.shrink&&(A.notched=F.shrink),I)){const e=F?.required??E;A.label=Me.createElement(Me.Fragment,null,I,e&&" *")}W&&(z&&z.native||(A.id=void 0),A["aria-describedby"]=void 0);const U=x&&w?`${w}-helper-text`:void 0,$=I&&w?`${w}-label`:void 0,G=Le[q],J=Me.createElement(G,t._extends({"aria-describedby":U,autoComplete:a,autoFocus:r,defaultValue:f,fullWidth:g,multiline:O,name:M,rows:_,rowsMax:N,maxRows:k,minRows:B,type:D,value:V,id:w,inputRef:C,onBlur:S,onChange:j,onFocus:L,placeholder:R,inputProps:P},A,T));return Me.createElement(c.default,t._extends({className:je.default(s.root,u),disabled:b,error:y,fullWidth:g,hiddenLabel:v,ref:o,required:E,color:i,variant:q},H),I&&Me.createElement(d.default,t._extends({htmlFor:w,id:$},F),I),W?Me.createElement(m.default,t._extends({"aria-describedby":U,id:w,labelId:$,value:V,input:J},z),n):J,x&&Me.createElement(p.default,t._extends({id:U},h),x))}));"production"!==process.env.NODE_ENV&&(Ee.propTypes={autoComplete:Se.default.string,autoFocus:Se.default.bool,children:Se.default.node,classes:Se.default.object,className:Se.default.string,color:Se.default.oneOf(["primary","secondary"]),defaultValue:Se.default.any,disabled:Se.default.bool,error:Se.default.bool,FormHelperTextProps:Se.default.object,fullWidth:Se.default.bool,helperText:Se.default.node,hiddenLabel:Se.default.bool,id:Se.default.string,InputLabelProps:Se.default.object,inputProps:Se.default.object,InputProps:Se.default.object,inputRef:n.refType,label:Se.default.node,margin:Se.default.oneOf(["dense","none","normal"]),maxRows:Se.default.oneOfType([Se.default.number,Se.default.string]),minRows:Se.default.oneOfType([Se.default.number,Se.default.string]),multiline:Se.default.bool,name:Se.default.string,onBlur:Se.default.func,onChange:Se.default.func,onFocus:Se.default.func,placeholder:Se.default.string,required:Se.default.bool,rows:Se.default.oneOfType([Se.default.number,Se.default.string]),rowsMax:Se.default.oneOfType([Se.default.number,Se.default.string]),select:Se.default.bool,SelectProps:Se.default.object,size:Se.default.oneOf(["medium","small"]),type:Se.default.string,value:Se.default.any,variant:Se.default.oneOf(["filled","outlined","standard"])});var _e=b(Re,{name:"MuiTextField"})(Ee);e.default=_e,e.styles=Re,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=TextField.js.map
