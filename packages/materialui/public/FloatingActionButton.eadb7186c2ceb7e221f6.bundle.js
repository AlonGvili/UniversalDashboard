(window.webpackJsonpmaterialui=window.webpackJsonpmaterialui||[]).push([[4,6],{266:function(e,a,t){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var n=r.apply(null,o);n&&e.push(n)}else if("object"===i)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(a,[]))||(e.exports=o)}()},276:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var o=t(33),r=t(17),i=t(12),n=t(21),s=t(22),d=t(23),c=t(0),l=t.n(c),u=t(266),p=t.n(u),b=function(e){function a(){return Object(r.a)(this,a),Object(n.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return UniversalDashboard.renderComponent(Object(o.a)({className:p()(this.props.className,"ud-mu-icon"),style:Object(o.a)({},this.props.style)},this.props,{type:"icon"}))}}]),a}(l.a.Component)},439:function(e,a,t){"use strict";var o=t(2),r=t(1),i=t(0),n=t.n(i),s=(t(7),t(3)),d=t(6),c=t(117),l=t(9),u=n.a.forwardRef((function(e,a){var t=e.children,i=e.classes,d=e.className,u=e.color,p=void 0===u?"default":u,b=e.component,h=void 0===b?"button":b,m=e.disabled,g=void 0!==m&&m,f=e.disableFocusRipple,v=void 0!==f&&f,y=e.focusVisibleClassName,w=e.size,k=void 0===w?"large":w,C=e.variant,x=void 0===C?"round":C,j=Object(o.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return n.a.createElement(c.a,Object(r.a)({className:Object(s.a)(i.root,d,"round"!==x&&i.extended,"large"!==k&&i["size".concat(Object(l.a)(k))],g&&i.disabled,{primary:i.primary,secondary:i.secondary,inherit:i.colorInherit}[p]),component:h,disabled:g,focusRipple:!v,focusVisibleClassName:Object(s.a)(i.focusVisible,y),ref:a},j),n.a.createElement("span",{className:i.label},t))}));a.a=Object(d.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(u)},565:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var o=t(0),r=t.n(o),i=t(35),n=t(439),s=t(276);function d(e){var a=Object(i.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}))(),t=null;return e.icon&&(t=r.a.createElement(s.default,{icon:e.icon})),r.a.createElement("div",{className:a.root},r.a.createElement(n.a,{color:"primary",onClick:function(){return function(e){e.onClick&&UniversalDashboard.publish("element-event",{type:"clientEvent",eventId:e.onClick,eventName:"onChange",eventData:""})}(e)},size:e.size,id:e.id},t))}}}]);
//# sourceMappingURL=FloatingActionButton.eadb7186c2ceb7e221f6.bundle.map