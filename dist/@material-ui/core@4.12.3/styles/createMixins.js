define(["../../extends"],(function(e){return function(n,t,i){return e._extends({gutters:(i={})=>(console.warn(["Material-UI: theme.mixins.gutters() is deprecated.","You can use the source of the mixin directly:","\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n")),e._extends({paddingLeft:t(2),paddingRight:t(2)},i,{[n.up("sm")]:e._extends({paddingLeft:t(3),paddingRight:t(3)},i[n.up("sm")])})),toolbar:{minHeight:56,[`${n.up("xs")} and (orientation: landscape)`]:{minHeight:48},[n.up("sm")]:{minHeight:64}}},i)}}));
//# sourceMappingURL=createMixins.js.map
