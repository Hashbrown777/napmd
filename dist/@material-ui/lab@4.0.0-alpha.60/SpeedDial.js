define(["exports","../extends","../objectWithoutPropertiesLoose","react","react-is","prop-types","clsx","@material-ui/core/styles","@material-ui/core/Zoom","@material-ui/core/Fab","@material-ui/core/utils"],(function(e,t,n,o,r,i,a,s,u,c,l){function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var p=f(o),m=d(i),b=d(a),g=d(u),v=d(c);function y(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}const E=e=>({root:{zIndex:e.zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},fab:{pointerEvents:"auto"},directionUp:{flexDirection:"column-reverse","& $actions":{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}},directionDown:{flexDirection:"column","& $actions":{flexDirection:"column",marginTop:-32,paddingTop:48}},directionLeft:{flexDirection:"row-reverse","& $actions":{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}},directionRight:{flexDirection:"row","& $actions":{flexDirection:"row",marginLeft:-32,paddingLeft:48}},actions:{display:"flex",pointerEvents:"auto"},actionsClosed:{transition:"top 0s linear 0.2s",pointerEvents:"none"}}),h=p.forwardRef((function(e,o){const{ariaLabel:i,FabProps:{ref:a}={},children:u,classes:c,className:d,direction:f="up",hidden:m=!1,icon:E,onBlur:h,onClose:D,onFocus:x,onKeyDown:w,onMouseEnter:T,onMouseLeave:P,onOpen:L,open:j,TransitionComponent:C=g.default,transitionDuration:F={enter:s.duration.enteringScreen,exit:s.duration.leavingScreen},TransitionProps:O}=e,M=n._objectWithoutPropertiesLoose(e.FabProps,["ref"]),_=n._objectWithoutPropertiesLoose(e,["ariaLabel","FabProps","children","classes","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"]),N=p.useRef();p.useEffect((()=>()=>{clearTimeout(N.current)}),[]);const R=p.useRef(0),$=p.useRef(),k=p.useRef([]);k.current=[k.current[0]];const I=p.useCallback((e=>{k.current[0]=e}),[]),z=l.useForkRef(a,I),B=(e,t)=>n=>{k.current[e+1]=n,t&&t(n)};p.useEffect((()=>{j||(R.current=0,$.current=void 0)}),[j]);const S=e=>{"mouseleave"===e.type&&P&&P(e),"blur"===e.type&&h&&h(e),clearTimeout(N.current),D&&("blur"===e.type?(e.persist(),N.current=setTimeout((()=>{D(e,"blur")}))):D(e,"mouseLeave"))},K=e=>{"mouseenter"===e.type&&T&&T(e),"focus"===e.type&&x&&x(e),clearTimeout(N.current),L&&!j&&(e.persist(),N.current=setTimeout((()=>{L(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])})))},V=i.replace(/^[^a-z]+|[^\w:.-]+/gi,""),W=p.Children.toArray(u).filter((e=>("production"!==process.env.NODE_ENV&&r.isFragment(e)&&console.error(["Material-UI: The SpeedDial component doesn't accept a Fragment as a child.","Consider providing an array instead."].join("\n")),p.isValidElement(e)))),q=W.map(((e,o)=>{const{FabProps:{ref:r}={}}=e.props,i=n._objectWithoutPropertiesLoose(e.props.FabProps,["ref"]);return p.cloneElement(e,{FabProps:t._extends({},i,{ref:B(o,r)}),delay:30*(j?o:W.length-o),open:j,id:`${V}-action-${o}`})}));return p.createElement("div",t._extends({className:b.default(c.root,c[`direction${l.capitalize(f)}`],d),ref:o,role:"presentation",onKeyDown:e=>{w&&w(e);const t=e.key.replace("Arrow","").toLowerCase(),{current:n=t}=$;var o,r,i;if("Escape"!==e.key){if(y(t)===y(n)&&void 0!==y(t)){e.preventDefault();const a=t===n?1:-1,s=(o=R.current+a,r=0,i=k.current.length-1,o<r?r:o>i?i:o);k.current[s].focus(),R.current=s,$.current=n}}else D&&(k.current[0].focus(),D(e,"escapeKeyDown"))},onBlur:S,onFocus:K,onMouseEnter:K,onMouseLeave:S},_),p.createElement(C,t._extends({in:!m,timeout:F,unmountOnExit:!0},O),p.createElement(v.default,t._extends({color:"primary","aria-label":i,"aria-haspopup":"true","aria-expanded":j,"aria-controls":`${V}-actions`},M,{onClick:e=>{M.onClick&&M.onClick(e),clearTimeout(N.current),j?D&&D(e,"toggle"):L&&L(e,"toggle")},className:b.default(c.fab,M.className),ref:z}),p.isValidElement(E)&&l.isMuiElement(E,["SpeedDialIcon"])?p.cloneElement(E,{open:j}):E)),p.createElement("div",{id:`${V}-actions`,role:"menu","aria-orientation":y(f),className:b.default(c.actions,!j&&c.actionsClosed)},q))}));"production"!==process.env.NODE_ENV&&(h.propTypes={ariaLabel:m.default.string.isRequired,children:m.default.node,classes:m.default.object,className:m.default.string,direction:m.default.oneOf(["down","left","right","up"]),FabProps:m.default.object,hidden:m.default.bool,icon:m.default.node,onBlur:m.default.func,onClose:m.default.func,onFocus:m.default.func,onKeyDown:m.default.func,onMouseEnter:m.default.func,onMouseLeave:m.default.func,onOpen:m.default.func,open:m.default.bool.isRequired,openIcon:m.default.node,TransitionComponent:m.default.elementType,transitionDuration:m.default.oneOfType([m.default.number,m.default.shape({appear:m.default.number,enter:m.default.number,exit:m.default.number})]),TransitionProps:m.default.object});var D=s.withStyles(E,{name:"MuiSpeedDial"})(h);e.default=D,e.styles=E,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=SpeedDial.js.map