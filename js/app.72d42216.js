(function(t){function e(e){for(var o,i,u=e[0],a=e[1],l=e[2],d=0,b=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);s&&s(e);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,u=1;u<n.length;u++){var a=n[u];0!==r[a]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},c=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"100d":function(t,e,n){},"4a35":function(t,e,n){"use strict";n("6fea")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(t,e,n,r,c,i){var u=Object(o["i"])("EnergyCalculator"),a=Object(o["i"])("RankedTracker");return Object(o["f"])(),Object(o["c"])(o["a"],null,[Object(o["e"])(u),Object(o["e"])(a)],64)}var c=function(t){return Object(o["h"])("data-v-3d0a0d6c"),t=t(),Object(o["g"])(),t},i=c((function(){return Object(o["d"])("img",{src:"https://zonaxie.com/img/energy1.svg",alt:""},null,-1)})),u={class:"controls"};function a(t,e,n,r,c,a){var l=Object(o["i"])("Button");return Object(o["f"])(),Object(o["c"])(o["a"],null,[i,Object(o["d"])("p",null,"Rounds "+Object(o["j"])(c.round),1),Object(o["d"])("p",null,Object(o["j"])(c.counter)+" / 10",1),Object(o["d"])("div",u,[Object(o["e"])(l,{onClick:a.subsOne,text:"-1 Energy"},null,8,["onClick"]),Object(o["e"])(l,{onClick:a.addOne,text:"+1 Energy"},null,8,["onClick"]),Object(o["e"])(l,{onClick:a.nextRound,text:"Next Round"},null,8,["onClick"]),Object(o["e"])(l,{onClick:a.newGame,text:"New Game"},null,8,["onClick"])])],64)}function l(t,e,n,r,c,i){return Object(o["f"])(),Object(o["c"])("button",{onMouseover:e[0]||(e[0]=function(){return i.changeStyle&&i.changeStyle.apply(i,arguments)})},Object(o["j"])(n.text),33)}var s={name:"Button",props:{text:String},methods:{changeStyle:function(){}}},d=(n("b5ed"),n("d959")),b=n.n(d);const p=b()(s,[["render",l],["__scopeId","data-v-0d8beadb"]]);var f=p,j={name:"EnergyCalculator",components:{Button:f},data:function(){return{round:1,counter:3}},methods:{addOne:function(){this.counter<10?this.counter++:this.counter},subsOne:function(){this.counter>0&&this.counter--},nextRound:function(){this.round++,this.counter+=2,this.counter>=10&&(this.counter=10)},newGame:function(){this.round=1,this.counter=3}}};n("bdcd");const O=b()(j,[["render",a],["__scopeId","data-v-3d0a0d6c"]]);var h=O,v=function(t){return Object(o["h"])("data-v-89cedcba"),t=t(),Object(o["g"])(),t},m=v((function(){return Object(o["d"])("label",{for:"trophies"},"Thropies +/- ",-1)})),w=v((function(){return Object(o["d"])("br",null,null,-1)})),g={class:"container"},y=v((function(){return Object(o["d"])("label",{for:"total-trophies"},"Current Trophies",-1)})),k=v((function(){return Object(o["d"])("br",null,null,-1)})),x=v((function(){return Object(o["d"])("img",{src:"https://www.pinclipart.com/picdir/big/355-3556122_4-succeed-vector-trophy-icon-png-clipart.png",alt:""},null,-1)})),C={class:"container"};function _(t,e,n,r,c,i){var u=Object(o["i"])("Button");return Object(o["f"])(),Object(o["c"])(o["a"],null,[Object(o["d"])("form",{onSubmit:e[1]||(e[1]=Object(o["m"])((function(){}),["prevent"])),action:""},[m,w,Object(o["l"])(Object(o["d"])("input",{id:"trophies",type:"number","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.trophies=t})},null,512),[[o["k"],c.trophies,void 0,{number:!0}]]),Object(o["d"])("div",g,[Object(o["e"])(u,{onClick:i.addWin,text:"Add Win"},null,8,["onClick"]),Object(o["e"])(u,{onClick:i.addDraw,text:"Draw"},null,8,["onClick"]),Object(o["e"])(u,{onClick:i.addLose,text:"Add Lose"},null,8,["onClick"])])],32),y,k,Object(o["l"])(Object(o["d"])("input",{class:"total-trophies",id:"total-trophies","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.totalTrophies=t})},null,512),[[o["k"],c.totalTrophies,void 0,{number:!0}]]),x,Object(o["d"])("div",C,[Object(o["d"])("p",null,"Wins: "+Object(o["j"])(c.wins),1),Object(o["d"])("p",null,"Draws: "+Object(o["j"])(c.draws),1),Object(o["d"])("p",null,"Loses: "+Object(o["j"])(c.loses),1)]),Object(o["d"])("p",null,"Win Rate "+Object(o["j"])(i.winrate)+"%",1)],64)}n("b680");var T={data:function(){return{winned:0,lost:0,trophies:0,totalTrophies:0,wins:0,loses:0,draws:0}},components:{Button:f},methods:{addWin:function(){this.totalTrophies+=this.trophies,this.wins++},addLose:function(){this.totalTrophies-=this.trophies,this.loses++},addDraw:function(){this.draws++}},computed:{winrate:function(){return 0===this.loses&&0===this.wins?0:(this.wins/(this.wins+this.loses)*100).toFixed(2)}}};n("a6cb");const S=b()(T,[["render",_],["__scopeId","data-v-89cedcba"]]);var P=S,R={name:"App",components:{EnergyCalculator:h,RankedTracker:P}};n("4a35");const B=b()(R,[["render",r]]);var E=B;Object(o["b"])(E).mount("#app")},"6fea":function(t,e,n){},"9b8d":function(t,e,n){},a081:function(t,e,n){},a6cb:function(t,e,n){"use strict";n("9b8d")},b5ed:function(t,e,n){"use strict";n("100d")},bdcd:function(t,e,n){"use strict";n("a081")}});
//# sourceMappingURL=app.72d42216.js.map