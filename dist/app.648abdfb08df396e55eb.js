webpackJsonp([3],{12:function(t,e,n){"use strict";function r(){return new p.a({mode:"history",fallback:!1,scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:function(){return n.e(0).then(n.bind(null,50))}},{path:"/about",component:function(){return n.e(1).then(n.bind(null,51))}}]})}function o(){return new h.a.Store({state:{items:{message:"emmmmmm"},message:"hello world"},actions:{fetchItem:function(t,e){var n=t.commit;return g(e).then(function(t){n("setItem",{id:e,item:t})})},getMessage:function(t){var e=t.commit;return g().then(function(t){e("setMessage",t)})}},mutations:{setItem:function(t,e){var n=e.id,r=e.item;a.a.set(t.items,n,r)},setMessage:function(t,e){t.message=e}}})}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1)],1)},u=[],s={},c=s,f=(n(15),n(11)),m=Object(f.a)(c,i,u,!1,null,null,null),l=m.exports,p=n(16);a.a.use(p.a);var h=n(17),d=n(18),v=n.n(d);a.a.use(h.a);var g=function(t){return new Promise(function(t){v.a.get("https://cnodejs.org/api/v1/topics").then(function(e){var n=e.data;t(n)})})};n(37);a.a.mixin({beforeRouteUpdate:function(t,e,n){var r=this.$options.asyncData;r?r({store:this.$store,route:t}).then(n).catch(n):n()}});var _=function(){var t=r(),e=o();return{app:new a.a({router:t,store:e,render:function(t){return t(l)}}),router:t,store:e}}(),w=_.app,b=_.router,I=_.store;window.__INITIAL_STATE__&&I.replaceState(window.__INITIAL_STATE__),b.onReady(function(){b.beforeResolve(function(t,e,n){var r=b.getMatchedComponents(t),o=b.getMatchedComponents(e),a=!1,i=r.filter(function(t,e){return a||(a=o[e]!==t)}),u=i.map(function(t){return t.asyncData}).filter(function(t){return t});if(!u.length)return n();Promise.all(u.map(function(e){return e({store:I,route:t})})).then(function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];console.log(e),n()}).catch(n)}),w.$mount("#app")})},15:function(t,e,n){"use strict";var r=n(5),o=n.n(r);o.a},5:function(t,e){}},[12]);