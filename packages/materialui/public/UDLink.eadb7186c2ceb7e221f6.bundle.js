(window.webpackJsonpmaterialui=window.webpackJsonpmaterialui||[]).push([[26],{266:function(e,n,r){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var t=typeof o;if("string"===t||"number"===t)e.push(o);else if(Array.isArray(o)&&o.length){var i=a.apply(null,o);i&&e.push(i)}else if("object"===t)for(var s in o)r.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(n,[]))||(e.exports=o)}()},434:function(e,n,r){"use strict";var o=r(1),a=r(2),t=r(0),i=r.n(t),s=(r(7),r(3)),l=r(9),u=r(6),c=r(132),p=r(10),d=r(36),f=i.a.forwardRef((function(e,n){var r=e.classes,t=e.className,u=e.color,f=void 0===u?"primary":u,b=e.component,v=void 0===b?"a":b,m=e.onBlur,h=e.onFocus,y=e.TypographyClasses,g=e.underline,w=void 0===g?"hover":g,j=e.variant,O=void 0===j?"inherit":j,k=Object(a.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),x=Object(c.a)(),N=x.isFocusVisible,C=x.onBlurVisible,D=x.ref,V=i.a.useState(!1),A=V[0],B=V[1],F=Object(p.a)(n,D);return i.a.createElement(d.a,Object(o.a)({className:Object(s.a)(r.root,r["underline".concat(Object(l.a)(w))],t,A&&r.focusVisible,"button"===v&&r.button),classes:y,color:f,component:v,onBlur:function(e){A&&(C(),B(!1)),m&&m(e)},onFocus:function(e){N(e)&&B(!0),h&&h(e)},ref:F,variant:O},k))}));n.a=Object(u.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(f)},560:function(e,n,r){"use strict";r.r(n);var o=r(33),a=r(0),t=r.n(a),i=r(35),s=r(434),l=r(266),u=r.n(l),c=Object(i.a)((function(e){e.spacing.unit}));n.default=function(e){var n=c(),r=e.id,a=e.url,i=e.underline,l=e.style,p=e.variant,d=e.className,f=e.openInNewWindow,b=e.content,v=e.text;return t.a.createElement(s.a,{id:r,href:a,rel:"noopener",underline:i,style:Object(o.a)({},l),variant:p,className:u()(d,n.link,"ud-mu-link"),target:f?"_blank":"_self"},v||UniversalDashboard.renderComponent(b))}}}]);
//# sourceMappingURL=UDLink.eadb7186c2ceb7e221f6.bundle.map