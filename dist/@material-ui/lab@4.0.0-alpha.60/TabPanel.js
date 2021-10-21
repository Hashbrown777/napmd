define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","@material-ui/core/styles","./TabContext"],(function(e,t,r,a,n,o,l,s){function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var d=u(a),i=c(n),f=c(o);const p=e=>({root:{padding:e.spacing(3)}}),b=d.forwardRef((function(e,a){const{children:n,className:o,classes:l,value:c}=e,u=r._objectWithoutPropertiesLoose(e,["children","className","classes","value"]),i=s.useTabContext();if(null===i)throw new TypeError("No TabContext provided");const p=s.getPanelId(i,c),b=s.getTabId(i,c);return d.createElement("div",t._extends({"aria-labelledby":b,className:f.default(l.root,o),hidden:c!==i.value,id:p,ref:a,role:"tabpanel"},u),c===i.value&&n)}));"production"!==process.env.NODE_ENV&&(b.propTypes={children:i.default.node,classes:i.default.object,className:i.default.string,value:i.default.string.isRequired});var v=l.withStyles(p,{name:"MuiTabPanel"})(b);e.default=v,e.styles=p,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=TabPanel.js.map
