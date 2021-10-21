define(["../extends","../objectWithoutPropertiesLoose","react","prop-types","react-transition-group","./styles/transitions","./styles/useTheme","./transitions/utils","./utils/useForkRef","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","@material-ui/utils","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/zIndex","./utils/setRef"],(function(e,t,n,o,r,i,s,a,l,u,c,d,f,m,p,y,E,b,g,x,h,T,v,j,O,_,M,P,k,w,S,C){function R(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function z(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var D=z(n),L=R(o);const N={entering:{transform:"none"},entered:{transform:"none"}},W={enter:i.duration.enteringScreen,exit:i.duration.leavingScreen},B=D.forwardRef((function(n,o){const{children:i,disableStrictModeCompat:u=!1,in:c,onEnter:d,onEntered:f,onEntering:m,onExit:p,onExited:y,onExiting:E,style:b,timeout:g=W,TransitionComponent:x=r.Transition}=n,h=t._objectWithoutPropertiesLoose(n,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),T=s(),v=T.unstable_strictMode&&!u,j=D.useRef(null),O=l(i.ref,o),_=l(v?j:void 0,O),M=e=>(t,n)=>{if(e){const[o,r]=v?[j.current,t]:[t,n];void 0===r?e(o):e(o,r)}},P=M(m),k=M(((e,t)=>{a.reflow(e);const n=a.getTransitionProps({style:b,timeout:g},{mode:"enter"});e.style.webkitTransition=T.transitions.create("transform",n),e.style.transition=T.transitions.create("transform",n),d&&d(e,t)})),w=M(f),S=M(E),C=M((e=>{const t=a.getTransitionProps({style:b,timeout:g},{mode:"exit"});e.style.webkitTransition=T.transitions.create("transform",t),e.style.transition=T.transitions.create("transform",t),p&&p(e)})),R=M(y);return D.createElement(x,e._extends({appear:!0,in:c,nodeRef:v?j:void 0,onEnter:k,onEntered:w,onEntering:P,onExit:C,onExited:R,onExiting:S,timeout:g},h),((t,n)=>D.cloneElement(i,e._extends({style:e._extends({transform:"scale(0)",visibility:"exited"!==t||c?void 0:"hidden"},N[t],b,i.props.style),ref:_},n))))}));return"production"!==process.env.NODE_ENV&&(B.propTypes={children:L.default.element,disableStrictModeCompat:L.default.bool,in:L.default.bool,onEnter:L.default.func,onEntered:L.default.func,onEntering:L.default.func,onExit:L.default.func,onExited:L.default.func,onExiting:L.default.func,style:L.default.object,timeout:L.default.oneOfType([L.default.number,L.default.shape({appear:L.default.number,enter:L.default.number,exit:L.default.number})])}),B}));
//# sourceMappingURL=Zoom.js.map
