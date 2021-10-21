define(["exports","../extends","../objectWithoutPropertiesLoose","react","react-is","prop-types","clsx","./ToggleButtonGroup/isValueSelected","@material-ui/core/styles","@material-ui/core/utils"],(function(e,t,o,r,a,i,n,l,s,d){function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var p=c(r),f=u(i),g=u(n);const m=e=>({root:{display:"inline-flex",borderRadius:e.shape.borderRadius},vertical:{flexDirection:"column"},grouped:{},groupedHorizontal:{"&:not(:first-child)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-child)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}),h=p.forwardRef((function(e,r){const{children:i,classes:n,className:s,exclusive:u=!1,onChange:c,orientation:f="horizontal",size:m="medium",value:h}=e,b=o._objectWithoutPropertiesLoose(e,["children","classes","className","exclusive","onChange","orientation","size","value"]),v=(e,t)=>{if(!c)return;const o=h&&h.indexOf(t);let r;h&&o>=0?(r=h.slice(),r.splice(o,1)):r=h?h.concat(t):[t],c(e,r)},R=(e,t)=>{c&&c(e,h===t?null:t)};return p.createElement("div",t._extends({role:"group",className:g.default(n.root,s,"vertical"===f&&n.vertical),ref:r},b),p.Children.map(i,(e=>p.isValidElement(e)?("production"!==process.env.NODE_ENV&&a.isFragment(e)&&console.error(["Material-UI: The ToggleButtonGroup component doesn't accept a Fragment as a child.","Consider providing an array instead."].join("\n")),p.cloneElement(e,{className:g.default(n.grouped,n[`grouped${d.capitalize(f)}`],e.props.className),onChange:u?R:v,selected:void 0===e.props.selected?l(e.props.value,h):e.props.selected,size:e.props.size||m})):null)))}));"production"!==process.env.NODE_ENV&&(h.propTypes={children:f.default.node,classes:f.default.object,className:f.default.string,exclusive:f.default.bool,onChange:f.default.func,orientation:f.default.oneOf(["horizontal","vertical"]),size:f.default.oneOf(["large","medium","small"]),value:f.default.any});var b=s.withStyles(m,{name:"MuiToggleButtonGroup"})(h);e.default=b,e.styles=m,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=ToggleButtonGroup.js.map