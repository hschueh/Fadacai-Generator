(function(t){function n(n){for(var r,o,i=n[0],u=n[1],c=n[2],d=0,f=[];d<i.length;d++)o=i[d],s[o]&&f.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,i=1;i<e.length;i++){var u=e[i];0!==s[u]&&(r=!1)}r&&(a.splice(n--,1),t=o(o.s=e[0]))}return t}var r={},s={app:0},a=[];function o(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var l=u;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),s=e.n(r);s.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"bg"}},[e("css-doodle",[t._v("\n      :doodle { @grid: 5/ 100vw 100vh; background: transparent; }\n      background-image: url(./img/m0@pick(1, 2, 3, 4).png);\n      background-size:contain; background-repeat:no-repeat; position:\n      absolute; @size: 10em; @place-cell: @rand(0, 20)% -20vh; left:\n      @rand(-100, 100)%; animation: move 5s linear @rand(0, 7)s infinite;\n      @keyframes move { 0% { transform: translateX( @rand(-10,-10)vw )\n      translateY(0vh) rotate(@rand(0, 72)deg); } 25% { transform: translateX(\n      @rand(-10,-10)vw ) translateY(35vh) rotate(@rand(73, 144)deg); } 50% {\n      transform: translateX( @rand(-10,-10)vw ) translateY(70vh)\n      rotate(@rand(145, 216)deg); } 75% { transform: translateX(\n      @rand(-10,-10)vw ) translateY(105vh) rotate(@rand(217, 288)deg); }\n      99.99% { transform: translateX( @rand(-10,-10)vw ) translateY(140vh)\n      rotate(@rand(289, 360)deg); } 100% { transform: translateX(\n      @rand(-10,-10)vw ) translateY(0vh) rotate(0deg); } }\n    ")])],1),e("router-view"),e("div",{staticClass:"text-center"},[e("gh-btns-watch",{attrs:{slug:"rogeraabbccdd/Fadacai-Generator","show-count":""}}),e("gh-btns-star",{attrs:{slug:"rogeraabbccdd/Fadacai-Generator","show-count":""}}),e("gh-btns-fork",{attrs:{slug:"rogeraabbccdd/Fadacai-Generator","show-count":""}})],1)],1)},a=[],o=(e("1054"),e("3a06"),{}),i=o,u=(e("034f"),e("2877")),c=Object(u["a"])(i,s,a,!1,null,null,null),l=c.exports,d=e("8c4f"),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-12 mb-3"},[e("playquery",{attrs:{sounds:t.sounds,query:t.query,sids:t.sids}})],1),e("hr"),e("div",{staticClass:"col-12 my-3"},[e("soundbtns",{attrs:{sounds:t.sounds}})],1)])])},h=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"col-12"},[r("img",{staticClass:"w-100",attrs:{src:e("6104"),id:"title"}})])}],v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",{attrs:{title:"已排序聲音","sub-title":"點按按鈕可以移除已排序的聲音"}},[e("hr"),e("p",{directives:[{name:"show",rawName:"v-show",value:0==t.snds.length,expression:"snds.length == 0"}],staticStyle:{color:"#ccc"}},[t._v("請先在下方選擇音檔")]),e("draggable",t._b({on:{start:function(n){t.dragging=!0},end:function(n){t.dragging=!1}},model:{value:t.snds,callback:function(n){t.snds=n},expression:"snds"}},"draggable",t.dragOptions,!1),[e("transition-group",t._l(t.snds,function(n,r){return e("b-button",{key:r+0,staticClass:"m-1",attrs:{variant:"success"},on:{click:function(n){return t.remove(r)}}},[t._v(t._s(n.name))])}),1)],1),e("hr"),e("b-button",{ref:"btnPlay",staticClass:"m-1",attrs:{variant:"primary"},on:{click:function(n){return t.play()}}},[t._v("播放")]),e("b-button",{ref:"btnStop",staticClass:"m-1",attrs:{variant:"warning"},on:{click:function(n){return t.stop()}}},[t._v("停止")]),e("b-button",{staticClass:"m-1",attrs:{variant:"success"},on:{click:function(n){return t.getUrl()}}},[t._v("匯出")]),e("b-button",{staticClass:"m-1",attrs:{variant:"info"},on:{click:function(n){return t.downloadFile()}}},[t._v("下載")]),e("b-button",{staticClass:"m-1",attrs:{variant:"danger"},on:{click:function(n){return t.removeAll()}}},[t._v("清空")])],1)},p=[],g=(e("28a5"),e("7f7f"),e("75fc")),b=e("32f0"),m=e.n(b),y=e("1980"),w=e.n(y),_=-1,k=!1,C={name:"query",components:{draggable:w.a},props:{sounds:Array,query:String,sids:String},data:function(){var t=[];return{snds:t}},methods:{open:function(t,n){n.preventDefault()},play:function(){var t=this;if(this.snds.length>0){k=!0,_=0,this.$refs.btnPlay.setAttribute("disabled","true");var n=new Audio(this.snds[_].file);n.play(),n.onended=function(){_++,_<t.snds.length&&k?(n.src=t.snds[_].file,n.play()):(_=-1,k=!1,t.$refs.btnPlay.removeAttribute("disabled"))}}},stop:function(){_=-1,k=!1,this.$refs.btnPlay.removeAttribute("disabled")},getUrl:function(){for(var t="",n=0;n<this.snds.length;n++)t=t+this.snds[n].id+",";t=t.substr(0,t.length-1),this.$router.push({name:"home",query:{sids:t}}),alert("匯出成功，可使用目前網址分享你的創作")},downloadFile:function(){var t=this.snds.map(function(t){return t.file}),n=new m.a;n.fetchAudio.apply(n,Object(g["a"])(t)).then(function(t){return n.concatAudio(t)}).then(function(t){return n.export(t,"audio/mp3")}).then(function(t){return n.download(t.blob,"fadacai")}).catch(function(t){throw new Error(t)})},remove:function(t){-1==_&&this.snds.splice(t,1)},removeAll:function(){this.snds=[]}},mounted:function(){var t=this;Q.$on("addSound",function(n){for(var e=-1,r=0;r<t.sounds.length;r++)if(n==t.sounds[r].id){e=r;break}e>-1&&t.snds.push({file:t.sounds[e].file,name:t.sounds[e].name,id:t.sounds[e].id})})},computed:{dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}},watch:{sounds:function(t){if(void 0!=this.sids&&this.sids.length>0){var n=this.sids.split(",");if(n.length>0)for(var e=0;e<n.length;e++){for(var r=-1,s=0;s<t.length;s++){var a=t[s].id;if(a==n[e]){r=s;break}}r>-1&&this.snds.push({file:t[r].file,name:t[r].name,id:t[r].id})}}else if(void 0!=this.query&&this.query.length>0){var o=this.query.split(",");if(o.length>0)for(var i=0;i<o.length;i++){for(var u=-1,c=0;i<t.length;c++){var l=t[c].name;if(l==o[i]){u=c;break}}u>-1&&this.snds.push({file:t[u].file,name:t[u].name,id:t[u].id})}}}}},O=C,j=Object(u["a"])(O,v,p,!1,null,null,null),x=j.exports,$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",{attrs:{title:"所有聲音","sub-title":""}},[e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 my-2"},[e("b-form-input",{attrs:{placeholder:"搜索聲音..."},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}})],1),e("div",{staticClass:"col-12 my-2"},t._l(this.filtered,function(n,r){return e("b-button",{key:r,staticClass:"m-1",attrs:{variant:"success"},on:{click:function(e){return t.add(n.id)}}},[t._v(t._s(n.name))])}),1)])])},q=[],A=(e("386d"),e("6762"),e("2fdb"),{name:"sounds",props:{sounds:Array},data:function(){var t="";return{search:t}},methods:{add:function(t){Q.$emit("addSound",t)}},computed:{filtered:function(){var t=this;return this.sounds.filter(function(n){return n.name.includes(t.search)})}}}),S=A,P=Object(u["a"])(S,$,q,!1,null,null,null),E=P.exports,F="soundList.json",X={name:"home",components:{playquery:x,soundbtns:E},data:function(){var t=this.$route.query.sounds,n=this.$route.query.sids,e=[];return{query:t,sounds:e,sids:n}},created:function(){var t=this;this.$http.get(F).then(function(n){t.sounds=n.data.sounds})}},Y=X,M=Object(u["a"])(Y,f,h,!1,null,null,null),N=M.exports;r["default"].use(d["a"]);var T=new d["a"]({routes:[{path:"/*",name:"home",component:N}]}),G=e("9483");Object(G["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var U=e("9f7b"),z=e.n(U),B=(e("f9e3"),e("2dd8"),e("bc3a")),J=e.n(B),L=e("a7fe"),D=e.n(L),H=e("f676"),I=e("0284"),K=e.n(I);e.d(n,"eventBus",function(){return Q}),r["default"].use(z.a),r["default"].use(D.a,J.a),r["default"].use(H["a"],{useCache:!0}),r["default"].use(K.a,{id:"UA-131804412-7",router:T,autoTracking:{pageviewOnLoad:!1}}),r["default"].config.productionTip=!1;var Q=new r["default"];new r["default"]({router:T,render:function(t){return t(l)}}).$mount("#app")},6104:function(t,n,e){t.exports=e.p+"img/title.a0f22ec8.png"},"64a9":function(t,n,e){}});
//# sourceMappingURL=app.a0a45502.js.map