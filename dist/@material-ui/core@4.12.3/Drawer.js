define(["exports","../extends","../objectWithoutPropertiesLoose","react","prop-types","clsx","./Modal","./Backdrop","./styles/withStyles","./Slide","./Paper","./utils/capitalize","./styles/transitions","./styles/useTheme","react-dom","@material-ui/styles","@material-ui/utils","./utils/deprecatedPropType","./utils/ownerDocument","./Portal","./utils/setRef","./utils/useForkRef","./utils/createChainedFunction","./utils/useEventCallback","./styles/zIndex","./Modal/ModalManager","./utils/getScrollbarSize","./utils/ownerWindow","./Unstable_TrapFocus","./Modal/SimpleBackdrop","./Fade","react-transition-group","./transitions/utils","./styles/defaultTheme","./styles/createTheme","./styles/createBreakpoints","./styles/createMixins","./styles/createPalette","./colors/common","./colors/grey","./colors/indigo","./colors/pink","./colors/red","./colors/orange","./colors/blue","./colors/green","./styles/colorManipulator","./styles/createTypography","./styles/shadows","./styles/shape","./styles/createSpacing","@material-ui/system","./utils/debounce"],(function(e,t,o,r,a,n,s,l,i,c,d,p,u,f,m,h,b,y,g,P,x,k,v,j,D,M,_,B,O,T,w,S,A,E,N,C,z,R,L,$,W,F,H,I,q,U,V,Y,G,J,K,Q,X){function Z(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function ee(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var te=ee(r),oe=Z(a),re=Z(n);const ae=e=>({root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:`1px solid ${e.palette.divider}`},paperAnchorDockedTop:{borderBottom:`1px solid ${e.palette.divider}`},paperAnchorDockedRight:{borderLeft:`1px solid ${e.palette.divider}`},paperAnchorDockedBottom:{borderTop:`1px solid ${e.palette.divider}`},modal:{}}),ne={left:"right",right:"left",top:"down",bottom:"up"};function se(e){return-1!==["left","right"].indexOf(e)}function le(e,t){return"rtl"===e.direction&&se(t)?ne[t]:t}const ie={enter:u.duration.enteringScreen,exit:u.duration.leavingScreen},ce=te.forwardRef((function(e,r){const{anchor:a="left",BackdropProps:n,children:i,classes:u,className:m,elevation:h=16,ModalProps:{BackdropProps:b}={},onClose:y,open:g=!1,PaperProps:P={},SlideProps:x,TransitionComponent:k=c.default,transitionDuration:v=ie,variant:j="temporary"}=e,D=o._objectWithoutPropertiesLoose(e.ModalProps,["BackdropProps"]),M=o._objectWithoutPropertiesLoose(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),_=f(),B=te.useRef(!1);te.useEffect((()=>{B.current=!0}),[]);const O=le(_,a),T=te.createElement(d.default,t._extends({elevation:"temporary"===j?h:0,square:!0},P,{className:re.default(u.paper,u[`paperAnchor${p(O)}`],P.className,"temporary"!==j&&u[`paperAnchorDocked${p(O)}`])}),i);if("permanent"===j)return te.createElement("div",t._extends({className:re.default(u.root,u.docked,m),ref:r},M),T);const w=te.createElement(k,t._extends({in:g,direction:ne[O],timeout:v,appear:B.current},x),T);return"persistent"===j?te.createElement("div",t._extends({className:re.default(u.root,u.docked,m),ref:r},M),w):te.createElement(s.default,t._extends({BackdropProps:t._extends({},n,b,{transitionDuration:v}),BackdropComponent:l.default,className:re.default(u.root,u.modal,m),open:g,onClose:y,ref:r},M,D),w)}));"production"!==process.env.NODE_ENV&&(ce.propTypes={anchor:oe.default.oneOf(["bottom","left","right","top"]),BackdropProps:oe.default.object,children:oe.default.node,classes:oe.default.object,className:oe.default.string,elevation:oe.default.number,ModalProps:oe.default.object,onClose:oe.default.func,open:oe.default.bool,PaperProps:oe.default.object,SlideProps:oe.default.object,transitionDuration:oe.default.oneOfType([oe.default.number,oe.default.shape({appear:oe.default.number,enter:oe.default.number,exit:oe.default.number})]),variant:oe.default.oneOf(["permanent","persistent","temporary"])});var de=i(ae,{name:"MuiDrawer",flip:!1})(ce);e.default=de,e.getAnchor=le,e.isHorizontal=se,e.styles=ae,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=Drawer.js.map
