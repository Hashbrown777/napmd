define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","@material-ui/core/utils","@material-ui/core/styles","./Timeline/TimelineContext","./TimelineItem/TimelineItemContext"],(function(e,t,n,r,o,i,s,a,l,c){function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var d=f(r),p=u(o),m=u(i);const x=()=>({root:{flex:1,padding:"6px 16px"},alignRight:{textAlign:"right"}}),b=d.forwardRef((function(e,r){const{classes:o,className:i}=e,a=n._objectWithoutPropertiesLoose(e,["classes","className"]),{align:u="left"}=d.useContext(l),{classes:f={}}=d.useContext(c);return d.createElement("div",t._extends({className:m.default(o.root,f.content,o[`align${s.capitalize(u)}`],i),ref:r},a))}));"production"!==process.env.NODE_ENV&&(b.propTypes={children:p.default.node,classes:p.default.object,className:p.default.string});var g=a.withStyles(x,{name:"MuiTimelineContent"})(b);e.default=g,e.styles=x,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=TimelineContent.js.map
