define(["exports","../objectWithoutPropertiesLoose","../extends","react","prop-types","clsx","@material-ui/core/styles","@material-ui/core/Paper","./internal/svg-icons/SuccessOutlined","./internal/svg-icons/ReportProblemOutlined","./internal/svg-icons/ErrorOutline","./internal/svg-icons/InfoOutlined","./internal/svg-icons/Close","@material-ui/core/IconButton","@material-ui/core/utils"],(function(e,t,n,o,r,a,i,l,c,s,d,u,f,p,g){function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function h(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var y=h(o),b=m(r),v=m(a),x=m(l),E=m(p);const C=e=>{const t="light"===e.palette.type?i.darken:i.lighten,o="light"===e.palette.type?i.lighten:i.darken;return{root:n._extends({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:o(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:o(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:o(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:o(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:`1px solid ${e.palette.success.main}`,"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:`1px solid ${e.palette.info.main}`,"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:`1px solid ${e.palette.warning.main}`,"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:`1px solid ${e.palette.error.main}`,"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}},O={success:y.createElement(c,{fontSize:"inherit"}),warning:y.createElement(s,{fontSize:"inherit"}),error:y.createElement(d,{fontSize:"inherit"}),info:y.createElement(u,{fontSize:"inherit"})};var w=y.createElement(f,{fontSize:"small"});const $=y.forwardRef((function(e,o){const{action:r,children:a,classes:i,className:l,closeText:c="Close",color:s,icon:d,iconMapping:u=O,onClose:f,role:p="alert",severity:m="success",variant:h="standard"}=e,b=t._objectWithoutPropertiesLoose(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return y.createElement(x.default,n._extends({role:p,square:!0,elevation:0,className:v.default(i.root,i[`${h}${g.capitalize(s||m)}`],l),ref:o},b),!1!==d?y.createElement("div",{className:i.icon},d||u[m]||O[m]):null,y.createElement("div",{className:i.message},a),null!=r?y.createElement("div",{className:i.action},r):null,null==r&&f?y.createElement("div",{className:i.action},y.createElement(E.default,{size:"small","aria-label":c,title:c,color:"inherit",onClick:f},w)):null)}));"production"!==process.env.NODE_ENV&&($.propTypes={action:b.default.node,children:b.default.node,classes:b.default.object,className:b.default.string,closeText:b.default.string,color:b.default.oneOf(["error","info","success","warning"]),icon:b.default.node,iconMapping:b.default.shape({error:b.default.node,info:b.default.node,success:b.default.node,warning:b.default.node}),onClose:b.default.func,role:b.default.string,severity:b.default.oneOf(["error","info","success","warning"]),variant:b.default.oneOf(["filled","outlined","standard"])});var k=i.withStyles(C,{name:"MuiAlert"})($);e.default=k,e.styles=C,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=Alert.js.map
