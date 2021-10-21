define(["exports","../objectWithoutPropertiesLoose","../extends","react","react-dom","prop-types","@material-ui/styles","@material-ui/utils","./utils/deprecatedPropType","./utils/ownerDocument","./Portal","./utils/createChainedFunction","./utils/useForkRef","./utils/useEventCallback","./styles/zIndex","./Modal/ModalManager","./Unstable_TrapFocus","./Modal/SimpleBackdrop","./utils/setRef","./utils/getScrollbarSize","./utils/ownerWindow"],(function(e,o,t,n,r,l,a,s,d,c,i,u,p,f,b,k,h,m,y,E,C){function w(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function g(e){if(e&&e.__esModule)return e;var o=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),o.default=e,Object.freeze(o)}var P=g(n),R=g(r),x=w(l);const B=new k.default,F=e=>({root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}),T=P.forwardRef((function(e,n){const r=a.useTheme(),l=a.getThemeProps({name:"MuiModal",props:t._extends({},e),theme:r}),{BackdropComponent:s=m.default,BackdropProps:d,children:y,closeAfterTransition:E=!1,container:C,disableAutoFocus:w=!1,disableBackdropClick:g=!1,disableEnforceFocus:x=!1,disableEscapeKeyDown:T=!1,disablePortal:D=!1,disableRestoreFocus:M=!1,disableScrollLock:v=!1,hideBackdrop:O=!1,keepMounted:j=!1,manager:_=B,onBackdropClick:K,onClose:A,onEscapeKeyDown:S,onRendered:I,open:L}=l,z=o._objectWithoutPropertiesLoose(l,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),[U,N]=P.useState(!0),W=P.useRef({}),q=P.useRef(null),H=P.useRef(null),V=p(H,n),G=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(l),J=()=>c(q.current),Q=()=>(W.current.modalRef=H.current,W.current.mountNode=q.current,W.current),X=()=>{_.mount(Q(),{disableScrollLock:v}),H.current.scrollTop=0},Y=f((()=>{const e=function(e){return e="function"==typeof e?e():e,R.findDOMNode(e)}(C)||J().body;_.add(Q(),e),H.current&&X()})),Z=P.useCallback((()=>_.isTopModal(Q())),[_]),$=f((e=>{q.current=e,e&&(I&&I(),L&&Z()?X():k.ariaHidden(H.current,!0))})),ee=P.useCallback((()=>{_.remove(Q())}),[_]);if(P.useEffect((()=>()=>{ee()}),[ee]),P.useEffect((()=>{L?Y():G&&E||ee()}),[L,ee,G,E,Y]),!j&&!L&&(!G||U))return null;const oe=()=>{N(!1)},te=()=>{N(!0),E&&ee()},ne=F(r||{zIndex:b}),re={};return void 0===y.props.tabIndex&&(re.tabIndex=y.props.tabIndex||"-1"),G&&(re.onEnter=u(oe,y.props.onEnter),re.onExited=u(te,y.props.onExited)),P.createElement(i,{ref:$,container:C,disablePortal:D},P.createElement("div",t._extends({ref:V,onKeyDown:e=>{"Escape"===e.key&&Z()&&(S&&S(e),T||(e.stopPropagation(),A&&A(e,"escapeKeyDown")))},role:"presentation"},z,{style:t._extends({},ne.root,!L&&U?ne.hidden:{},z.style)}),O?null:P.createElement(s,t._extends({open:L,onClick:e=>{e.target===e.currentTarget&&(K&&K(e),!g&&A&&A(e,"backdropClick"))}},d)),P.createElement(h,{disableEnforceFocus:x,disableAutoFocus:w,disableRestoreFocus:M,getDoc:J,isEnabled:Z,open:L},P.cloneElement(y,re))))}));"production"!==process.env.NODE_ENV&&(T.propTypes={BackdropComponent:x.default.elementType,BackdropProps:x.default.object,children:s.elementAcceptingRef.isRequired,closeAfterTransition:x.default.bool,container:x.default.oneOfType([s.HTMLElementType,x.default.instanceOf(P.Component),x.default.func]),disableAutoFocus:x.default.bool,disableBackdropClick:d(x.default.bool,"Use the onClose prop with the `reason` argument to filter the `backdropClick` events."),disableEnforceFocus:x.default.bool,disableEscapeKeyDown:x.default.bool,disablePortal:x.default.bool,disableRestoreFocus:x.default.bool,disableScrollLock:x.default.bool,hideBackdrop:x.default.bool,keepMounted:x.default.bool,manager:x.default.object,onBackdropClick:d(x.default.func,"Use the onClose prop with the `reason` argument to handle the `backdropClick` events."),onClose:x.default.func,onEscapeKeyDown:d(x.default.func,"Use the onClose prop with the `reason` argument to handle the `escapeKeyDown` events."),onRendered:d(x.default.func,"Use the ref instead."),open:x.default.bool.isRequired}),e.default=T,e.styles=F,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=Modal.js.map
