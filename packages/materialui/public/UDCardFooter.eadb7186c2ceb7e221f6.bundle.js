(window.webpackJsonpmaterialui=window.webpackJsonpmaterialui||[]).push([[19],{266:function(e,t,a){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},279:function(e,t,a){"use strict";var n=a(118);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(174)).default)(r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=o},288:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),c=(a(7),a(6)),i={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},l=function(e){return Object(n.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(c.a)((function(e){return{"@global":{html:i,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(n.a)({margin:0},l(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,a=void 0===t?null:t;return e.classes,o.a.createElement(o.a.Fragment,null,a)}))},295:function(e,t,a){"use strict";var n=a(118);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(174)).default)(r.default.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=o},395:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a(17),o=a(12),c=a(21),i=a(22),l=a(45),s=a(23),u=a(11),d=a(0),p=a.n(d),f=a(288),b=a(396),m=a(159),g=a(6),h=a(295),v=a.n(h),y=a(279),j=a.n(y),O=a(266),E=a.n(O),x=a(179),k=function(e){function t(){var e,a,n,o,s;for(Object(r.a)(this,t),a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return s=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n))),Object(u.a)(Object(l.a)(s),"state",{content:s.props.content}),Object(u.a)(Object(l.a)(s),"onLoadData",(function(){s.props.isEndpoint?UniversalDashboard.get("/api/internal/component/element/".concat(s.props.id),(function(e){e.error?s.setState({hasError:!0,error:e.error,content:e}):s.setState({content:e})})):s.setState({content:s.props.content})})),Object(u.a)(Object(l.a)(s),"componentWillMount",(function(){s.onLoadData()})),s}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.classes,r=e.id,o=e.style,c=e.onExpand,i=e.isExpanded,l=e.isExpandExists,s=e.isEndpoint,u=e.refreshInterval,g=e.autoRefresh,h=this.state.content;return p.a.createElement(d.Fragment,null,p.a.createElement(f.a,null),p.a.createElement("div",{id:r,className:E()(a.content,t,"ud-mu-cardfooter"),style:Object(n.a)({},o)},p.a.createElement(b.a,{className:a.actions},UniversalDashboard.renderComponent(h)),p.a.createElement(b.a,{className:a.expand},l?p.a.createElement(m.a,{id:"ud-card-expand-button",onClick:c},i?p.a.createElement(v.a,{color:"primary"}):p.a.createElement(j.a,{color:"primary"})):null)),s?p.a.createElement(x.ReactInterval,{timeout:1e3*u,enabled:g,callback:this.onLoadData}):null)}}]),t}(p.a.Component);t.default=Object(g.a)((function(e){return{content:{display:"flex"},expand:{flex:"0 1 auto",marginRight:e.spacing.unit},actions:{flexGrow:1}}}))(k)},396:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),c=a.n(o),i=(a(7),a(3)),l=a(6),s=c.a.forwardRef((function(e,t){var a=e.disableSpacing,o=void 0!==a&&a,l=e.classes,s=e.className,u=Object(r.a)(e,["disableSpacing","classes","className"]);return c.a.createElement("div",Object(n.a)({className:Object(i.a)(l.root,s,!o&&l.spacing),ref:t},u))}));t.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)}}]);
//# sourceMappingURL=UDCardFooter.eadb7186c2ceb7e221f6.bundle.map