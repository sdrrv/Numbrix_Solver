(function(){"use strict";var t={8634:function(t,e,i){var o=i(144),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{staticStyle:{"background-color":"dimgray"}},[i("v-main",[i("v-row",{staticClass:"text-center my-3"},[i("v-col",{attrs:{cols:"12"}},[i("h1",{staticStyle:{"font-family":"Roboto,serif"}},[t._v("Numbrix Solver")])])],1),i("v-row",{staticClass:"text-center my-3"},[i("v-col",{attrs:{cols:"5"}}),i("v-col",{attrs:{cols:"2"}},[i("v-container",{attrs:{elevation:"8"}},[i("v-row",{staticClass:"text-center my-3"},[i("v-col",{attrs:{cols:"5"}},[i("v-btn",{on:{click:function(e){return t.changeGridSize(-1)}}},[t._v(" "+t._s(t.hello)+" ")])],1),i("v-col",{attrs:{cols:"2"}},[i("h3",[t._v(t._s(t.gridSize))])]),i("v-col",{attrs:{cols:"5"}},[i("v-btn",{on:{click:function(e){return t.changeGridSize(1)}}},[t._v(" > ")])],1)],1)],1)],1),i("v-col",{attrs:{cols:"5"}})],1),i("v-row",{staticClass:"text-center my-3"},[i("v-container",{staticClass:"board",style:"max-width: "+t.getBoardSize()+"%"},t._l(t.gridSize,(function(e){return i("v-row",{key:e},t._l(t.gridSize,(function(o){return i("v-col",{key:o,staticClass:"ma-0 pa-0"},[i("v-container",{staticClass:"lilBoard",style:"0"!==t.matrix[e-1][o-1]?"background-color: darkgrey":"background-color: dimgrey",on:{click:function(i){return t.setPosclicked(e,o)}}},[t._v(" "+t._s(t.matrix[e-1][o-1])+" ")])],1)})),1)})),1)],1),i("v-row",{staticClass:"justify-center my-10"},[i("v-btn",{attrs:{disabled:t.isLoading,loading:t.isLoading},on:{click:t.getData}},[t._v("Submit")])],1)],1),i("v-dialog",{attrs:{"hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-text",[t._v(" Row: "+t._s(this.posClicked.row)+" Col: "+t._s(this.posClicked.col)+" ")]),i("v-text-field",{model:{value:t.newPosValue,callback:function(e){t.newPosValue=e},expression:"newPosValue"}}),i("h1",[t._v(t._s(t.newPosValue))]),i("v-btn",{on:{click:t.insertValue}},[t._v("Submit value")])],1)],1)],1)},n=[],a={name:"App",components:{},data(){return{posClicked:{row:0,col:0},dialog:!1,gridSize:3,hello:"<",newPosValue:"",matrix:[],isLoading:!1}},created(){this.setNewMatrix(this.gridSize)},methods:{getBoardSize(){return 80},changeGridSize(t){this.gridSize+=t,this.gridSize<2&&(this.gridSize=2),this.gridSize>12&&(this.gridSize=12),this.setNewMatrix(this.gridSize)},setPosclicked(t,e){this.dialog=!0,this.posClicked.col=e,this.posClicked.row=t},setNewMatrix(t){this.matrix=new Array(t);for(let e=0;e<t;e++){this.matrix[e]=new Array(t);for(let i=0;i<t;i++)this.matrix[e][i]="0"}},insertValue(){this.matrix[this.posClicked.row-1][this.posClicked.col-1]=this.newPosValue,this.newPosValue="",this.dialog=!1},async getData(){try{this.isLoading=!0;const t={board:this.matrix};console.log(this.matrix);const e=await this.$http.put("https://numbrix-solver.herokuapp.com/solve?boardSize="+this.gridSize,t);console.log(e),this.matrix=e.data}catch(t){console.log(t),alert(t)}alert("IT WORKED!"),this.isLoading=!1}}},s=a,l=i(3736),c=i(3453),u=i.n(c),d=i(7524),v=i(1565),f=i(3237),h=i(7118),g=i(2102),p=i(247),m=i(5049),b=i(1009),y=i(2877),w=i(9793),x=(0,l.Z)(s,r,n,!1,null,null,null),k=x.exports;u()(x,{VApp:d.Z,VBtn:v.Z,VCard:f.Z,VCardText:h.ZB,VCol:g.Z,VContainer:p.Z,VDialog:m.Z,VMain:b.Z,VRow:y.Z,VTextField:w.Z});var S=i(1910);o.Z.use(S.Z);var _=new S.Z({}),C=i(9669),V=i.n(C);o.Z.prototype.$http=V(),o.Z.config.productionTip=!1,new o.Z({vuetify:_,render:t=>t(k)}).$mount("#app")}},e={};function i(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,o,r,n){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],n=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&n||a>=n)&&Object.keys(i.O).every((function(t){return i.O[t](o[l])}))?o.splice(l--,1):(s=!1,n<a&&(a=n));if(s){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[o,r,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,n,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(l)var u=l(i)}for(e&&e(o);c<a.length;c++)n=a[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(u)},o=self["webpackChunknumbrix_solver"]=self["webpackChunknumbrix_solver"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(8634)}));o=i.O(o)})();
//# sourceMappingURL=app.30f854fd.js.map