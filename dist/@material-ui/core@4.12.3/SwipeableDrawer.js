define(["exports","../objectWithoutPropertiesLoose","../extends","react","prop-types","react-dom","@material-ui/utils","@material-ui/styles","./Drawer","./utils/ownerDocument","./utils/useEventCallback","./styles/transitions","./styles/useTheme","./transitions/utils","./NoSsr","./SwipeableDrawer/SwipeArea","clsx","./Modal","./utils/deprecatedPropType","./Portal","./utils/setRef","./utils/useForkRef","./utils/createChainedFunction","./styles/zIndex","./Modal/ModalManager","./utils/getScrollbarSize","./utils/ownerWindow","./Unstable_TrapFocus","./Modal/SimpleBackdrop","./Backdrop","./styles/withStyles","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./Fade","react-transition-group","./Slide","./utils/debounce","./Paper","./utils/capitalize"],(function(e,t,r,n,o,i,a,s,l,c,u,d,p,f,h,m,y,g,b,v,w,P,T,S,x,M,k,E,O,H,D,_,A,R,W,B,j,L,X,Y,C,z,F,V,N,q,$,I,U,G,J,K,Q,Z,ee,te){function re(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function ne(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var oe=ne(n),ie=re(o),ae=ne(i);let se=null;function le(e,t){return"right"===e?document.body.offsetWidth-t[0].pageX:t[0].pageX}function ce(e,t){return"bottom"===e?window.innerHeight-t[0].clientY:t[0].clientY}function ue(e,t){return e?t.clientWidth:t.clientHeight}function de(e,t,r,n){return Math.min(Math.max(r?t-e:n+t-e,0),n)}const pe="undefined"!=typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent),fe={enter:d.duration.enteringScreen,exit:d.duration.leavingScreen},he="undefined"!=typeof window?oe.useLayoutEffect:oe.useEffect,me=oe.forwardRef((function(e,n){const o=p(),i=s.getThemeProps({name:"MuiSwipeableDrawer",props:r._extends({},e),theme:o}),{anchor:a="left",disableBackdropTransition:d=!1,disableDiscovery:y=!1,disableSwipeToOpen:g=pe,hideBackdrop:b,hysteresis:v=.52,minFlingVelocity:w=450,ModalProps:{BackdropProps:P}={},onClose:T,onOpen:S,open:x,PaperProps:M={},SwipeAreaProps:k,swipeAreaWidth:E=20,transitionDuration:O=fe,variant:H="temporary"}=i,D=t._objectWithoutPropertiesLoose(i.ModalProps,["BackdropProps"]),_=t._objectWithoutPropertiesLoose(i,["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"]),[A,R]=oe.useState(!1),W=oe.useRef({isSwiping:null}),B=oe.useRef(),j=oe.useRef(),L=oe.useRef(),X=oe.useRef(!1),Y=oe.useRef();he((()=>{Y.current=null}),[x]);const C=oe.useCallback(((e,t={})=>{const{mode:r=null,changeTransition:n=!0}=t,i=l.getAnchor(o,a),s=-1!==["right","bottom"].indexOf(i)?1:-1,c=l.isHorizontal(a),u=c?`translate(${s*e}px, 0)`:`translate(0, ${s*e}px)`,p=L.current.style;p.webkitTransform=u,p.transform=u;let h="";if(r&&(h=o.transitions.create("all",f.getTransitionProps({timeout:O},{mode:r}))),n&&(p.webkitTransition=h,p.transition=h),!d&&!b){const t=j.current.style;t.opacity=1-e/ue(c,L.current),n&&(t.webkitTransition=h,t.transition=h)}}),[a,d,b,o,O]),z=u((e=>{if(!X.current)return;if(se=null,X.current=!1,R(!1),!W.current.isSwiping)return void(W.current.isSwiping=null);W.current.isSwiping=null;const t=l.getAnchor(o,a),r=l.isHorizontal(a);let n;n=r?le(t,e.changedTouches):ce(t,e.changedTouches);const i=r?W.current.startX:W.current.startY,s=ue(r,L.current),c=de(n,i,x,s),u=c/s;Math.abs(W.current.velocity)>w&&(Y.current=1e3*Math.abs((s-c)/W.current.velocity)),x?W.current.velocity>w||u>v?T():C(0,{mode:"exit"}):W.current.velocity<-w||1-u>v?S():C(ue(r,L.current),{mode:"enter"})})),F=u((e=>{if(!L.current||!X.current)return;if(null!=se&&se!==W.current)return;const t=l.getAnchor(o,a),r=l.isHorizontal(a),n=le(t,e.touches),i=ce(t,e.touches);if(x&&L.current.contains(e.target)&&null==se){const t=function({domTreeShapes:e,start:t,current:r,anchor:n}){const o={x:"scrollLeft",y:"scrollTop"},i={x:"scrollWidth",y:"scrollHeight"},a={x:"clientWidth",y:"clientHeight"};return e.some((e=>{let s=r>=t;"top"!==n&&"left"!==n||(s=!s);const l="left"===n||"right"===n?"x":"y",c=e[o[l]],u=c>0,d=c+e[a[l]]<e[i[l]];return s&&d||!s&&u?e:null}))}({domTreeShapes:function(e,t){let r=[];for(;e&&e!==t;){const t=window.getComputedStyle(e);"absolute"===t.getPropertyValue("position")||"hidden"===t.getPropertyValue("overflow-x")?r=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&r.push(e),e=e.parentElement}return r}(e.target,L.current),start:r?W.current.startX:W.current.startY,current:r?n:i,anchor:a});if(t)return void(se=t);se=W.current}if(null==W.current.isSwiping){const t=Math.abs(n-W.current.startX),o=Math.abs(i-W.current.startY);t>o&&e.cancelable&&e.preventDefault();const a=r?t>o&&t>3:o>t&&o>3;if(!0===a||(r?o>3:t>3)){if(W.current.isSwiping=a,!a)return void z(e);W.current.startX=n,W.current.startY=i,y||x||(r?W.current.startX-=E:W.current.startY-=E)}}if(!W.current.isSwiping)return;const s=ue(r,L.current);let c=r?W.current.startX:W.current.startY;x&&!W.current.paperHit&&(c=Math.min(c,s));const u=de(r?n:i,c,x,s);if(x)if(W.current.paperHit)0===u&&(W.current.startX=n,W.current.startY=i);else{if(!(r?n<s:i<s))return;W.current.paperHit=!0,W.current.startX=n,W.current.startY=i}null===W.current.lastTranslate&&(W.current.lastTranslate=u,W.current.lastTime=performance.now()+1);const d=(u-W.current.lastTranslate)/(performance.now()-W.current.lastTime)*1e3;W.current.velocity=.4*W.current.velocity+.6*d,W.current.lastTranslate=u,W.current.lastTime=performance.now(),e.cancelable&&e.preventDefault(),C(u)})),V=u((e=>{if(e.defaultPrevented)return;if(e.muiHandled)return;if(x&&!j.current.contains(e.target)&&!L.current.contains(e.target))return;const t=l.getAnchor(o,a),r=l.isHorizontal(a),n=le(t,e.touches),i=ce(t,e.touches);if(!x){if(g||e.target!==B.current)return;if(r){if(n>E)return}else if(i>E)return}e.muiHandled=!0,se=null,W.current.startX=n,W.current.startY=i,R(!0),!x&&L.current&&C(ue(r,L.current)+(y?20:-E),{changeTransition:!1}),W.current.velocity=0,W.current.lastTime=null,W.current.lastTranslate=null,W.current.paperHit=!1,X.current=!0}));oe.useEffect((()=>{if("temporary"===H){const e=c(L.current);return e.addEventListener("touchstart",V),e.addEventListener("touchmove",F,{passive:!1}),e.addEventListener("touchend",z),()=>{e.removeEventListener("touchstart",V),e.removeEventListener("touchmove",F,{passive:!1}),e.removeEventListener("touchend",z)}}}),[H,V,F,z]),oe.useEffect((()=>()=>{se===W.current&&(se=null)}),[]),oe.useEffect((()=>{x||R(!1)}),[x]);const N=oe.useCallback((e=>{j.current=ae.findDOMNode(e)}),[]);return oe.createElement(oe.Fragment,null,oe.createElement(l.default,r._extends({open:!("temporary"!==H||!A)||x,variant:H,ModalProps:r._extends({BackdropProps:r._extends({},P,{ref:N})},D),PaperProps:r._extends({},M,{style:r._extends({pointerEvents:"temporary"!==H||x?"":"none"},M.style),ref:L}),anchor:a,transitionDuration:Y.current||O,onClose:T,ref:n},_)),!g&&"temporary"===H&&oe.createElement(h,null,oe.createElement(m.default,r._extends({anchor:a,ref:B,width:E},k))))}));"production"!==process.env.NODE_ENV&&(me.propTypes={anchor:ie.default.oneOf(["left","top","right","bottom"]),children:ie.default.node,disableBackdropTransition:ie.default.bool,disableDiscovery:ie.default.bool,disableSwipeToOpen:ie.default.bool,hideBackdrop:ie.default.bool,hysteresis:ie.default.number,minFlingVelocity:ie.default.number,ModalProps:ie.default.shape({BackdropProps:ie.default.shape({component:a.elementTypeAcceptingRef})}),onClose:ie.default.func.isRequired,onOpen:ie.default.func.isRequired,open:ie.default.bool.isRequired,PaperProps:ie.default.shape({component:a.elementTypeAcceptingRef,style:ie.default.object}),SwipeAreaProps:ie.default.object,swipeAreaWidth:ie.default.number,transitionDuration:ie.default.oneOfType([ie.default.number,ie.default.shape({enter:ie.default.number,exit:ie.default.number})]),variant:ie.default.oneOf(["permanent","persistent","temporary"])}),e.default=me,e.reset=function(){se=null},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=SwipeableDrawer.js.map
