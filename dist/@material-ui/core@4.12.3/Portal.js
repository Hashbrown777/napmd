define(["react","react-dom","prop-types","@material-ui/utils","./utils/deprecatedPropType","./utils/setRef","./utils/useForkRef"],(function(e,t,n,r,o,u,f){function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var d=c(e),i=c(t),a=l(n);const s="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,p=d.forwardRef((function(e,t){const{children:n,container:r,disablePortal:o=!1,onRendered:l}=e,[c,a]=d.useState(null),p=f(d.isValidElement(n)?n.ref:null,t);return s((()=>{o||a(function(e){return e="function"==typeof e?e():e,i.findDOMNode(e)}(r)||document.body)}),[r,o]),s((()=>{if(c&&!o)return u(t,c),()=>{u(t,null)}}),[t,c,o]),s((()=>{l&&(c||o)&&l()}),[l,c,o]),o?d.isValidElement(n)?d.cloneElement(n,{ref:p}):n:c?i.createPortal(n,c):c}));return"production"!==process.env.NODE_ENV&&(p.propTypes={children:a.default.node,container:a.default.oneOfType([r.HTMLElementType,a.default.instanceOf(d.Component),a.default.func]),disablePortal:a.default.bool,onRendered:o(a.default.func,"Use the ref instead.")}),"production"!==process.env.NODE_ENV&&(p.propTypes=r.exactProp(p.propTypes)),p}));
//# sourceMappingURL=Portal.js.map