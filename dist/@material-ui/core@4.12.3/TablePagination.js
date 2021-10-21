define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","@material-ui/utils","clsx","./utils/deprecatedPropType","./styles/withStyles","./InputBase","./MenuItem","./Select","./TableCell","./Toolbar","./Typography","./TablePagination/TablePaginationActions","./utils/unstable_useId","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex","./FormControl/formControlState","./FormControl/FormControlContext","./utils/capitalize","./utils/useForkRef","./utils/setRef","./TextareaAutosize","./utils/debounce","./InputBase/utils","./ListItem","./ButtonBase","react-dom","./utils/useEventCallback","./utils/useIsFocusVisible","./ButtonBase/TouchRipple","react-transition-group","./ButtonBase/Ripple","./utils/isMuiElement","./List/ListContext","./Select/SelectInput","react-is","./utils/ownerDocument","./Menu","./Popover","./utils/ownerWindow","./utils/createChainedFunction","./Modal","./Portal","./Modal/ModalManager","./utils/getScrollbarSize","./Unstable_TrapFocus","./Modal/SimpleBackdrop","./Grow","./styles/useTheme","./transitions/utils","./Paper","./MenuList","./List","./utils/useControlled","./FormControl/useFormControl","./internal/svg-icons/ArrowDropDown","./utils/createSvgIcon","./SvgIcon","./Input","./NativeSelect","./NativeSelect/NativeSelectInput","./FilledInput","./OutlinedInput","./OutlinedInput/NotchedOutline","./Table/TableContext","./Table/Tablelvl2Context","./internal/svg-icons/KeyboardArrowLeft","./internal/svg-icons/KeyboardArrowRight","./IconButton"],(function(e,t,o,a,n,l,s,r,i,c,u,p,d,g,f,P,m,b,h,y,x,w,I,C,R,T,v,S,B,M,N,k,E,O,j,L,_,A,F,D,z,$,q,U,W,K,V,G,H,J,Q,X,Y,Z,ee,te,oe,ae,ne,le,se,re,ie,ce,ue,pe,de,ge,fe,Pe,me,be,he,ye,xe,we,Ie,Ce,Re,Te,ve,Se,Be,Me,Ne,ke,Ee,Oe,je,Le,_e,Ae){function Fe(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function De(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var a=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,a.get?a:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var ze=De(a),$e=Fe(n),qe=Fe(s);const Ue=e=>({root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}),We=({from:e,to:t,count:o})=>`${e}-${t} of ${-1!==o?o:`more than ${t}`}`,Ke=[10,25,50,100],Ve=ze.forwardRef((function(e,a){const{ActionsComponent:n=P,backIconButtonProps:l,backIconButtonText:s="Previous page",classes:r,className:i,colSpan:b,component:h=d.default,count:y,labelDisplayedRows:x=We,labelRowsPerPage:w="Rows per page:",nextIconButtonProps:I,nextIconButtonText:C="Next page",onChangePage:R,onPageChange:T,onChangeRowsPerPage:v,onRowsPerPageChange:S,page:B,rowsPerPage:M,rowsPerPageOptions:N=Ke,SelectProps:k={}}=e,E=o._objectWithoutPropertiesLoose(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onPageChange","onChangeRowsPerPage","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps"]),O=v||S;let j;h!==d.default&&"td"!==h||(j=b||1e3);const L=m(),_=m(),A=k.native?"option":u.default;return ze.createElement(h,t._extends({className:qe.default(r.root,i),colSpan:j,ref:a},E),ze.createElement(g.default,{className:r.toolbar},ze.createElement("div",{className:r.spacer}),N.length>1&&ze.createElement(f.default,{color:"inherit",variant:"body2",className:r.caption,id:_},w),N.length>1&&ze.createElement(p.default,t._extends({classes:{select:r.select,icon:r.selectIcon},input:ze.createElement(c.default,{className:qe.default(r.input,r.selectRoot)}),value:M,onChange:O,id:L,labelId:_},k),N.map((e=>ze.createElement(A,{className:r.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)))),ze.createElement(f.default,{color:"inherit",variant:"body2",className:r.caption},x({from:0===y?0:B*M+1,to:-1!==y?Math.min(y,(B+1)*M):(B+1)*M,count:-1===y?-1:y,page:B})),ze.createElement(n,{className:r.actions,backIconButtonProps:t._extends({title:s,"aria-label":s},l),count:y,nextIconButtonProps:t._extends({title:C,"aria-label":C},I),onChangePage:R,onPageChange:T,page:B,rowsPerPage:M})))}));"production"!==process.env.NODE_ENV&&(Ve.propTypes={ActionsComponent:$e.default.elementType,backIconButtonProps:$e.default.object,backIconButtonText:$e.default.string,classes:$e.default.object.isRequired,className:$e.default.string,colSpan:$e.default.number,component:$e.default.elementType,count:$e.default.number.isRequired,labelDisplayedRows:$e.default.func,labelRowsPerPage:$e.default.node,nextIconButtonProps:$e.default.object,nextIconButtonText:$e.default.string,onChangePage:r($e.default.func,"Use the `onPageChange` prop instead."),onChangeRowsPerPage:r($e.default.func,"Use the `onRowsPerPageChange` prop instead."),onPageChange:$e.default.func.isRequired,onRowsPerPageChange:$e.default.func,page:l.chainPropTypes($e.default.number.isRequired,(e=>{const{count:t,page:o,rowsPerPage:a}=e;if(-1===t)return null;const n=Math.max(0,Math.ceil(t/a)-1);return o<0||o>n?new Error(`Material-UI: The page prop of a TablePagination is out of range (0 to ${n}, but page is ${o}).`):null})),rowsPerPage:$e.default.number.isRequired,rowsPerPageOptions:$e.default.array,SelectProps:$e.default.object});var Ge=i(Ue,{name:"MuiTablePagination"})(Ve);e.default=Ge,e.styles=Ue,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=TablePagination.js.map