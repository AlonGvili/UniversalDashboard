(window.webpackJsonpmaterialui=window.webpackJsonpmaterialui||[]).push([[28],{286:function(e,t,a){"use strict";var o=a(1),c=a(13),n=a(2),r=a(0),i=a.n(r),d=(a(7),a(3)),l=a(127),s=a(39),h=a(6),u=a(159),p=i.a.forwardRef((function(e,t){var a=e.autoFocus,r=e.checked,h=e.checkedIcon,p=e.classes,b=e.className,m=e.defaultChecked,g=e.disabled,k=e.icon,y=e.id,f=e.inputProps,v=e.inputRef,w=e.name,C=e.onBlur,O=e.onChange,$=e.onFocus,j=e.readOnly,x=e.required,B=e.tabIndex,I=e.type,S=e.value,E=Object(n.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),F=Object(l.a)({controlled:r,default:Boolean(m),name:"SwitchBase"}),z=Object(c.a)(F,2),N=z[0],R=z[1],P=Object(s.a)(),q=g;P&&void 0===q&&(q=P.disabled);var J="checkbox"===I||"radio"===I;return i.a.createElement(u.a,Object(o.a)({component:"span",className:Object(d.a)(p.root,b,N&&p.checked,q&&p.disabled),disabled:q,tabIndex:null,role:void 0,onFocus:function(e){$&&$(e),P&&P.onFocus&&P.onFocus(e)},onBlur:function(e){C&&C(e),P&&P.onBlur&&P.onBlur(e)},ref:t},E),i.a.createElement("input",Object(o.a)({autoFocus:a,checked:r,defaultChecked:m,className:p.input,disabled:q,id:J&&y,name:w,onChange:function(e){var t=e.target.checked;R(t),O&&O(e,t)},readOnly:j,ref:v,required:x,tabIndex:B,type:I,value:S},f)),N?h:k)}));t.a=Object(h.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(p)},523:function(e,t,a){"use strict";var o=a(1),c=a(2),n=a(0),r=a.n(n),i=(a(7),a(3)),d=a(6),l=a(18),s=a(9),h=a(286),u=r.a.forwardRef((function(e,t){var a=e.classes,n=e.className,d=e.color,l=void 0===d?"secondary":d,u=e.edge,p=void 0!==u&&u,b=e.size,m=void 0===b?"medium":b,g=Object(c.a)(e,["classes","className","color","edge","size"]),k=r.a.createElement("span",{className:a.thumb});return r.a.createElement("span",{className:Object(i.a)(a.root,n,{start:a.edgeStart,end:a.edgeEnd}[p],"small"===m&&a["size".concat(Object(s.a)(m))])},r.a.createElement(h.a,Object(o.a)({type:"checkbox",icon:k,checkedIcon:k,classes:{root:Object(i.a)(a.switchBase,a["color".concat(Object(s.a)(l))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},g)),r.a.createElement("span",{className:a.track}))}));t.a=Object(d.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},578:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a.n(o),n=a(523),r=a(75),i=a(130);t.default=Object(r.a)((function(e){return c.a.createElement(i.FormContext.Consumer,null,(function(t){var a=t.onFieldChange;return c.a.createElement(n.a,{key:e.key,id:e.id,checked:e.checked,onChange:function(t){return function(t,a){a({id:e.id,value:t.target.checked}),e.setState({checked:t.target.checked}),e.onChange&&e.onChange(t.target.checked)}(t,a)},disabled:e.disabled})}))}))}}]);
//# sourceMappingURL=UDSwitch.eadb7186c2ceb7e221f6.bundle.map