(window.webpackJsonpmaterialui=window.webpackJsonpmaterialui||[]).push([[15],{266:function(t,e,n){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&t.push(s)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&t.push(i)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},305:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var a=n(33),r=n(17),o=n(12),s=n(21),i=n(22),p=n(45),c=n(23),l=n(11),u=n(0),d=n.n(u),f=n(36),h=n(179),v=n(266),b=n.n(v),m=function(t){function e(){var t,n,a,o,c;for(Object(r.a)(this,e),n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return c=Object(s.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(a))),Object(l.a)(Object(p.a)(c),"state",{text:"",errorMessage:"",hasError:!1}),Object(l.a)(Object(p.a)(c),"onLoadData",(function(){c.props.isEndpoint||null!==c.props.content||c.setState({text:c.props.text}),c.props.isEndpoint||null===c.props.content||c.setState({text:c.props.content}),c.props.isEndpoint&&null!==c.props.content&&UniversalDashboard.get("/api/internal/component/element/".concat(c.props.id),(function(t){t.error?c.setState({hasError:!0,error:t.error,errorMessage:t.error.message}):c.setState({text:t})}))})),Object(l.a)(Object(p.a)(c),"onIncomingEvent",(function(t,e){"syncElement"===e.type&&c.onLoadData()})),c}return Object(c.a)(e,t),Object(o.a)(e,[{key:"componentWillMount",value:function(){this.onLoadData()}},{key:"componentDidUpdate",value:function(t){t.id!==this.props.id&&this.onLoadData()}},{key:"render",value:function(){var t=this.props,e=t.id,n=t.classes,r=t.style,o=t.align,s=t.gutterBottom,i=t.noWrap,p=t.isParagraph,c=t.variant,l=t.refreshInterval,u=(t.isEndpoint,t.autoRefresh),v=this.state.text;return d.a.createElement(f.a,{id:e,className:b()(n,"ud-mu-typography"),style:null===r?{}:Object(a.a)({},r),align:o,gutterBottom:s,noWrap:i,paragraph:p,variant:c},v,d.a.createElement(h.ReactInterval,{timeout:1e3*l,enabled:u,callback:this.onLoadData}))}}]),e}(d.a.Component)}}]);
//# sourceMappingURL=Typography.eadb7186c2ceb7e221f6.bundle.map