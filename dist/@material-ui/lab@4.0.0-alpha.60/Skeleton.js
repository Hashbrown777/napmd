define(["exports","../extends","../objectWithoutPropertiesLoose","react","clsx","prop-types","@material-ui/core/styles"],(function(e,t,a,n,r,o,i){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var n=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var f=l(n),u=s(r),c=s(o);const d=e=>({root:{display:"block",backgroundColor:i.alpha(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:`linear-gradient(90deg, transparent, ${e.palette.action.hover}, transparent)`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}),p=f.forwardRef((function(e,n){const{animation:r="pulse",classes:o,className:i,component:s="span",height:l,variant:c="text",width:d}=e,p=a._objectWithoutPropertiesLoose(e,["animation","classes","className","component","height","variant","width"]),h=Boolean(p.children);return f.createElement(s,t._extends({ref:n,className:u.default(o.root,o[c],i,h&&[o.withChildren,!d&&o.fitContent,!l&&o.heightAuto],!1!==r&&o[r])},p,{style:t._extends({width:d,height:l},p.style)}))}));"production"!==process.env.NODE_ENV&&(p.propTypes={animation:c.default.oneOf(["pulse","wave",!1]),children:c.default.node,classes:c.default.object.isRequired,className:c.default.string,component:c.default.elementType,height:c.default.oneOfType([c.default.number,c.default.string]),variant:c.default.oneOf(["text","rect","circle"]),width:c.default.oneOfType([c.default.number,c.default.string])});var h=i.withStyles(d,{name:"MuiSkeleton"})(p);e.default=h,e.styles=d,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=Skeleton.js.map