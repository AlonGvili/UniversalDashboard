(window.webpackJsonpmaterialui=window.webpackJsonpmaterialui||[]).push([[13],{566:function(e,a,t){"use strict";t.r(a);var n=t(33),r=t(13),i=t(0),o=t.n(i),c=t(70),l=t(584),s=t(567),d=t(35),u=Object(d.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex",height:224},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),b=function(e){return o.a.createElement("div",{style:{display:e.display}},UniversalDashboard.renderComponent(e.content))};a.default=function(e){var a=u(),t=e.tabs,i=o.a.useState(0),d=Object(r.a)(i,2),p=d[0],m=d[1],v=o.a.useState({}),f=Object(r.a)(v,2),y=f[0],k=f[1];if(e.renderOnClick&&y.value!==p){var O=e.tabs[p];O.dynamic?UniversalDashboard.get("/api/internal/component/element/".concat(O.id),(function(e){k(Object(n.a)({},O,{content:e,value:p}))})):k(Object(n.a)({},O,{value:p}))}var g="vertical"===e.orientation?a.root:"",h="vertical"===e.orientation?a.tabs:"";return o.a.createElement("div",{id:e.id,key:e.id,className:g},o.a.createElement(c.a,{square:!0},o.a.createElement(l.a,{value:p,indicatorColor:"primary",textColor:"primary",onChange:function(e,a){m(a)},orientation:e.orientation,className:h},t.map((function(e){return o.a.createElement(s.a,{label:e.label,id:e.id})})))),e.renderOnClick?o.a.createElement(b,Object.assign({key:p},y,{display:"block"})):t.map((function(e,a){var t=p==a?"block":"none";return o.a.createElement(b,Object.assign({},e,{display:t}))})))}}}]);
//# sourceMappingURL=Tabs.eadb7186c2ceb7e221f6.bundle.map