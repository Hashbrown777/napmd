define(["../../extends","../../objectWithoutPropertiesLoose","enzyme","./until"],(function(e,t,o,n){let r=!1;return function(i={}){r||(r=!0,console.warn(["Material-UI: the test utils are deprecated, they are no longer present in v5.","The helpers were designed to work with enzyme.","However, the tests of the core components were moved to react-testing-library."].join("\n")));const{shallow:s=o.shallow,dive:l=!1,untilSelector:c=!1}=i,d=t._objectWithoutPropertiesLoose(i,["shallow","dive","untilSelector"]);return function(t,o={}){const r=e._extends({},d,o,{context:e._extends({},d.context,o.context)}),i=s(t,r);return l?i.dive():c?n.call(i,c,r):i}}}));
//# sourceMappingURL=createShallow.js.map