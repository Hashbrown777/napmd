define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","react-dom","@material-ui/utils","./utils/debounce","clsx","./utils/ownerDocument","./utils/ownerWindow","./utils/createChainedFunction","./utils/deprecatedPropType","./styles/withStyles","./Modal","./Grow","./Paper","@material-ui/styles","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./styles/transitions","./styles/zIndex","./Portal","./utils/setRef","./utils/useForkRef","./utils/useEventCallback","./Modal/ModalManager","./utils/getScrollbarSize","./Unstable_TrapFocus","./Modal/SimpleBackdrop","react-transition-group","./styles/useTheme","./transitions/utils"],(function(e,t,n,o,r,i,a,l,s,c,u,f,p,d,h,m,g,E,v,y,b,T,O,P,x,w,M,C,N,R,z,j,_,k,D,U,I,H,S,q,A,L,V,W,B,$,F,Y,G,X){function J(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function K(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var Q=K(o),Z=J(r),ee=K(i),te=J(s);function ne(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function oe(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function re(e){return[e.horizontal,e.vertical].map((e=>"number"==typeof e?`${e}px`:e)).join(" ")}function ie(e){return"function"==typeof e?e():e}const ae={root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},le=Q.forwardRef((function(e,o){const{action:r,anchorEl:i,anchorOrigin:a={vertical:"top",horizontal:"left"},anchorPosition:s,anchorReference:p="anchorEl",children:d,classes:E,className:v,container:y,elevation:b=8,getContentAnchorEl:T,marginThreshold:O=16,onEnter:P,onEntered:x,onEntering:w,onExit:M,onExited:C,onExiting:N,open:R,PaperProps:z={},transformOrigin:j={vertical:"top",horizontal:"left"},TransitionComponent:_=m,transitionDuration:k="auto",TransitionProps:D={}}=e,U=n._objectWithoutPropertiesLoose(e,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),I=Q.useRef(),H=Q.useCallback((e=>{if("anchorPosition"===p)return"production"!==process.env.NODE_ENV&&(s||console.error('Material-UI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')),s;const t=ie(i),n=t&&1===t.nodeType?t:c(I.current).body,o=n.getBoundingClientRect();if("production"!==process.env.NODE_ENV){const e=n.getBoundingClientRect();"test"!==process.env.NODE_ENV&&0===e.top&&0===e.left&&0===e.right&&0===e.bottom&&console.warn(["Material-UI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join("\n"))}const r=0===e?a.vertical:"center";return{top:o.top+ne(o,r),left:o.left+oe(o,a.horizontal)}}),[i,a.horizontal,a.vertical,s,p]),S=Q.useCallback((e=>{let t=0;if(T&&"anchorEl"===p){const n=T(e);if(n&&e.contains(n)){const o=function(e,t){let n=t,o=0;for(;n&&n!==e;)n=n.parentElement,o+=n.scrollTop;return o}(e,n);t=n.offsetTop+n.clientHeight/2-o||0}"production"!==process.env.NODE_ENV&&"top"!==a.vertical&&console.error(["Material-UI: You can not change the default `anchorOrigin.vertical` value ","when also providing the `getContentAnchorEl` prop to the popover component.","Only use one of the two props.","Set `getContentAnchorEl` to `null | undefined` or leave `anchorOrigin.vertical` unchanged."].join("\n"))}return t}),[a.vertical,p,T]),q=Q.useCallback(((e,t=0)=>({vertical:ne(e,j.vertical)+t,horizontal:oe(e,j.horizontal)})),[j.horizontal,j.vertical]),A=Q.useCallback((e=>{const t=S(e),n={width:e.offsetWidth,height:e.offsetHeight},o=q(n,t);if("none"===p)return{top:null,left:null,transformOrigin:re(o)};const r=H(t);let a=r.top-o.vertical,l=r.left-o.horizontal;const s=a+n.height,c=l+n.width,f=u(ie(i)),d=f.innerHeight-O,h=f.innerWidth-O;if(a<O){const e=a-O;a-=e,o.vertical+=e}else if(s>d){const e=s-d;a-=e,o.vertical+=e}if("production"!==process.env.NODE_ENV&&n.height>d&&n.height&&d&&console.error(["Material-UI: The popover component is too tall.",`Some part of it can not be seen on the screen (${n.height-d}px).`,"Please consider adding a `max-height` to improve the user-experience."].join("\n")),l<O){const e=l-O;l-=e,o.horizontal+=e}else if(c>h){const e=c-h;l-=e,o.horizontal+=e}return{top:`${Math.round(a)}px`,left:`${Math.round(l)}px`,transformOrigin:re(o)}}),[i,p,H,S,q,O]),L=Q.useCallback((()=>{const e=I.current;if(!e)return;const t=A(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}),[A]),V=Q.useCallback((e=>{I.current=ee.findDOMNode(e)}),[]);Q.useEffect((()=>{R&&L()})),Q.useImperativeHandle(r,(()=>R?{updatePosition:()=>{L()}}:null),[R,L]),Q.useEffect((()=>{if(!R)return;const e=l((()=>{L()}));return window.addEventListener("resize",e),()=>{e.clear(),window.removeEventListener("resize",e)}}),[R,L]);let W=k;"auto"!==k||_.muiSupportAuto||(W=void 0);const B=y||(i?c(ie(i)).body:void 0);return Q.createElement(h.default,t._extends({container:B,open:R,ref:o,BackdropProps:{invisible:!0},className:te.default(E.root,v)},U),Q.createElement(_,t._extends({appear:!0,in:R,onEnter:P,onEntered:x,onExit:M,onExited:C,onExiting:N,timeout:W},D,{onEntering:f(((e,t)=>{w&&w(e,t),L()}),D.onEntering)}),Q.createElement(g.default,t._extends({elevation:b,ref:V},z,{className:te.default(E.paper,z.className)}),d)))}));"production"!==process.env.NODE_ENV&&(le.propTypes={action:a.refType,anchorEl:a.chainPropTypes(Z.default.oneOfType([a.HTMLElementType,Z.default.func]),(e=>{if(e.open&&(!e.anchorReference||"anchorEl"===e.anchorReference)){const t=ie(e.anchorEl);if(!t||1!==t.nodeType)return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.",`It should be an Element instance but it's \`${t}\` instead.`].join("\n"));{const e=t.getBoundingClientRect();if("test"!==process.env.NODE_ENV&&0===e.top&&0===e.left&&0===e.right&&0===e.bottom)return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join("\n"))}}return null})),anchorOrigin:Z.default.shape({horizontal:Z.default.oneOfType([Z.default.oneOf(["center","left","right"]),Z.default.number]).isRequired,vertical:Z.default.oneOfType([Z.default.oneOf(["bottom","center","top"]),Z.default.number]).isRequired}),anchorPosition:Z.default.shape({left:Z.default.number.isRequired,top:Z.default.number.isRequired}),anchorReference:Z.default.oneOf(["anchorEl","anchorPosition","none"]),children:Z.default.node,classes:Z.default.object,className:Z.default.string,container:Z.default.oneOfType([a.HTMLElementType,Z.default.instanceOf(Q.Component),Z.default.func]),elevation:Z.default.number,getContentAnchorEl:Z.default.func,marginThreshold:Z.default.number,onClose:Z.default.func,onEnter:p(Z.default.func,"Use the `TransitionProps` prop instead."),onEntered:p(Z.default.func,"Use the `TransitionProps` prop instead."),onEntering:p(Z.default.func,"Use the `TransitionProps` prop instead."),onExit:p(Z.default.func,"Use the `TransitionProps` prop instead."),onExited:p(Z.default.func,"Use the `TransitionProps` prop instead."),onExiting:p(Z.default.func,"Use the `TransitionProps` prop instead."),open:Z.default.bool.isRequired,PaperProps:Z.default.shape({component:a.elementTypeAcceptingRef}),transformOrigin:Z.default.shape({horizontal:Z.default.oneOfType([Z.default.oneOf(["center","left","right"]),Z.default.number]).isRequired,vertical:Z.default.oneOfType([Z.default.oneOf(["bottom","center","top"]),Z.default.number]).isRequired}),TransitionComponent:Z.default.elementType,transitionDuration:Z.default.oneOfType([Z.default.oneOf(["auto"]),Z.default.number,Z.default.shape({appear:Z.default.number,enter:Z.default.number,exit:Z.default.number})]),TransitionProps:Z.default.object});var se=d(ae,{name:"MuiPopover"})(le);e.default=se,e.getOffsetLeft=oe,e.getOffsetTop=ne,e.styles=ae,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=Popover.js.map