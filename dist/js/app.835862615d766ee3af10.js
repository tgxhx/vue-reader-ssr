webpackJsonp([5],{15:function(t,n,o){"use strict";var e={StorageGetter:function(t){return JSON.parse(localStorage.getItem(t))},StorageSetter:function(t,n){return localStorage.setItem(t,JSON.stringify(n))}};n.a=e},16:function(t,n,o){"use strict";function e(){return new _.a({mode:"history",fallback:!1,scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:function(){return o.e(1).then(o.bind(null,105))}},{path:"/bookdetail/:id",name:"bookdetail",component:function(){return o.e(2).then(o.bind(null,106))}},{path:"/category",name:"category",component:function(){return o.e(3).then(o.bind(null,107))}},{path:"/reader/:id/:chapter?",name:"reader",component:function(){return o.e(0).then(o.bind(null,108))}}]})}function i(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get";return new Promise(function(o,e){var i={method:n,url:t};S()(i).then(function(t){o(200===t.status?t.data:t)}).catch(function(t){console.error(t),e(t)})})}function c(){var t={index:++T,bar:!1,font_panel:!1,font_icon:!1,bg_color:1,bg_night:!1,fz_size:18,curChapter:1,windowHeight:"",list_panel:!1,curBookDetailId:1,curBookContentId:1,abc:[],bookList:[],bookDetail:{},bookRelative:[],categoryList:[],bookContent:{title:"",content:[],chapterList:[]}};return new d.a.Store({state:t,mutations:k,actions:E})}Object.defineProperty(n,"__esModule",{value:!0});var u=o(1),a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[o("router-view",{staticClass:"view"})],1)},f=[],l={},s=l,p=(o(19),o(13)),m=Object(p.a)(s,a,f,!1,null,null,null),h=m.exports,_=o(20);u.default.use(_.a);var b,d=o(14),k=(b={},i(b,"TOGGLE_BAR",function(t){t.bar=!t.bar}),i(b,"SHOW_LIST_PANEL",function(t){t.list_panel=!t.list_panel}),i(b,"SHOW_FONT_PANEL",function(t){t.font_panel=!t.font_panel}),i(b,"FZ_SIZE_ADD",function(t){++t.fz_size>=24&&(t.fz_size=24)}),i(b,"FZ_SIZE_SUB",function(t){--t.fz_size<=14&&(t.fz_size=14)}),i(b,"SWITCH_NIGHT",function(t){t.bg_night=!t.bg_night}),i(b,"PREV_CHAPTER",function(t){if(t.curChapter<=1)return!1;t.curChapter--}),i(b,"NEXT_CHAPTER",function(t,n){if(t.curChapter>=n)return!1;t.curChapter++}),i(b,"CHOOSE_BOOK",function(t,n){t.curBookDetailId=n}),i(b,"SHOW_BOOK_DETAIL",function(t,n){t.bookDetail=n}),i(b,"CUR_CHAPTER",function(t,n){t.curChapter=n}),i(b,"setBooklist",function(t,n){t.bookList=n}),i(b,"setBookDetail",function(t,n){t.bookDetail=n}),i(b,"setBookRelative",function(t,n){t.bookRelative=n}),i(b,"setBookCategory",function(t,n){t.categoryList=n}),i(b,"setBookContent",function(t,n){t.bookContent=Object.assign({},t.bookContent,n)}),b),g=o(4),S=o.n(g),C=o(5),v=function(){return r(C.a+"/booklist")},y=function(t){return r(C.a+"/booklist?id="+t)},B=function(t){return r(C.a+"/type?type="+t)},O=function(t,n){return r(C.a+"/book?book="+t+"&id="+n)},E={toggleBar:function(t){(0,t.commit)("TOGGLE_BAR")},showListPanel:function(t){(0,t.commit)("SHOW_LIST_PANEL")},showFontPanel:function(t){(0,t.commit)("SHOW_FONT_PANEL")},fzSizeAdd:function(t){(0,t.commit)("FZ_SIZE_ADD")},fzSizeSub:function(t){(0,t.commit)("FZ_SIZE_SUB")},switchNight:function(t){(0,t.commit)("SWITCH_NIGHT")},prevChapter:function(t){(0,t.commit)("PREV_CHAPTER")},nextChapter:function(t){(0,t.commit)("NEXT_CHAPTER",t.maxChapter)},chooseBook:function(t,n){(0,t.commit)("CHOOSE_BOOK",n)},showBookDetail:function(t,n){(0,t.commit)("SHOW_BOOK_DETAIL",n)},curChapter:function(t,n){(0,t.commit)("CUR_CHAPTER",n)},getBooklist:function(t){var n=t.commit;return v().then(function(t){n("setBooklist",t)})},getBookDetail:function(t,n){var o=t.commit;t.dispatch;return y(n).then(function(t){o("setBookDetail",t);var n=t.like.split("-"),e=n.map(function(t){return y(t)});return Promise.all(e)}).then(function(t){o("setBookRelative",t)})},getBookRelative:function(t,n){t.commit},getBookCategory:function(t,n){var o=t.commit;return B(n).then(function(t){o("setBookCategory",t)})},getBookContent:function(t,n){var o=t.commit,e=(t.dispatch,n.id),i=n.chapter;return O(e,i).then(function(t){o("setBookContent",{title:t.title,content:t.content.split("-")})}).catch(function(t){console.log(t)})}};o(15);u.default.use(d.a);var T=0,I=o(39),w=o(40),A=o.n(w);o(44),o(45);u.default.use(C.b),u.default.use(A.a),u.default.mixin({beforeRouteUpdate:function(t,n,o){var e=this.$options.asyncData;e?e({store:this.$store,route:t}).then(o).catch(o):o()}});var R=function(){var t=e(),n=c();return Object(I.sync)(n,t),{app:new u.default({router:t,store:n,render:function(t){return t(h)}}),router:t,store:n}}(),H=R.app,P=R.router,L=R.store;window.__INITIAL_STATE__&&L.replaceState(window.__INITIAL_STATE__),P.onReady(function(){P.beforeResolve(function(t,n,o){var e=P.getMatchedComponents(t),i=P.getMatchedComponents(n),r=!1,c=e.filter(function(t,n){return r||(r=i[n]!==t)}),u=c.map(function(t){return t.asyncData}).filter(function(t){return t});if(!u.length)return o();Promise.all(u.map(function(n){return n({store:L,route:t})})).then(function(){o()}).catch(o)}),H.$mount("#app")})},19:function(t,n,o){"use strict";var e=o(7),i=o.n(e);i.a},44:function(t,n){},45:function(t,n){},5:function(t,n,o){"use strict";o.d(n,"a",function(){return i});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="http://localhost:8000/book";i=("object"!==("undefined"==typeof exports?"undefined":e(exports))||void 0===t)&&location.href.indexOf("localhost")>-1?"http://localhost:8000/book":"/book",n.b={install:function(t,n){t.prototype.common={defaultImage:function(t){t.target.src="http://www.zwdu.com/files/article/image/20/20962/20962s.jpg"},api:i}}}},7:function(t,n){}},[16]);
//# sourceMappingURL=app.835862615d766ee3af10.js.map