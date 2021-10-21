define(["react","react-dom","prop-types","@material-ui/utils","./utils/setRef"],(function(e,t,o,r,n){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var p=s(e),c=s(t),f=i(o);let d=!1;class u extends p.Component{componentDidMount(){this.ref=c.findDOMNode(this),n(this.props.rootRef,this.ref)}componentDidUpdate(e){const t=c.findDOMNode(this);e.rootRef===this.props.rootRef&&this.ref===t||(e.rootRef!==this.props.rootRef&&n(e.rootRef,null),this.ref=t,n(this.props.rootRef,this.ref))}componentWillUnmount(){this.ref=null,n(this.props.rootRef,null)}render(){return"production"!==process.env.NODE_ENV&&(d||(d=!0,console.warn(["Material-UI: The RootRef component is deprecated.","The component relies on the ReactDOM.findDOMNode API which is deprecated in React.StrictMode.","Instead, you can get a reference to the underlying DOM node of the components via the `ref` prop."].join("/n")))),this.props.children}}return"production"!==process.env.NODE_ENV&&(u.propTypes={children:f.default.element.isRequired,rootRef:r.refType.isRequired}),"production"!==process.env.NODE_ENV&&"production"!==process.env.NODE_ENV&&(u.propTypes=r.exactProp(u.propTypes)),u}));
//# sourceMappingURL=RootRef.js.map