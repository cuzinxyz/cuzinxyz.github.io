(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],Array(23).concat([function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var s=t(2),a=t.n(s),c=t(13),i=t.n(c),r=(t(23),t(4)),j=t(1),l=Object(s.createContext)(),o=function(e){var n=e.children,t=Object(s.useState)(!1),a=Object(r.a)(t,2),c=a[0],i=a[1],o={isAuthenticated:c,toggleAuth:function(){i(!c)}};return Object(j.jsx)(l.Provider,{value:o,children:n})},m=(t(25),t(3)),d=(t(26),t(11)),g=t(5);t(27);function h(e){var n=e.toggle;return Object(j.jsxs)("div",{className:n?"notification-form show":"notification-form",children:[Object(j.jsxs)("h4",{children:["You have ",Object(j.jsx)("strong",{children:"3"})," notifications"]}),Object(j.jsxs)("div",{className:"form",children:[Object(j.jsxs)("a",{href:"/",className:"group",children:[Object(j.jsx)("span",{className:"img avatar",children:Object(j.jsx)(d.a,{})}),Object(j.jsxs)("span",{className:"content",children:[Object(j.jsx)("span",{children:"Sophi sent you a email"}),Object(j.jsx)("br",{}),Object(j.jsx)("small",{children:"1 minutes ago"})]})]}),Object(j.jsxs)("a",{href:"/",className:"group",children:[Object(j.jsx)("span",{className:"img avatar",children:Object(j.jsx)(d.a,{})}),Object(j.jsxs)("span",{className:"content",children:[Object(j.jsx)("span",{children:"Sophi sent you a email"}),Object(j.jsx)("br",{}),Object(j.jsx)("small",{children:"1 minutes ago"})]})]}),Object(j.jsxs)("a",{href:"/",className:"group",children:[Object(j.jsx)("span",{className:"img avatar",children:Object(j.jsx)(d.a,{})}),Object(j.jsxs)("span",{className:"content",children:[Object(j.jsx)("span",{children:"Sophi sent you a email"}),Object(j.jsx)("br",{}),Object(j.jsx)("small",{children:"1 minutes ago"})]})]})]}),Object(j.jsxs)("div",{className:"setting",children:[Object(j.jsx)("span",{children:"See all the notifications"}),Object(j.jsx)("button",{className:"cog",children:Object(j.jsx)(g.b,{})})]})]})}var b=a.a.memo(h);var u=function(e){var n=Object(s.useState)(!1),t=Object(r.a)(n,2),a=t[0],c=t[1];return Object(j.jsxs)("div",{className:"notification",children:[Object(j.jsxs)("button",{className:"button",onClick:function(e){e.preventDefault(),c(!a)},children:[Object(j.jsx)("span",{className:"bell",children:Object(j.jsx)(m.g,{})}),Object(j.jsx)("span",{className:"bell-number",children:"3"})]}),Object(j.jsx)(b,{toggle:a})]})};t(28);var x=function(e){var n=e.toggle;return Object(j.jsx)("div",{className:n?"box show":"box",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Setting"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",children:["Notification ",Object(j.jsx)("span",{className:"number",children:"3"})]})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Help"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Logout"})})]})})};var O=function(e){var n=e.location,t=Object(s.useState)(!1),a=Object(r.a)(t,2),c=a[0],i=a[1];return Object(j.jsxs)("div",{className:"profile ".concat(n),onClick:function(e){e.preventDefault(),i(!c)},children:[Object(j.jsxs)("div",{className:"profile-container",children:[Object(j.jsxs)("button",{className:"name",children:["H\xeanh \u0110\u1eb9p Trai ",Object(j.jsx)(m.a,{})]}),Object(j.jsx)("span",{className:"avatar",children:Object(j.jsx)("img",{src:"/ghiennhac/images/avatar/cry.png",alt:""})})]}),Object(j.jsx)(x,{toggle:c})]})};var p=function(e){var n=Object(s.useContext)(l),t=n.isAuthenticated,a=n.toggleAuth;return Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("button",{className:t?"home open":"home",children:[Object(j.jsx)("img",{src:"/ghiennhac/images/avatar/haha.png",alt:""}),Object(j.jsx)("span",{children:"MP5 Zing"})]}),Object(j.jsx)("button",{className:"toggle-header",onClick:a,children:t?Object(j.jsx)(m.j,{}):Object(j.jsx)(m.k,{})}),Object(j.jsxs)("form",{className:"search",children:[Object(j.jsx)("button",{className:"button",children:Object(j.jsx)(m.l,{})}),Object(j.jsx)("input",{className:"input-search",type:"input",placeholder:"T\xecm Ki\u1ebfm nh\u1ea1c, ablum"})]}),Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)(u,{}),Object(j.jsx)(O,{location:"top"})]})]})})},f=t(14),v=t(8);t(29);var N=function(e){var n=Object(s.useContext)(l).isAuthenticated;return Object(j.jsxs)("div",{className:"nav-container ".concat(n&&"open"),children:[Object(j.jsxs)("nav",{className:"nav-Left",children:[Object(j.jsx)("span",{className:"discover",children:"Kh\xe1m ph\xe1"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",className:"link",children:[Object(j.jsx)("span",{className:"img",style:{color:"#1ab667"},children:Object(j.jsx)(f.a,{})}),Object(j.jsx)("span",{className:"text",children:"What's New"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",className:"link",children:[Object(j.jsx)("span",{className:"img",style:{color:"#4cb6cb"},children:Object(j.jsx)(g.g,{})}),Object(j.jsx)("span",{className:"text",children:"Genres"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",className:"link",children:[Object(j.jsx)("span",{className:"img",style:{color:"#e8eff0"},children:Object(j.jsx)(g.a,{})}),Object(j.jsx)("span",{className:"text",children:"Events"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",className:"link",children:[Object(j.jsx)("span",{className:"img",style:{color:"#788188"},children:Object(j.jsx)(g.e,{})}),Object(j.jsx)("span",{className:"text",children:"Listen"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",className:"link",children:[Object(j.jsx)("span",{className:"img",style:{color:"#f05050"},children:Object(j.jsx)(v.c,{})}),Object(j.jsx)("span",{className:"text",children:"Youtube"})]})})]})]}),Object(j.jsx)(O,{location:"bottom"})]})},y=t(17),T=(t(30),t(10));var k=function(e){var n=e.value,t=e.currentSongIndex,s=e.setCurrentSongIndex,a=e.isPlaying,c=e.setIsPlaying,i=e.myList,r=e.setMyList;function l(e){a&&e.id===t?c(!1):(c(!0),s(e.id))}return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"playerSong",children:[Object(j.jsx)("span",{className:"btnMyPlay",onClick:function(){return l(n)},children:n.id===t&&a?Object(j.jsx)("span",{className:"play",children:Object(j.jsx)(m.d,{})}):Object(j.jsx)("span",{className:"pause",children:Object(j.jsx)(g.i,{})})}),Object(j.jsxs)("span",{className:"song-name",onClick:function(){return l(n)},children:[Object(j.jsx)("strong",{children:n.name})," by ",n.singer]}),Object(j.jsx)("span",{className:"remove",onClick:function(){return function(e){var n=i.filter((function(n){return n.id!==e}));r(n)}(n.id)},children:Object(j.jsx)(T.a,{})})]})})};var S=function(e){var n=Object(s.useState)({x:0}),t=Object(r.a)(n,2),a=t[0],c=t[1],i=Object(s.useState)(!0),l=Object(r.a)(i,2),o=l[0],m=l[1],d=Object(s.useState)("00:00"),h=Object(r.a)(d,2),b=h[0],u=h[1],x=Object(s.useState)(!1),O=Object(r.a)(x,2),p=O[0],f=O[1],v=Object(s.useRef)(null),N=Object(s.useRef)(null),S=Object(s.useRef)(null),C=Object(s.useRef)(null),L=Object(s.useRef)(null),M=e.playList,w=e.currentSongIndex,P=e.setCurrentSongIndex,I=e.isPlaying,F=e.setIsPlaying,A=e.openMyList,E=e.myList,D=e.setMyList,W=e.setOpenMyList,H=M[w];Object(s.useEffect)((function(){I?v.current.play():v.current.pause()}));var B=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];setTimeout((function(){P(e?function(){var e=w;return++e>M.length-1&&(e=0),e}:function(){var e=w;return--e<0&&(e=M.length-1),e}),I?v.current.play():F(!I)}),100)};function K(e){var n=(e/1e3).toFixed(0),t=Math.floor(n/60),s="";return t>59&&(t=(t-=60*(s=(s=Math.floor(t/60))>=10?s:"0"+s))>=10?t:"0"+t),n=(n=Math.floor(n%60))>=10?n:"0"+n,""!==s?s+":"+t+":"+n:"0"+t+":"+n}return Object(j.jsxs)("div",{className:"control absolute-md",children:[Object(j.jsxs)("div",{className:"control-container flex",children:[Object(j.jsx)("div",{className:"item btn-prev",onClick:function(){return B(!1)},children:Object(j.jsx)("button",{className:"control-button",children:Object(j.jsx)(g.c,{})})}),Object(j.jsx)("div",{className:"item btn-play",onClick:function(){F(!I),L.current.textContent=K(1e3*v.current.duration)},children:Object(j.jsx)("button",{className:"control-button",children:I?Object(j.jsx)(g.h,{}):Object(j.jsx)(g.i,{})})}),Object(j.jsx)("div",{className:"item btn-next",onClick:function(){return B()},children:Object(j.jsx)("button",{className:"control-button",ref:N,children:Object(j.jsx)(g.d,{})})}),Object(j.jsx)("div",{className:"item listBtn",children:Object(j.jsx)("button",{className:"control-button btnList",onClick:function(){W(!A)},children:Object(j.jsx)(g.f,{})})}),Object(j.jsxs)("form",{className:"item btn-range","data-value":a.x,ref:S,children:[Object(j.jsx)("span",{className:"name-singer",children:"".concat(H.name," - ").concat(H.singer)}),Object(j.jsx)(y.a,{styles:{track:{width:"100%",marginBottom:"20px",height:"5px",cursor:"pointer"},active:{backgroundColor:"#657c93"},thumb:{width:10,height:10}},axis:"x",x:a.x,onDragStart:function(){m(!1)},onChange:function(e){var n=e.x;c({x:n}),function(e){var n=1e3*Math.floor(v.current.duration*(e/100));C.current.textContent=K(n)}(n)},onDragEnd:function(){return function(){var e=Number(S.current.dataset.value),n=v.current.duration*(e/100);v.current.currentTime=n,m(!0)}()}})]}),Object(j.jsx)("div",{className:"item time",ref:C,children:"00:00"}),Object(j.jsx)("div",{className:"item time",ref:L,children:b}),Object(j.jsx)("div",{className:"item btn-mute",onClick:function(){return function(){var e=!p;v.current.muted=!!e,f(e)}()},children:Object(j.jsx)("button",{className:"control-button",children:p?Object(j.jsx)(g.k,{}):Object(j.jsx)(g.l,{})})}),Object(j.jsx)("div",{className:"item btn-random",children:Object(j.jsx)("button",{className:"control-button",children:Object(j.jsx)(g.j,{})})}),Object(j.jsx)("div",{className:"item btn-repeat",children:Object(j.jsx)("button",{className:"control-button",children:Object(j.jsx)(T.b,{})})}),Object(j.jsx)("div",{className:"playerList ".concat(A&&"active"),children:Object(j.jsx)("ul",{className:"list",children:E.map((function(e){return Object(j.jsx)(k,{value:e,currentSongIndex:w,setCurrentSongIndex:P,isPlaying:I,setIsPlaying:F,myList:E,setMyList:D},e.id)}))})})]}),Object(j.jsx)("audio",{ref:v,src:"/ghiennhac"+H.path,onLoadedMetadata:function(){return function(){var e=K(1e3*v.current.duration);u(e)}()},onEnded:function(){setTimeout((function(){N.current.click()}),100)},onTimeUpdate:function(e){return function(e){if(o){var n=(e.currentTarget.currentTime/e.currentTarget.duration*100).toFixed(1);C.current.textContent=K(1e3*e.currentTarget.currentTime.toFixed()),c({x:n})}}(e)}})]})};t(33);var C=function(e){return Object(j.jsxs)("div",{className:"row footer",children:[Object(j.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12",children:Object(j.jsx)("div",{className:"footer-items login",children:Object(j.jsxs)("a",{href:"/",className:"flex",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)(m.m,{})}),Object(j.jsx)("span",{className:"text",children:"Login or Create account"})]}),Object(j.jsx)("p",{children:"Save and share your playlist with your friends when you log in or create an account."})]})})}),Object(j.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12",children:Object(j.jsx)("div",{className:"footer-items download",children:Object(j.jsxs)("a",{href:"/",className:"flex",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)(m.h,{})}),Object(j.jsx)("span",{className:"text",children:"Login or Create account"})]}),Object(j.jsx)("p",{children:"Save and share your playlist with your friends when you log in or create an account."})]})})})]})},L=t(18),M=t(16);t(34);function w(e,n){var t=n.some((function(n){return n.id===e}));if(t)return t}var P=function(e){var n=e.value,t=e.playLists,s=e.currentSongIndex,a=e.setCurrentSongIndex,c=e.isPlaying,i=e.setIsPlaying,r=e.myList,l=e.setMyList,o=e.setOpenMyList,d={star:!0,padder:!0,playsFill:!1,col:""};switch(n){case"song":d.star=!0,d.padder=!0,d.playsFill=!1,d.col="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 items-song";break;case"new":d.star=!1,d.padder=!1,d.playsFill=!0,d.col="col-xl-3 col-lg-4 col-6 items-new"}return Object(j.jsx)("div",{className:"items px-lg-3 px-md-2 px-sm-2 px-3 ".concat(d.col),children:Object(j.jsxs)("div",{className:"song ".concat(t.id===s&&"open"),"data-song":t.id,children:[Object(j.jsxs)("div",{className:"top",children:["item"===n&&Object(j.jsx)("span",{className:"time",children:"03:20"}),Object(j.jsxs)("div",{className:"play-container",children:[d.star&&Object(j.jsxs)("div",{className:"star",children:[Object(j.jsx)(m.f,{}),Object(j.jsx)(m.f,{}),Object(j.jsx)(m.f,{}),Object(j.jsx)(m.f,{}),Object(j.jsx)(m.f,{})]}),Object(j.jsx)("div",{className:"play","data-song":t.id,onClick:function(e){return function(e){var n=Number(e.currentTarget.dataset.song);c&&n===s&&i(!1),a(n),c||i(!c)}(e,t.id)},children:d.playsFill?Object(j.jsx)("button",{children:c&&s===t.id?Object(j.jsx)(m.d,{}):Object(j.jsx)(m.c,{})}):Object(j.jsx)("button",{children:c&&s===t.id?Object(j.jsx)(v.a,{}):Object(j.jsx)(v.b,{})})}),d.padder&&Object(j.jsxs)("div",{className:"padder flex",children:[Object(j.jsx)("button",{className:"add ".concat(w(t.id,r)&&"active"),onClick:function(){return function(e){var n=Object(L.a)(r),t=n.every((function(n){return n.id!==e.id}));o(!0),t&&(n.push(e),l(n))}(t)},children:w(t.id,r)?Object(j.jsx)(m.b,{}):Object(j.jsx)(M.a,{})}),Object(j.jsx)("button",{className:"heart",children:Object(j.jsx)(m.i,{})})]})]}),Object(j.jsx)("a",{href:"/",className:"img",children:Object(j.jsx)("img",{src:"/ghiennhac"+t.image,alt:""})})]}),Object(j.jsxs)("div",{className:"bottom",children:[Object(j.jsx)("a",{href:"/",className:"name",children:t.name}),Object(j.jsx)("a",{href:"/",className:"singer",children:t.singer})]})]})})};t(35);var I=function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/",children:[Object(j.jsx)("span",{className:"avatar",children:Object(j.jsx)("img",{src:"/ghiennhac"+e.user,alt:""})}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("span",{className:"name-song",children:"Liitle Town"}),Object(j.jsx)("span",{className:"singer",children:"by Chris Fox"})]}),Object(j.jsx)("span",{className:"top-number",children:e.top})]})})};t(36);var F=function(e){var n=Object(s.useState)([{id:0,name:"\u0110au \u0111\u1ec3 tr\u01b0\u1edfng th\xe0nh",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Daudetruongthanh.mp3",image:"/images/item1.jpg"},{id:1,name:"Dj China V80",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/DjChiNa.mp3",image:"/images/item2.jpg"},{id:2,name:"\u0110\u1eebng y\xeau n\u1eeda em m\u1ec7t r\u1ed3i",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Dungyeunuaemmetroi.mp3",image:"/images/item3.jpg"},{id:3,name:"H\xf3a ra em l\xe0 ng\u01b0\u1eddi th\u1ee9 3",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Hoaraemlanguoithuba.mp3",image:"/images/item4.jpg"},{id:4,name:"H\u1ed3ng nhan x\u01b0a",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/hongnhanxua.mp3",image:"/images/item5.jpg"},{id:5,name:"M\u1ed9t ng\u01b0\u1eddi r\u1ea5t t\u1ed1t",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Motnguoirattot.mp3",image:"/images/item6.jpg"},{id:6,name:"Somg thing just like this",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Somethingjustlikethis.mp3",image:"/images/item7.jpg"},{id:7,name:"T\xecnh b\u1ea1n di\u1ec7u k\u1ef3",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/tinhbandieuky.mp3",image:"/images/item8.jpg"},{id:8,name:"Vong xuy\xean b\u1ec9 ng\u1ea1n",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/Vongxuyenbingan.mp3",image:"/images/item9.jpg"},{id:9,name:"Xu\u1ea5t s\u01a1n",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/xuatson.mp3",image:"/images/item10.jpg"},{id:10,name:"M\u1ed9t tri\u1ec7u kh\u1ea3 n\u0103ng",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/1trieukhanang.mp3",image:"/images/item11.jpg"},{id:11,name:"I Love You 3000",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/3000.mp3",image:"/images/item2.jpg"},{id:12,name:"EDM S\xe1o Tr\xfac",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/edmsao.mp3",image:"/images/item1.jpg"},{id:13,name:"Em b\u1eb1ng l\xf2ng l\xe0m m\u1ed9t ng\u01b0\u1eddi b\xecnh th\u01b0\u1eddng b\xean anh",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/embanglong.mp3",image:"/images/item7.jpg"},{id:14,name:"Futari",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/futari.mp3",image:"/images/item6.jpg"},{id:15,name:"Giang h\u1ea3i kh\xf4ng \u0111\u1ed9 n\xe0ng",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/gianghai.mp3",image:"/images/item5.jpg"},{id:16,name:"Tam th\u1ed1n nh\xe2n gian",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/tamthon.mp3",image:"/images/item4.jpg"},{id:17,name:"Thay t\xf4i y\xeau c\xf4 \u1ea5y",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/thaytoi.mp3",image:"/images/item7.jpg"},{id:18,name:"B\u01b0\u1edbc vu quy",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/buocvuquy.mp3",image:"/images/item4.jpg"},{id:19,name:"Ch\xe2n \xe1i phai mau",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/chanaiphaimau.mp3",image:"/images/item10.jpg"},{id:20,name:"Ch\u1ec9 l\xe0 kh\xf4ng gi\u1ed1ng nhau",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/chilakhongcungnhau.mp3",image:"/images/item11.jpg"},{id:21,name:"C\xf4 ph\u01b0\u01a1ng t\u1ef1 h\u01b0\u1edfng",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/cophuongtuhuong.mp3",image:"/images/item6.jpg"},{id:22,name:"K\u1ebft duy\xean",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/kd.mp3",image:"/images/item8.jpg"},{id:23,name:"Thi\u1ec7p h\xf4ng ng\u01b0\u1eddi d\u01b0ng",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/thnd.mp3",image:"/images/item9.jpg"},{id:24,name:"Ch\u1ec9 v\xec qu\xe1 y\xeau",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/chiviquayeu.mp3",image:"/images/item7.jpg"},{id:25,name:"Ki\u1ebfp duy\xean kh\xf4ng th\xe0nh",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/kdkt.mp3",image:"/images/item8.jpg"},{id:26,name:"B\u1ed3 \u0111\u1ec1 k\u1ebft",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/bodeket.mp3",image:"/images/item11.jpg"},{id:27,name:"Waiting For Love",singer:"Tr\u1ea7n Tr\xe2n",path:"/songs/WaitingForLove.mp3",image:"/images/item1.jpg"},{id:28,name:"Teeth",singer:"5SOS",path:"/songs/Teeth.mp3",image:"/images/item8.jpg"}]),t=Object(r.a)(n,1)[0],a=Object(s.useState)([]),c=Object(r.a)(a,2),i=c[0],l=c[1],o=Object(s.useState)(0),m=Object(r.a)(o,2),d=m[0],g=m[1],h=Object(s.useState)(!1),b=Object(r.a)(h,2),u=b[0],x=b[1],O=Object(s.useState)(!1),p=Object(r.a)(O,2),f=p[0],v=p[1];return Object(j.jsxs)("div",{id:"product",className:"product",children:[Object(j.jsxs)("div",{className:"box-product absolute-md ",children:[Object(j.jsx)("h3",{className:"discover",children:Object(j.jsx)("span",{children:"Kh\xe1m Ph\xe1"})}),Object(j.jsx)("div",{className:"row songs",children:t.map((function(e){return Object(j.jsx)(P,{value:"song",playLists:e,currentSongIndex:d,setCurrentSongIndex:g,isPlaying:u,setIsPlaying:x,myList:i,setMyList:l,openMyList:f,setOpenMyList:v},e.id)}))}),Object(j.jsxs)("div",{className:"row rattings-songs",children:[Object(j.jsxs)("div",{className:"col-xl-7 col-lg-7",children:[Object(j.jsx)("h3",{className:"discover",children:Object(j.jsx)("span",{children:"Nh\u1ea1c M\u1edbi"})}),Object(j.jsx)("div",{className:"row"})]}),Object(j.jsxs)("div",{className:"col-xl-5 col-lg-5 top-songs",children:[Object(j.jsx)("h3",{className:"discover",children:Object(j.jsx)("span",{children:"Top B\xe0i H\xe1t Hay"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)(I,{top:1,user:"/images/avatar/cry.png"}),Object(j.jsx)(I,{top:2,user:"/images/avatar/hoangmang.png"}),Object(j.jsx)(I,{top:3,user:"/images/avatar/talk.png"}),Object(j.jsx)(I,{top:4,user:"/images/avatar/stupid.png"}),Object(j.jsx)(I,{top:5,user:"/images/avatar/sick.png"})]})]})]}),Object(j.jsx)(C,{})]}),Object(j.jsx)(S,{currentSongIndex:d,setCurrentSongIndex:g,isPlaying:u,setIsPlaying:x,playList:t,myList:i,setMyList:l,openMyList:f,setOpenMyList:v})]})};var A=function(e){var n=e.user;return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"friend",children:[Object(j.jsxs)("div",{className:"img",children:[Object(j.jsx)("img",{src:"/ghiennhac"+n.img,alt:""}),Object(j.jsx)("span",{className:"status ".concat(n.status)})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("a",{href:"/",className:"name",children:n.name}),Object(j.jsx)("span",{className:"from",children:n.from})]})]})})};t(37);var E=function(e){var n=Object(s.useState)([{id:1,name:"C\u01a1 b\xe1 x\u01b0\u01a1ng",from:"New York",img:"/images/avatar/contemptuous.png",status:"Error"},{id:2,name:"T\u1ed1ng ng\u1ecdc h\u1ea7u",from:"TaiWan",img:"/images/avatar/cry.png",status:"Warning"},{id:3,name:"V\xf5 th\xe0nh \u0111ang",from:"Hong Kong",img:"/images/avatar/curious.png",status:"Success"},{id:4,name:"Ti\u1ec3u m\u1ecbnh kh\xea",from:"Porland",img:"/images/avatar/dark.png",status:"Warning"},{id:6,name:"Tr\xecnh tu\u1ea5n v\u0169",from:"Japan",img:"/images/avatar/doubt.png",status:"Error"},{id:7,name:"L\u1ec7nh h\u1ed3 giao",from:"America",img:"/images/avatar/fighten.png",status:"Success"},{id:8,name:"H\xe0n l\u1eadp",from:"New Zeland",img:"/images/avatar/hoangmang.png",status:"Warning"},{id:9,name:"Ph\u01b0\u01a1ng l\xe3o ma",from:"New York",img:"/images/avatar/hohhhhh.png",status:"Error"},{id:10,name:"Th\xe1i b\xe1ch v\xe2n sinh",from:"Viet Nam",img:"/images/avatar/innocence.png",status:"Success"},{id:11,name:"M\u1eb7c dao",from:"Italia",img:"/images/avatar/look.png",status:"Warning"},{id:12,name:"Ph\u01b0\u01a1ng ch\xednh",from:"Spain",img:"/images/avatar/love.png",status:"Error"},{id:13,name:"C\u1ef1 d\u01b0\u01a1ng ti\xean t\xf4n",from:"Arica",img:"/images/avatar/pain.png",status:"Warning"},{id:14,name:"V\xf4 c\u1ef1c \u0111\u1ea1o",from:"Arica",img:"/images/avatar/panda.png",status:"Success"},{id:15,name:"Tr\xe1c h\xe0n",from:"Arica",img:"/images/avatar/screaming.png",status:"Warning"},{id:16,name:"T\xe0n d\u01b0\u01a1ng",from:"Arica",img:"/images/avatar/sick.png",status:"Error"}]),t=Object(r.a)(n,1)[0];return Object(j.jsxs)("div",{className:"friends",children:[Object(j.jsxs)("ul",{className:"absolute-md",children:[Object(j.jsx)("span",{className:"connected",children:"B\u1ea1n b\xe8"}),t.map((function(e){return Object(j.jsx)(A,{user:e},e.id)}))]}),Object(j.jsxs)("form",{className:"search absolute-md",children:[Object(j.jsx)("button",{className:"button",children:Object(j.jsx)(m.l,{})}),Object(j.jsx)("input",{className:"input-search",type:"input",placeholder:"T\xecm b\u1ea1n b\xe8 c\u1ee7a b\u1ea1n"})]})]})};t(38);var D=function(e){return Object(j.jsxs)("div",{className:"wapper",children:[Object(j.jsx)(N,{}),Object(j.jsx)(F,{}),Object(j.jsx)(E,{})]})};t(39),t(40);var W=function(e){return Object(j.jsxs)("div",{className:"header-mobile flex",children:[Object(j.jsx)("button",{className:"btn-list",children:Object(j.jsx)("span",{children:Object(j.jsx)(g.f,{})})}),Object(j.jsxs)("a",{href:"/",className:"home",children:[Object(j.jsx)("img",{src:"/ghiennhac/images/avatar/cry.png",alt:""}),Object(j.jsx)("span",{children:"MP5 Zing"})]}),Object(j.jsxs)("div",{className:"setting",children:[Object(j.jsx)("label",{className:"btn-setting",htmlFor:"openMenu-setting",children:Object(j.jsx)("span",{children:Object(j.jsx)(m.e,{})})}),Object(j.jsx)("input",{type:"checkbox",id:"openMenu-setting"}),Object(j.jsx)("div",{className:"profile-mobile",children:Object(j.jsx)(O,{})})]})]})};var H=function(){return Object(j.jsx)("div",{className:"App",style:{overflow:"hidden"},children:Object(j.jsxs)(o,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(W,{}),Object(j.jsx)(D,{})]})})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(n){var t=n.getCLS,s=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),s(e),a(e),c(e),i(e)}))};t(41);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root")),B()}]),[[42,1,2]]]);
//# sourceMappingURL=main.e5cd5acc.chunk.js.map