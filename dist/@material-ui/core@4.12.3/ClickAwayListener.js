define(["react","react-dom","prop-types","./utils/ownerDocument","./utils/useForkRef","./utils/useEventCallback","@material-ui/utils","./utils/setRef"],(function(e,t,n,r,u,c,o,i){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var l=f(e),a=f(t),d=s(n);function p(e){return e.substring(2).toLowerCase()}function m(e){const{children:t,disableReactTree:n=!1,mouseEvent:o="onClick",onClickAway:i,touchEvent:s="onTouchEnd"}=e,f=l.useRef(!1),d=l.useRef(null),m=l.useRef(!1),E=l.useRef(!1);l.useEffect((()=>(setTimeout((()=>{m.current=!0}),0),()=>{m.current=!1})),[]);const v=l.useCallback((e=>{d.current=a.findDOMNode(e)}),[]),h=u(t.ref,v),b=c((e=>{const t=E.current;if(E.current=!1,!m.current||!d.current||function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))return;if(f.current)return void(f.current=!1);let u;if(e.composedPath)u=e.composedPath().indexOf(d.current)>-1;else{u=!r(d.current).documentElement.contains(e.target)||d.current.contains(e.target)}u||!n&&t||i(e)})),O=e=>n=>{E.current=!0;const r=t.props[e];r&&r(n)},R={ref:h};return!1!==s&&(R[s]=O(s)),l.useEffect((()=>{if(!1!==s){const e=p(s),t=r(d.current),n=()=>{f.current=!0};return t.addEventListener(e,b),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,b),t.removeEventListener("touchmove",n)}}}),[b,s]),!1!==o&&(R[o]=O(o)),l.useEffect((()=>{if(!1!==o){const e=p(o),t=r(d.current);return t.addEventListener(e,b),()=>{t.removeEventListener(e,b)}}}),[b,o]),l.createElement(l.Fragment,null,l.cloneElement(t,R))}return"production"!==process.env.NODE_ENV&&(m.propTypes={children:o.elementAcceptingRef.isRequired,disableReactTree:d.default.bool,mouseEvent:d.default.oneOf(["onClick","onMouseDown","onMouseUp",!1]),onClickAway:d.default.func.isRequired,touchEvent:d.default.oneOf(["onTouchEnd","onTouchStart",!1])}),"production"!==process.env.NODE_ENV&&(m.propTypes=o.exactProp(m.propTypes)),m}));
//# sourceMappingURL=ClickAwayListener.js.map