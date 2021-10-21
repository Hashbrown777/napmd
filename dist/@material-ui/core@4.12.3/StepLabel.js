define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","./styles/withStyles","./Typography","./StepIcon","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","@material-ui/utils","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex","./utils/capitalize","./internal/svg-icons/CheckCircle","./utils/createSvgIcon","./SvgIcon","./internal/svg-icons/Warning"],(function(e,t,a,l,o,r,n,s,i,c,d,p,u,f,m,b,y,v,g,h,x,S,L,j,I,N,C,P,E,O,_,T,$,k,w,z,M){function W(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function D(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var l=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,l.get?l:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var R=D(l),A=W(o),B=W(r);const V=e=>({root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}),q=R.forwardRef((function(e,l){const{active:o=!1,alternativeLabel:r=!1,children:n,classes:c,className:d,completed:p=!1,disabled:u=!1,error:f=!1,icon:m,optional:b,orientation:y="horizontal",StepIconComponent:v,StepIconProps:g}=e,h=a._objectWithoutPropertiesLoose(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]);let x=v;return m&&!x&&(x=i.default),R.createElement("span",t._extends({className:B.default(c.root,c[y],d,u&&c.disabled,r&&c.alternativeLabel,f&&c.error),ref:l},h),m||x?R.createElement("span",{className:B.default(c.iconContainer,r&&c.alternativeLabel)},R.createElement(x,t._extends({completed:p,active:o,error:f,icon:m},g))):null,R.createElement("span",{className:c.labelContainer},n?R.createElement(s.default,{variant:"body2",component:"span",display:"block",className:B.default(c.label,r&&c.alternativeLabel,p&&c.completed,o&&c.active,f&&c.error)},n):null,b))}));"production"!==process.env.NODE_ENV&&(q.propTypes={children:A.default.node,classes:A.default.object,className:A.default.string,disabled:A.default.bool,error:A.default.bool,icon:A.default.node,optional:A.default.node,StepIconComponent:A.default.elementType,StepIconProps:A.default.object}),q.muiName="StepLabel";var F=n(V,{name:"MuiStepLabel"})(q);e.default=F,e.styles=V,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=StepLabel.js.map