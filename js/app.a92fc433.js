(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},s={app:0},a=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/DyescapeBingo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"4ef8":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.ready?o("div",{style:e.appStyle,attrs:{id:"app"}},[e.card?e._e():o("div",{staticClass:"card center rounded"},[e._m(0),o("div",{staticClass:"content"},[o("button",{on:{click:e.generateCard}},[e._v("Generate your card")])])]),null!==e.card?o("div",{staticStyle:{display:"flex","flex-direction":"row",height:"100%"}},[o("div",{staticClass:"card "},[o("div",{staticClass:"title"},[o("h1",[e._v("Dyescape "),o("span",{on:{click:function(t){return e.easter(1)}}},[e._v("B")]),o("span",{on:{click:function(t){return e.easter(2)}}},[e._v("i")]),o("span",{on:{click:function(t){return e.easter(3)}}},[e._v("n")]),o("span",{on:{click:function(t){return e.easter(4)}}},[e._v("g")]),o("span",{on:{click:function(t){return e.easter(5)}}},[e._v("o")])])]),o("div",{staticClass:"content"},[o("div",{staticClass:"statContainer",staticStyle:{"margin-bottom":"2rem"}},[e._v("Started At: "),o("span",{staticClass:"stat"},[e._v(e._s(e.formatDate(e.card.started)))])]),e._v(" Found:"),o("br"),o("div",{staticClass:"statContainer"},[e._v("Columns: "),0===e.winstate.cols.length?o("span",{staticClass:"stat"},[e._v("None")]):o("span",{staticClass:"stat"},[e._v(e._s(e.winstate.cols.join(", ")))])]),o("div",{staticClass:"statContainer"},[e._v("Rows: "),0===e.winstate.rows.length?o("span",{staticClass:"stat"},[e._v("None")]):o("span",{staticClass:"stat"},[e._v(e._s(e.winstate.rows.join(", ")))])]),o("div",{staticClass:"statContainer"},[e._v("Full Card: "),o("span",{staticClass:"stat"},[e._v(e._s(e.winstate.fullCard))])]),o("br"),o("br"),o("div",[o("button",{on:{click:e.resetCard}},[e._v("Reset")])]),e.winstate.fullCard?o("textarea",{attrs:{disabled:""},domProps:{value:e.generateJson}}):e._e()])]),o("bingo-card",{attrs:{card:e.card}})],1):e._e()]):e._e()},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"title"},[o("h1",[e._v("Dyescape Bingo")])])}],r=(o("c975"),o("fb6a"),o("0d03"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bingo-card"},[o("div",{staticClass:"titleSpan",staticStyle:{"flex-direction":"column",margin:"5rem 0","margin-right":"1rem"}},[o("div",{on:{click:function(t){return e.$root.$emit("esa",6)}}},[e._v("D")]),o("div",[e._v("E")]),o("div",{on:{click:function(t){return e.$root.$emit("esa",7)}}},[e._v("L")]),o("div",[e._v("A")]),o("div",{on:{click:function(t){return e.$root.$emit("esa",8)}}},[e._v("Y")])]),o("div",[o("div",{staticClass:"titleSpan"},[o("div",{on:{click:function(t){return e.$root.$emit("esa",9)}}},[e._v("D")]),o("div",[e._v("E")]),o("div",[e._v("L")]),o("div",[e._v("A")]),o("div",[e._v("Y")])]),e._l(e.chunk(e.card.card,5),(function(t,n){return o("div",{key:n,staticClass:"row"},e._l(t,(function(t,n){return o("div",{key:n,staticClass:"item",class:{completed:0!=t.completed},on:{click:function(o){return e.completeAction(t,o)}}},[o("div",{staticClass:"phrase"},[e._v(" "+e._s(t.phrase)+" ")])])})),0)})),o("div",{staticClass:"popout",style:e.popout.style},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.popout.boxVal,expression:"popout.boxVal"}],attrs:{type:"text"},domProps:{value:e.popout.boxVal},on:{input:function(t){t.target.composing||e.$set(e.popout,"boxVal",t.target.value)}}}),o("button",{on:{click:e.submitProof}},[e._v("Submit Proof")])])],2)])}),i=[],c={name:"bingo-card",props:["card"],data:function(){return{popout:{style:{left:0,top:0,display:"none"},boxVal:"",card:null}}},methods:{chunk:function(e,t){var o=[],n=0,s=e.length;while(n<s)o.push(e.slice(n,n+=t));return o},completeAction:function(e,t){null===this.popout.card||this.popout.card.index!==e.index||"none"===this.popout.style.display?!1===e.completed&&(this.popout.style={left:t.clientX+"px",top:t.clientY+"px",display:"block"},this.popout.card=e):this.popout.style.display="none"},submitProof:function(){!1===this.popout.card.completed&&(this.popout.boxVal.length<5||(this.popout.card.proof=this.popout.boxVal,this.$root.$emit("completeAction",this.popout.card),this.popout.style.display="none",this.popout.boxVal="",this.popout.card=null))}}},l=c,u=(o("c414"),o("2877")),d=Object(u["a"])(l,r,i,!1,null,"f5c966f8",null),p=d.exports;o("99af");function h(e,t,o){if("Build"===e){var n={background:null,color:null};if(null==o)n.background="#ffcd00",n.color="#000";else switch(o){case"error":n.background="#c0392b",n.color="#fff";break;case"warn":n.background="#d35400",n.color="#fff";break;case"success":n.background="#2ecc71",n.color="#000";break;default:n=o}console.log("%c ".concat(e," %c ").concat(t," "),"background: ".concat(n.background,"; color: ").concat(n.color,"; border-radius: 3px 0 0 3px;"),"background: #333; color: #fff; border-radius: 0 3px 3px 0;")}}var f={methods:{log:h},log:h};function m(e,t){var o=[],n=0,s=e.length;while(n<s)o.push(e.slice(n,n+=t));return o}function g(e){for(var t in e){var o=e[t];if(!1===o.completed)return!1}return!0}var v={name:"app",components:{BingoCard:p},computed:{generateJson:function(){return JSON.stringify(this.card)}},data:function(){return{ready:!1,alert:null,card:null,winstate:{rows:[],cols:[],fullCard:!1},appStyle:{backgroundImage:null},cardChoices:["Choco posts 2 rocket league clips in a day","KingAlter uses :pepe_kek: for the 15th time in a day","Dennis posts some random shit that happened at work","Someone posts a car in #cars that they can't afford and shit on it for no reason","MiniDigger defends a company","Michael yells at Dennis for his piss poor pc choices","Droei eats lasagna for the third time in a week","Someone posts cursed material in a topic related channel","Aekalix posts some nice builds",":dyescape_goodbusy: is used","Welcome or leave messages wont work","Delayscape.com gets an update","WalmartWelcomer.com gets posted","Some dumb Spigot member is mentioned","A person suggests something already implemented","Perotin recruits a member to his guild on join","Someone shits on America","Cooking show happens in #food","KingAlter laughs at something that isn't funny","Jay yells at Dennis for absolutely anything","Stefan posts 3 coubs in a day","Dennis ignores the advice that Michael gives him in #tech and goes to his own conclusion","Zirker rants about maths","Jay welcomes a user","Wiki Team gets called a non staff rank","Someone bullies Jay","Raiding a spigot thread","Someone shits on others code","The #lore channel is used","Some guy posts a cringy gif","Aekalix makes a fancy devlog","Euvrounin false mutes","A dutch person shits on Belgium for no reason","Droei posts lasagna","A delay meme is posted","Michael false mutes","Someone mistakes helper for builder","Someone left because their app got denied","Someone discusses #programming in #general","Someone mentions hytale","Droei brags about his PC","Dennis makes fun of Verstappen","Droei wants to buy more tech","Michael attempts to stop Droei from buying more tech","MiniDigger gets drunk","Dennis uses ShareX","Dennis takes a picture of his monitor instead of screenshotting","Dennis spams :dutch_omega_lul: in one message","Jay calls someones meme bad in #memes","Dennis complains about infrastructure","Pjinky sends a message","Dennis shows his Tekken rank","Michael forgets he's a moderator","KingAlter overly shares a project","A debate about America starts","People start talking Dutch","Mister Erwin makes a pun","Someone donates","Dennis asks someone to donate","Dennis doesn't make a devlog for a week","Wynncraft gets shit on","New guy talks shit about Dyescape and people mob them until they leave","Michael posts pictures of pets outside of pets","Phil says hi","Dennis streams a game","Dennis complains about his Indian peers at work","Dennis starts talking about taking a shit","Choco posts pictures of Creed"]}},methods:{formatDate:function(e){return e.toLocaleString()},easter:function(e){this.appStyle.backgroundImage="url('./img/"+e+".png')"},generateCard:function(){var e=[],t=[],o=0;while(o<25)if(12!==o){var n=Math.floor(Math.random()*this.cardChoices.length);if(-1===e.indexOf(n)){var s=this.cardChoices[n];e.push(n),t.push({id:n,index:t.length,phrase:s,completed:!1,proof:null}),o++}}else t.push({id:-1,index:t.length,phrase:"FREE",completed:!0}),o++;this.card={card:t,started:new Date},this.saveCard()},saveCard:function(){localStorage.setItem("dye-bingoCard",JSON.stringify(this.card))},resetCard:function(){this.card=null,this.winstate={rows:[],cols:[],fullCard:!1},localStorage.removeItem("dye-bingoCard")},completeAction:function(e){this.card.card[e.index].completed=new Date,this.saveCard(),this.winstate=this.findWinStates()},findWinStates:function(){for(var e={rows:[],cols:[],fullCard:!1},t=m(this.card.card,5),o=0;o<t.length;o++){var n=g(t[o]);n&&e.rows.push(o+1)}for(var s=0;s<t.length;s++){for(var a=[],r=0;r<t.length;r++)a.push(t[r][s]);var i=g(a);i&&e.cols.push(s+1)}return 5===e.rows.length&&(e.fullCard=!0),e}},created:function(){if(f.log("Cards","Loaded ".concat(this.cardChoices.length," cards to choose from!"),"success"),!localStorage)return this.alert={type:"danger",message:"Your browser doesn't support LocalStorage, progress wont be saved."},void(this.ready=!0);f.log("Events","Registering...","success"),this.$root.$on("completeAction",this.completeAction),this.$root.$on("saveCard",this.saveCard),this.$root.$on("esa",this.easter),f.log("Events","Registered","success");var e=localStorage.getItem("dye-bingoCard");e&&(this.card=JSON.parse(e),this.card.started=new Date(this.card.started),this.winstate=this.findWinStates()),this.ready=!0}},b=v,y=(o("5c0b"),Object(u["a"])(b,s,a,!1,null,null,null)),k=y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(k)},created:function(){f.log("Build","Running in production mode","warn")}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("9c0c"),s=o.n(n);s.a},"9c0c":function(e,t,o){},c414:function(e,t,o){"use strict";var n=o("4ef8"),s=o.n(n);s.a}});
//# sourceMappingURL=app.a92fc433.js.map