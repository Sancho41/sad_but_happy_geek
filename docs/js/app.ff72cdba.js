(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"05d7":function(e,t,n){},"21bb":function(e,t,n){"use strict";var a=n("2dad"),o=n.n(a);o.a},2675:function(e,t,n){},2816:function(e,t,n){"use strict";var a=n("2675"),o=n.n(a);o.a},"2dad":function(e,t,n){},4374:function(e,t,n){"use strict";var a=n("ff4c"),o=n.n(a);o.a},"46f5":function(e,t,n){var a={"./001-happy.svg":"89b0","./002-laughing.svg":"f24b","./003-crying.svg":"9423","./008-disappointed.svg":"932d","./035-happy-2.svg":"b9ca","./040-thinking-1.svg":"7e73"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="46f5"},"71d5":function(e,t,n){"use strict";var a=n("e1ba"),o=n.n(a);o.a},"7e73":function(e,t,n){e.exports=n.p+"img/040-thinking-1.bc172c69.svg"},"89b0":function(e,t,n){e.exports=n.p+"img/001-happy.1d919717.svg"},"932d":function(e,t,n){e.exports=n.p+"img/008-disappointed.481c2da8.svg"},9423:function(e,t,n){e.exports=n.p+"img/003-crying.f6d986ae.svg"},"96d0":function(e,t,n){"use strict";var a=n("05d7"),o=n.n(a);o.a},b91c:function(e,t,n){"use strict";var a=n("c232"),o=n.n(a);o.a},b9ca:function(e,t,n){e.exports=n.p+"img/035-happy-2.b4bcfae3.svg"},c1c3:function(e,t,n){},c232:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,o,r,i,s,c,u,l,p,f,h,d,b,v,m,j,k,g,y,O,_=n("2b0e"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:"background-color: "+e.color,attrs:{id:"app"}},[n("Geek"),n("router-view")],1)},$=[],x=(n("99af"),n("e439"),n("d4ec")),C=n("bee2"),J=n("257e"),H=n("262e"),S=n("2caf"),I=n("ade3"),M=n("63ae"),P=n("2fe1"),T=n("60a3"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"geek",class:e.readingJoke?"geek-modal":"",attrs:{id:"geek"}},[a("span",{ref:"emoji",staticClass:"emoji"},[a("transition",{attrs:{name:"fade"}},[a("img",{key:e.emotion.filename,staticClass:"emoji-enter emoji-image",attrs:{src:n("46f5")("./"+e.emotion.filename),filename:e.emotion.filename,alt:e.emotion.alt}})])],1)])},N=[],D=n("b85c"),G=[{filename:"003-crying.svg",alt:"Crying emoji face"},{filename:"008-disappointed.svg",alt:"Sad emoji face"},{filename:"040-thinking-1.svg",alt:"Neutral emoji face"},{filename:"001-happy.svg",alt:"Small smile emoji face"},{filename:"035-happy-2.svg",alt:"Smile emoji face"},{filename:"002-laughing.svg",alt:"Laughing emoji face"}],A=Object(P["b"])((o=function(e){Object(H["a"])(n,e);var t=Object(S["a"])(n);function n(){var e;Object(x["a"])(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o)),Object(I["a"])(Object(J["a"])(e),"emotions",[]),e}return Object(C["a"])(n,[{key:"created",value:function(){var e,t=Object(D["a"])(G);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.emotions.push(n)}}catch(a){t.e(a)}finally{t.f()}}},{key:"readingJoke",get:function(){return this.$store.state.readingJoke}},{key:"happiness",get:function(){return this.$store.state.happiness}},{key:"emotion",get:function(){var e=this.happiness,t=Math.floor(e/20);return this.emotions[t]}}]),n}(_["a"]),a=o))||a,L=A,R=(n("4374"),n("2877")),U=Object(R["a"])(L,E,N,!1,null,"0dab9772",null),q=U.exports,B=(r=Object(P["b"])({components:{Geek:q}}),i=Object(T["a"])("happiness"),r((u=function(e){Object(H["a"])(n,e);var t=Object(S["a"])(n);function n(){var e;Object(x["a"])(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o)),Object(I["a"])(Object(J["a"])(e),"colors",["#ff4d4d","#ffaf40","#fffa65","#7efff5","#18dcff","#32ff7e"]),Object(I["a"])(Object(J["a"])(e),"emotions",["😩","😞","😑","😏","😁","😂"]),Object(I["a"])(Object(J["a"])(e),"color",e.colors[2]),e}return Object(C["a"])(n,[{key:"happinessChange",value:function(e){var t=Math.floor(e/20);document.title="Geek - ".concat(this.emotions[t]);var n=this.colors[t],a=document.querySelector('[name="theme-color"]');a&&a.setAttribute("content",n),this.color=n}},{key:"happiness",get:function(){return this.$store.state.happiness}}]),n}(_["a"]),c=u,Object(M["a"])(c.prototype,"happinessChange",[i],Object.getOwnPropertyDescriptor(c.prototype,"happinessChange"),c.prototype),s=c))||s),F=B,z=(n("b91c"),Object(R["a"])(F,w,$,!1,null,"30d6377f",null)),K=z.exports,Q=n("8c4f"),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"},on:{click:function(t){return e.$router.push({name:"HelpTheGeek"})}}},[e._m(0),n("button",{staticClass:"button-title"},[e._v("- Oh, hello! How you doing?")])])},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("- Hello, friend.")]),n("h2",[e._v("- I'm Geek.")])])}],X=(l=Object(P["b"])(),l(p=function(e){Object(H["a"])(n,e);var t=Object(S["a"])(n);function n(){return Object(x["a"])(this,n),t.apply(this,arguments)}return Object(C["a"])(n,[{key:"created",value:function(){this.$store.dispatch("makeItNeutral"),this.$store.dispatch("readingJoke",!1)}},{key:"happiness",get:function(){return this.$store.state.happiness}}]),n}(_["a"]))||p),Y=X,Z=(n("21bb"),Object(R["a"])(Y,V,W,!1,null,null,null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"help-the-geek"},on:{click:function(t){return e.$router.push({name:"Happiness"})}}},[n("h1",{staticClass:"title"},[e._v("- I'm so sad!")]),n("button",{staticClass:"button-title"},[e._v("- Don't be sad! I will tell you a joke!")])])},ne=[],ae=Object(P["b"])(f=function(e){Object(H["a"])(n,e);var t=Object(S["a"])(n);function n(){return Object(x["a"])(this,n),t.apply(this,arguments)}return Object(C["a"])(n,[{key:"created",value:function(){this.$store.dispatch("makeItSad"),this.$store.dispatch("readingJoke",!1)}}]),n}(_["a"]))||f,oe=ae,re=(n("71d5"),Object(R["a"])(oe,te,ne,!1,null,"e8ab24ca",null)),ie=re.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"happiness"}},[e.error?n("span",{staticClass:"title"},[n("h1",[e._v("- OH, NO!")]),n("h2",[e._v("- I could't find any joke...")])]):e._e(),e.error?n("button",{staticClass:"button-title",on:{click:function(t){return e.$router.push({name:"Home"})}}},[e._v("Try again!")]):e._e(),n("Modal",{ref:"modal",on:{"another-joke":function(t){return e.anotherJoke()},leave:function(t){return e.leave()}},model:{value:e.joke,callback:function(t){e.joke=t},expression:"joke"}})],1)},ce=[],ue=(n("d3b7"),n("96cf"),n("1da1")),le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.joke?n("div",{attrs:{id:"modal"}},[n("div",{ref:"jokeContainer",staticClass:"joke-container",on:{scroll:e.setHappiness}},[n("p",{staticClass:"joke"},[e._v(e._s(e.joke))]),e.joke?n("span",{staticClass:"footer"},[n("h1",[e._v("- Thank you!🎉")]),n("h2",[e._v("- I'm happy again!🎆")]),n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"buttons",style:"opacity:"+(100==e.happiness?1:0)+";"},[n("button",{on:{click:e.closeModal}},[e._v("Leave")]),n("button",{on:{click:function(t){return e.$emit("another-joke")}}},[e._v("Read another joke")])])])],1):e._e()])]):e._e()])},pe=[],fe=(h=Object(P["b"])({props:{value:String}}),d=Object(T["a"])("value"),h((m=function(e){Object(H["a"])(n,e);var t=Object(S["a"])(n);function n(){var e;Object(x["a"])(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o)),Object(I["a"])(Object(J["a"])(e),"name","Modal"),Object(I["a"])(Object(J["a"])(e),"joke",e.value),e}return Object(C["a"])(n,[{key:"valueChange",value:function(e){this.joke=e}},{key:"closeModal",value:function(){this.joke="",this.$emit("leave")}},{key:"scrollPercent",value:function(e){var t=e.clientHeight,n=e.scrollHeight-t,a=e.scrollTop,o=Math.floor(a/n*100);return o}},{key:"setHappiness",value:function(e){var t=this.scrollPercent(e.target),n=10*Math.floor(t/10);n>this.happiness&&this.$store.dispatch("setHappiness",n)}},{key:"happiness",get:function(){return this.$store.state.happiness}}]),n}(_["a"]),v=m,Object(M["a"])(v.prototype,"valueChange",[d],Object.getOwnPropertyDescriptor(v.prototype,"valueChange"),v.prototype),b=v))||b),he=fe,de=(n("2816"),Object(R["a"])(he,le,pe,!1,null,"3988df1c",null)),be=de.exports,ve=(j=Object(P["b"])({components:{Modal:be}}),k=Object(T["a"])("joke"),j((O=function(e){Object(H["a"])(n,e);var t=Object(S["a"])(n);function n(){var e;Object(x["a"])(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o)),Object(I["a"])(Object(J["a"])(e),"joke",""),Object(I["a"])(Object(J["a"])(e),"error",!1),e}return Object(C["a"])(n,[{key:"created",value:function(){this.$store.dispatch("makeItSad"),this.loadJoke()}},{key:"loadJoke",value:function(){var e=Object(ue["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t="https://geek-jokes.sameerkumar.website/api?format=json",e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,this.joke=a.joke,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.error=!0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"anotherJoke",value:function(){this.joke="",this.loadJoke(),this.$store.dispatch("makeItSad")}},{key:"leave",value:function(){var e=this;this.joke="",setTimeout((function(){e.$router.push({name:"Home"})}),2e3)}},{key:"onJokeChange",value:function(e){this.$store.dispatch("readingJoke",Boolean(e))}},{key:"happiness",get:function(){return this.$store.state.happiness}}]),n}(_["a"]),y=O,Object(M["a"])(y.prototype,"onJokeChange",[k],Object.getOwnPropertyDescriptor(y.prototype,"onJokeChange"),y.prototype),g=y))||g),me=ve,je=(n("96d0"),Object(R["a"])(me,se,ce,!1,null,"28b2fb2c",null)),ke=je.exports;_["a"].use(Q["a"]);var ge=[{path:"/",name:"Home",component:ee},{path:"/help-the-geek",name:"HelpTheGeek",component:ie},{path:"/happiness",name:"Happiness",component:ke}],ye=new Q["a"]({mode:"history",base:"",routes:ge}),Oe=ye,_e=n("2f62");_["a"].use(_e["a"]);var we=new _e["a"].Store({state:{happiness:50,readingJoke:!1},mutations:{setHappiness:function(e,t){e.happiness<100&&(e.happiness=t)},makeItSad:function(e){e.happiness=0},makeItNeutral:function(e){e.happiness=50},readingJoke:function(e,t){e.readingJoke=t}},actions:{setHappiness:function(e,t){e.commit("setHappiness",t)},makeItSad:function(e){e.commit("makeItSad")},makeItNeutral:function(e){e.commit("makeItNeutral")},readingJoke:function(e,t){e.commit("readingJoke",t)}}});n("c1c3");_["a"].config.productionTip=!1,new _["a"]({router:Oe,store:we,render:function(e){return e(K)}}).$mount("#app")},e1ba:function(e,t,n){},f24b:function(e,t,n){e.exports=n.p+"img/002-laughing.ac3ceebb.svg"},ff4c:function(e,t,n){}});
//# sourceMappingURL=app.ff72cdba.js.map