(this.webpackJsonpepisoder=this.webpackJsonpepisoder||[]).push([[0],{24:function(e,t,n){"use strict";n.r(t);var i,c,r=n(0),s=n.n(r),o=n(13),a=n.n(o),d=n(11),j=n(6),u=n(2),l=n(8),b=n(9),h=n(1),p=function(e){var t=e.listings,n=e.addSelected;return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsx)(O,{listing:e,onClick:function(){return n(e)}})}))})},O=function(e){var t=e.listing,n=e.onClick,i=Object(r.useState)(!1),c=Object(u.a)(i,2),s=c[0],o=c[1];return Object(h.jsxs)("div",{style:{display:"flex",width:"300px",justifyContent:"space-between",paddingTop:"5px",paddingBottom:"5px",borderBottom:"1px solid black"},onClick:n,children:[Object(h.jsxs)("div",{style:{cursor:"pointer"},children:[Object(h.jsx)("div",{children:t.name}),Object(h.jsxs)("div",{style:{fontSize:"13px"},children:[t.startDate," - ",t.endDate]})]}),Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsx)("img",{alt:"for ".concat(t.name),height:40,src:t.image,onMouseOver:function(){return o(!0)},onMouseOut:function(){return o(!1)}}),s&&Object(h.jsx)(x,{url:t.image})]})]})},x=function(e){var t=e.url;return Object(h.jsx)("div",{style:{position:"relative",top:"10px"},children:Object(h.jsx)("img",{style:{position:"absolute"},alt:"larger",src:t})})},f=new Map,m=b.a.div(i||(i=Object(l.a)(["\n  font-family: Verdana;\n  & > div {\n    padding-bottom: 5px;\n  }\n"]))),v=b.a.div(c||(c=Object(l.a)(["\n  cursor: pointer;\n  border: 2px solid grey;\n  border-radius: 20px;\n  padding: 2px 7px 2px 7px;\n"]))),g=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)([]),s=Object(u.a)(c,2),o=s[0],a=s[1],l=Object(r.useState)([]),b=Object(u.a)(l,2),O=b[0],x=b[1],g=Object(r.useState)(!1),y=Object(u.a)(g,2),w=y[0],S=y[1],k=Object(r.useState)(),M=Object(u.a)(k,2),C=M[0],E=M[1],z=function(e){var t;"string"===typeof e?(E(void 0),(t=e,fetch("https://api.tvmaze.com/search/shows?q=".concat(t)).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){return e.map((function(e){return{id:e.show.id,name:e.show.name,startDate:e.show.premiered,endDate:e.show.ended,image:e.show.image.medium}}))})).then((function(e){S(!0),a(e)}))):console.log("SOME ERROR",typeof e)};function R(){S(!1);var e=O[Math.floor(Math.random()*O.length)];(function(e){var t=f.get(e);return t?new Promise((function(e,n){e(t)})):fetch("https://api.tvmaze.com/shows/".concat(e,"/episodes")).then((function(e){return e.json()})).then((function(e){return e})).then((function(t){return f.set(e,t),t}))})(e.id).then((function(t){var n=t[Math.floor(Math.random()*t.length)];E(Object(d.a)(Object(d.a)({},n),{},{show:e.name}))}))}return Object(h.jsxs)(m,{children:[Object(h.jsx)("div",{children:"Episode Randomizer"}),0===O.length?Object(h.jsx)("div",{style:{paddingTop:"8px"},children:"Nothing selected"}):Object(h.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[Object(h.jsx)("button",{onClick:function(){return R()},children:"Randomize"}),O.map((function(e){return Object(h.jsx)(v,{onClick:function(){return function(e){var t=O.indexOf(e),n=O.slice(0,t),i=O.slice(t+1,O.length);x([].concat(Object(j.a)(n),Object(j.a)(i)))}(e)},children:e.name})}))]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{children:["Enter Episode Name:"," ",Object(h.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text"})]}),Object(h.jsx)("button",{onClick:function(){return z(n)},children:"Search"})]}),w&&Object(h.jsx)(p,{listings:o,addSelected:function(e){O.includes(e)||x([].concat(Object(j.a)(O),[e]))}}),C&&Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:C.show}),Object(h.jsxs)("div",{children:["Season ",C.season,", Episode: ",C.number]}),Object(h.jsxs)("div",{children:[C.name," "]})]})]})};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d7276d16.chunk.js.map