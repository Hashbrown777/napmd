define(["../../extends","../../objectWithoutPropertiesLoose"],(function(e,t){function n(o,r,i){let{context:s}=i,c=t._objectWithoutPropertiesLoose(i,["context"]);if(o.isEmptyRender()||"string"==typeof o.getElement().type)return o;let l=s;const d=o.root().instance();d&&d.getChildContext&&(l=e._extends({},s,d.getChildContext()));const h=o.shallow(e._extends({context:l},c));return r&&o.is(r)?h:n(h,r,{context:l})}let o=!1;return function(e,t={}){return o||(o=!0,console.warn(["Material-UI: the test utils are deprecated, they are no longer present in v5.","The helpers were designed to work with enzyme.","However, the tests of the core components were moved to react-testing-library."].join("\n"))),this.single("until",(()=>n(this,e,t)))}}));
//# sourceMappingURL=until.js.map
