(this["webpackJsonpchromium-fs-api-examples-ts"]=this["webpackJsonpchromium-fs-api-examples-ts"]||[]).push([[0],{107:function(e,t){},108:function(e,t){},109:function(e,t){},110:function(e,t){},111:function(e,t){},112:function(e,t){},113:function(e,t){},115:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),i=n(17),o=n.n(i),s=(n(52),n(53),n(18)),u=function(){return Object(r.jsx)("div",{children:"Page not found"})},l=n(4),d=n.n(l),j=n(6),f=n(5),b=function(e){var t=e.value;Object(c.useEffect)((function(){t&&o(t)}),[t]);var n=Object(c.useState)(""),a=Object(f.a)(n,2),i=a[0],o=a[1];return t?Object(r.jsx)("div",{children:Object(r.jsx)("textarea",{name:"file",value:i,rows:40,cols:40})}):null},p=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getFile();case 2:return n=e.sent,e.next=5,n.text();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.createWritable();case 2:return r=e.sent,e.next=5,r.truncate(0);case 5:return e.next=7,r.write(n);case 7:return e.next=9,r.close();case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(void 0),o=Object(f.a)(i,2),s=o[0],u=o[1],l=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.showOpenFilePicker();case 2:(null===(t=e.sent)||void 0===t?void 0:t.length)&&t[0]&&(u(t[0]),l(t[0]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||!s){e.next=8;break}return n,t=n.replace("{/*PHRASE*/}","{/*PHRASE*/}\n<InjectedComponent/>"),e.next=5,v(s,t);case 5:r=e.sent,u(r),l(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"File stuff"}),Object(r.jsx)("button",{onClick:x,children:"Open File"}),s&&Object(r.jsx)("button",{onClick:O,children:"Add component, save file"}),Object(r.jsx)(b,{value:n})]})},O=function(e){var t=e.children,n=Object(s.useQueryParams)();Object(f.a)(n,1)[0];return Object(r.jsx)("div",{className:"layout",children:t})},h=n(7),m=(n(65),n(66),n(67),n(68),n(11)),g=function(e){var t=e.open;return Object(r.jsx)("div",{className:"icon-container".concat(t?" open":""),children:Object(r.jsx)(m.b,{size:"20px"})})},w=n(41),y=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,c,a,i,o,s,u,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],c=!0,a=!1,e.prev=3,o=Object(w.a)(t);case 5:return e.next=7,o.next();case 7:return s=e.sent,c=s.done,e.next=11,s.value;case 11:if(u=e.sent,c){e.next=18;break}l=u,r.push(l);case 15:c=!0,e.next=5;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(3),a=!0,i=e.t0;case 24:if(e.prev=24,e.prev=25,c||null==o.return){e.next=29;break}return e.next=29,o.return();case 29:if(e.prev=29,!a){e.next=32;break}throw i;case 32:return e.finish(29);case 33:return e.finish(24);case 34:return n&&r.sort(k),e.abrupt("return",r);case 36:case"end":return e.stop()}}),e,null,[[3,20,24,34],[25,,29,33]])})));return function(t,n){return e.apply(this,arguments)}}();function k(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0}var F=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getFileHandle(n,{create:!0});case 2:return r=e.sent,e.next=5,C(r," ");case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDirectoryHandle(n,{create:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.createWritable();case 2:return r=e.sent,e.next=5,r.truncate(0);case 5:return e.next=7,r.write(n);case 7:return e.next=9,r.close();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,c=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(c.length>1&&void 0!==c[1])||c[1],r=t.entries(),e.abrupt("return",y(r,n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getFile();case 2:return n=e.sent,e.next=5,n.text();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getFile();case 2:return n=e.sent,r=URL.createObjectURL(n),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getFile();case 2:return n=e.sent,e.next=5,n.type;case 5:return r=e.sent,c=URL.createObjectURL(n),a={blobUrl:c,type:r,name:n.name},e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=n(8);function A(){var e=Object(h.a)(["\n"]);return A=function(){return e},e}var D=R.a.div(A()),M=function(e){var t=e.parent,n=e.show,a=e.handleSelectFile,i=e.dirPath,o=Object(c.useState)([]),s=Object(f.a)(o,2),u=s[0],l=s[1];Object(c.useEffect)((function(){b(t)}),[t,n]);var b=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t);case 2:n=e.sent,l(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n&&u.length?Object(r.jsx)(D,{children:u.map((function(e){return Object(r.jsx)(K,{dirPath:i,entry:e[1],handleSelectFile:a},e[0])}))}):null},T=n(9),L="folder-menu-id",U="file-menu-id",z=n(45),I=Object(z.a)((function(e){return{selectedFolder:void 0,contextHighlightedFolder:void 0,setContextHighlightFolder:function(t){return e((function(e){return{contextHighlightedFolder:t}}))},setSelectedFolder:function(t){return e((function(e){return{selectedFolder:t}}))}}})),B=function(e){var t=e.entry,n=e.handleSelectFile,a=e.dirPath,i=Object(c.useState)(!1),o=Object(f.a)(i,2),s=o[0],u=o[1],l=Object(c.useState)("".concat(a,"/").concat(t.name)),d=Object(f.a)(l,1)[0],j=((null===a||void 0===a?void 0:a.split("/").length)||0)-1||0,b=Object(T.e)({id:L}).show,p=I((function(e){return e.setContextHighlightFolder})),v=I((function(e){return e.contextHighlightedFolder}));Object(c.useEffect)((function(){return console.log("rerender")}));return Object(r.jsxs)("div",{className:"folder-item-conatiner",children:[Object(r.jsxs)("div",{className:"folder-item ".concat((null===v||void 0===v?void 0:v.path)===d?"context-click":""),"data-path":d,onClick:function(){return u(!s)},style:{paddingLeft:"".concat(15*j,"px"),paddingRight:"".concat(15*j,"px")},onContextMenu:function(e){b(e,{id:L,props:{folderHandle:t}}),p({path:d,folderHandle:t})},children:[Object(r.jsx)(g,{open:s}),Object(r.jsx)("div",{className:"folder-name-button",children:Object(r.jsx)("div",{children:t.name})})]},t.name),Object(r.jsx)(M,{parent:t,show:s,handleSelectFile:n,dirPath:"".concat(a,"/").concat(t.name)})]})},J=(n(70),n(71),n(46)),W=function(e){var t=e.filename;return Object(r.jsx)("div",{className:"file-icon-container",children:Object(r.jsx)("img",{src:"./assets/icons/".concat(Object(J.getIconForFile)(t)),alt:"file"})})},_=function(e){var t=e.entry,n=e.handleSelectFile,a=e.dirPath,i=Object(c.useState)("".concat(a,"/").concat(t.name)),o=Object(f.a)(i,1)[0],s=((null===a||void 0===a?void 0:a.split("/").length)||0)-1||0,u=Object(T.e)({id:U}).show;console.log(t.name,o);return Object(r.jsxs)("div",{className:"file-item",onClick:function(){return n?n(t):(e=t,void console.log({file:e}));var e},style:{paddingLeft:"".concat(15*s,"px"),paddingRight:"".concat(15*s,"px")},onContextMenu:function(e){u(e,{id:U,props:{fileHandle:t}})},children:[Object(r.jsx)(W,{filename:t.name}),Object(r.jsx)("div",{children:t.name})]},t.name)},K=function(e){var t=e.entry,n=e.handleSelectFile,c=e.dirPath;return"directory"===t.kind?Object(r.jsx)(B,{entry:t,handleSelectFile:n,dirPath:c}):Object(r.jsx)(_,{entry:t,handleSelectFile:n,dirPath:c})};function Q(){var e=Object(h.a)(["\n    position: absolute;\n    right: -20px;\n    top: 48%;\n    z-index: 10;\n"]);return Q=function(){return e},e}var q=R.a.div(Q()),G=function(e){var t=e.onClick;return Object(r.jsx)(q,{onClick:t,children:Object(r.jsx)(m.a,{size:"20px"})})};function V(){var e=Object(h.a)(["\n    width: auto;\n    height: 25px;\n    background-color: lightgray;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 0 10px;\n"]);return V=function(){return e},e}var X=R.a.div(V()),Y=function(e){var t=e.rootHandle,n=e.setupFileSystem;return Object(r.jsx)(X,{children:Object(r.jsx)(m.c,{size:"20px",style:{cursor:"pointer"},onClick:function(){n(t)}})})},Z=function(e){var t=e.handleSelectFile,n=e.altRootHandle,a=Object(c.useState)(void 0),i=Object(f.a)(a,2),o=i[0],s=i[1],u=Object(c.useState)([]),l=Object(f.a)(u,2),b=l[0],p=l[1],v=Object(c.useState)(!0),x=Object(f.a)(v,2),O=x[0],h=x[1];Object(c.useEffect)((function(){n&&w(n)}),[n]);var g=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.showDirectoryPicker();case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t);case 2:n=e.sent,s(t),p(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o&&b?0===b.length?Object(r.jsx)("div",{className:"main-folder-list-container",children:Object(r.jsxs)("div",{className:"main-folder-list no-contents",children:[Object(r.jsx)("p",{children:"Folder Empty"}),Object(r.jsx)("button",{onClick:g,children:"Select Root Folder"})]})}):o?Object(r.jsxs)(r.Fragment,{children:[!O&&Object(r.jsx)(m.b,{style:{position:"absolute",top:"48%",zIndex:10},onClick:function(){return h(!O)}}),Object(r.jsxs)("div",{className:"main-folder-list-container ".concat(O?"":"closed"),children:[O&&Object(r.jsx)(G,{onClick:function(){return h(!O)}}),Object(r.jsxs)("div",{className:"main-folder-list",children:[Object(r.jsxs)("div",{className:"folder-name",children:["'",o.name,"' Contents:"]}),Object(r.jsx)(Y,{rootHandle:o,setupFileSystem:w}),b.map((function(e){return Object(r.jsx)(K,{entry:e[1],handleSelectFile:t,dirPath:o.name},e[0])}))]})]})]}):Object(r.jsx)("div",{children:"No folder selected"}):Object(r.jsx)("div",{className:"main-folder-list-container",children:Object(r.jsxs)("div",{className:"main-folder-list no-contents",children:[Object(r.jsx)("p",{children:"No Folder Selected"}),Object(r.jsx)("button",{onClick:g,children:"Select Root Folder"})]})})},$=["png","jpeg","jpg","bmp","gif","webp","svg","ico"],ee=["mov","mp4","mpeg","mpg","webm","mkv","avi","gifv"],te=function(e){var t,n=function(e){var t=e.name.split(".");return t[t.length-1]}(e);return t=n,$.includes(t)?"image":ee.includes(t)?"video":"text"};function ne(){var e=Object(h.a)(["\n    /* display: flex;\n    justify-content: center;\n    align-items: center; */\n    padding: 10% 0 0 10%;\n\n    width: 100%;\n    height: auto;\n    \n    border: 1px solid black;\n    border-radius: 10px;\n"]);return ne=function(){return e},e}var re=R.a.div(ne()),ce=function(e){var t=e.fileHandle,n=Object(c.useState)(""),a=Object(f.a)(n,2),i=a[0],o=a[1];Object(c.useEffect)((function(){s(t)}),[t]);var s=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(re,{children:i?Object(r.jsx)("img",{src:i,height:"100px",width:"100px"}):null})},ae=n(27),ie=n.n(ae),oe=n(29),se=n.n(oe);function ue(){var e=Object(h.a)(["\n    width: 100%;\n    height: auto;\n    border: 1px solid black;\n    border-radius: 10px;\n"]);return ue=function(){return e},e}var le=R.a.div(ue()),de=function(e){var t=e.fileHandle,n=Object(c.useState)(""),a=Object(f.a)(n,2),i=a[0],o=a[1];Object(c.useEffect)((function(){s(t)}),[t]);var s=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:n=e.sent,o(n),r=se.a.createSourceFile("boo.txt",n,se.a.ScriptTarget.JSON),console.log("test",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(le,{children:i?Object(r.jsx)(ie.a,{height:"98vh",value:i}):null})};function je(){var e=Object(h.a)(["\n    /* display: flex;\n    justify-content: center;\n    align-items: center; */\n    padding: 10% 0 0 10%;\n\n    width: 100%;\n    height: auto;\n    \n    border: 1px solid black;\n    border-radius: 10px;\n"]);return je=function(){return e},e}var fe=R.a.div(je()),be=function(e){var t=e.fileHandle,n=Object(c.useState)(void 0),a=Object(f.a)(n,2),i=a[0],o=a[1];Object(c.useEffect)((function(){s(t)}),[t]);var s=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(fe,{children:i?Object(r.jsx)("video",{width:"auto",height:"auto",controls:!0,children:Object(r.jsx)("source",{src:i.blobUrl,type:i.type})}):null})},pe=function(e){var t=e.fileHandle,n=te(t);return"image"===n?Object(r.jsx)(ce,{fileHandle:t}):"video"===n?Object(r.jsx)(be,{fileHandle:t}):"text"===n?Object(r.jsx)(de,{fileHandle:t}):Object(r.jsx)("div",{children:"no file worky"})},ve=n(21);n(114);function xe(){var e=Object(h.a)(["\n    height: 5%;\n    border: 2px solid darkgray;\n"]);return xe=function(){return e},e}var Oe=R.a.div(xe()),he=function(e){var t=e.setAltRootHandle,n=function(){var e=Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.showDirectoryPicker();case 2:n=e.sent,t(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(Oe,{children:Object(r.jsx)(ve.a,{menuButton:Object(r.jsx)(ve.b,{children:"File"}),children:Object(r.jsx)(ve.c,{onClick:n,children:"Open new root folder"})})})},me=n(3);n(40);function ge(){var e=Object(h.a)(["\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n"]);return ge=function(){return e},e}function we(){var e=Object(h.a)(["\n  /* display: none;  */\n  position: fixed; /* Stay in place */\n  z-index: 20; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n"]);return we=function(){return e},e}var ye,ke=R.a.div(we()),Fe=R.a.div(ge()),Se=function(e){var t=e.children,n=e.onCloseModal;return Object(r.jsx)(ke,{className:"modal-backdrop",onClick:n,children:Object(r.jsx)(Fe,{onClick:function(e){e.stopPropagation(),e.preventDefault()},children:t})})},Ce=function(e){var t=e.name,n=e.label,a=e.text,i=e.setText,o=e.type,s=void 0===o?"":o,u=e.error,l=void 0===u?"":u,d=e.placeholder,j=void 0===d?"":d,f=e.stealFocus,b=void 0!==f&&f,p=e.onPressEnter,v=Object(c.useRef)();Object(c.useEffect)((function(){b&&(null===v||void 0===v?void 0:v.current)&&v.current.focus()}));return Object(r.jsxs)("div",{className:"input-label-container",children:[n?Object(r.jsx)("label",{children:n}):null,Object(r.jsx)("input",{name:t,type:s||"text",onChange:function(e){i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(null===p||void 0===p||p())},value:a,placeholder:j,ref:v}),l?Object(r.jsx)("span",{className:"error",children:l}):null]})},He=function(e){var t=e.children;return Object(r.jsx)("div",{children:t})},Ne=function(e){var t=Object.assign({},e);return Object(r.jsx)("button",Object(me.a)(Object(me.a)({},t),{},{children:"Create"}))},Ee=function(e){var t=e.directoryHandle,n=e.setCreateDirectoryModalOpen,a=Object(c.useState)(""),i=Object(f.a)(a,2),o=i[0],s=i[1],u=function(){o&&(S(t,o),n(!1))};return Object(r.jsxs)(He,{children:[Object(r.jsxs)("p",{children:['Add new directory to "',t.name,'"']}),Object(r.jsx)(Ce,{label:"New Directory Name",name:"directory-name",text:o,setText:s,onPressEnter:u,stealFocus:!0}),Object(r.jsx)(Ne,{onClick:u,children:"Create"})]})},Pe=function(e){var t=e.directoryHandle,n=e.setCreateFileModalOpen,a=Object(c.useState)(""),i=Object(f.a)(a,2),o=i[0],s=i[1],u=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=4;break}return e.next=3,F(t,o);case 3:n(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(He,{children:[Object(r.jsxs)("p",{children:['Add new file to "',t.name,'"']}),Object(r.jsx)(Ce,{label:"New File Name and extension",name:"file-name",text:o,setText:s,onPressEnter:u,stealFocus:!0}),Object(r.jsx)(Ne,{onClick:u,children:"Create"})]})};!function(e){e.NewFolder="new-folder",e.NewFile="new-file"}(ye||(ye={}));var Re,Ae=function(){var e=Object(c.useState)(void 0),t=Object(f.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),o=Object(f.a)(i,2),s=o[0],u=o[1],l=Object(c.useState)(!1),d=Object(f.a)(l,2),j=d[0],b=d[1],p=I((function(e){return e.setContextHighlightFolder})),v=function(e){var t=e.event,n=e.props,r=e.triggerEvent,c=e.data,i=e.action;console.log({event:t,props:n,triggerEvent:r,data:c,action:i});var o=null===n||void 0===n?void 0:n.folderHandle;a(o),i===ye.NewFolder?b(!0):i===ye.NewFile&&u(!0)},x=function(){a(void 0),u(!1),b(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(T.b,{id:L,onHidden:function(){p(void 0)},children:[Object(r.jsx)(T.a,{onClick:function(e){return v(Object(me.a)(Object(me.a)({},e),{},{action:ye.NewFolder}))},children:"New Directory"}),Object(r.jsx)(T.a,{onClick:function(e){return v(Object(me.a)(Object(me.a)({},e),{},{action:ye.NewFile}))},children:"New File"}),Object(r.jsx)(T.c,{}),Object(r.jsx)(T.a,{disabled:!0,children:"Disabled"}),Object(r.jsx)(T.c,{}),Object(r.jsxs)(T.d,{label:"Submenu",children:[Object(r.jsx)(T.a,{onClick:v,children:"Sub Item 1"}),Object(r.jsx)(T.a,{onClick:v,children:"Sub Item 2"})]})]}),j&&n&&Object(r.jsx)(Se,{onCloseModal:x,children:Object(r.jsx)(Ee,{directoryHandle:n,setCreateDirectoryModalOpen:b})}),s&&n&&Object(r.jsx)(Se,{onCloseModal:x,children:Object(r.jsx)(Pe,{directoryHandle:n,setCreateFileModalOpen:u})})]})};!function(e){e.EditAstTest="edit-ast-test",e.Properties="properties"}(Re||(Re={}));var De=function(){var e=Object(c.useState)(void 0),t=Object(f.a)(e,2),n=(t[0],t[1]),a=function(e){var t=e.event,r=e.props,c=e.triggerEvent,a=e.data,i=e.action;console.log({event:t,props:r,triggerEvent:c,data:a,action:i});var o=null===r||void 0===r?void 0:r.fileHandle;n(o),i===Re.EditAstTest||Re.Properties};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(T.b,{id:U,onHidden:function(){n(void 0)},children:[Object(r.jsx)(T.a,{onClick:function(e){return a(Object(me.a)(Object(me.a)({},e),{},{action:Re.EditAstTest}))},children:"Edit AST test"}),Object(r.jsx)(T.a,{onClick:function(e){return a(Object(me.a)(Object(me.a)({},e),{},{action:Re.Properties}))},children:"Properties"})]})})};function Me(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    height: 95%;\n"]);return Me=function(){return e},e}function Te(){var e=Object(h.a)(["\n    height: 100vh;\n"]);return Te=function(){return e},e}var Le=R.a.div(Te()),Ue=R.a.div(Me()),ze=function(){var e=Object(c.useState)(void 0),t=Object(f.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(void 0),o=Object(f.a)(i,2),s=o[0],u=o[1],l=Object(c.useCallback)(function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log({customFileFn:t}),u(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(r.jsxs)(Le,{children:[Object(r.jsx)(he,{setAltRootHandle:a}),Object(r.jsxs)(Ue,{children:[Object(r.jsx)(Z,{handleSelectFile:l,altRootHandle:n}),s&&Object(r.jsx)(pe,{fileHandle:s})]}),Object(r.jsx)(Ae,{}),Object(r.jsx)(De,{})]})},Ie={"/test":function(){return Object(r.jsx)(x,{})},"/":function(){return Object(r.jsx)(ze,{})}},Be=function(){var e=Object(s.useRoutes)(Ie);return Object(r.jsx)(O,{children:e})||Object(r.jsx)(u,{})},Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Be,{})}),document.getElementById("root")),Je()},39:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=39},52:function(e,t,n){},53:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.d68321b0.chunk.js.map