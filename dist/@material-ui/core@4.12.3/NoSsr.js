define(["react","prop-types","@material-ui/utils"],(function(e,t,r){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var u=o(e),c=n(t);const f="undefined"!=typeof window&&"test"!==process.env.NODE_ENV?u.useLayoutEffect:u.useEffect;function a(e){const{children:t,defer:r=!1,fallback:n=null}=e,[o,c]=u.useState(!1);return f((()=>{r||c(!0)}),[r]),u.useEffect((()=>{r&&c(!0)}),[r]),u.createElement(u.Fragment,null,o?t:n)}return"production"!==process.env.NODE_ENV&&(a.propTypes={children:c.default.node,defer:c.default.bool,fallback:c.default.node}),"production"!==process.env.NODE_ENV&&(a.propTypes=r.exactProp(a.propTypes)),a}));
//# sourceMappingURL=NoSsr.js.map
