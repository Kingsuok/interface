(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-charts"],{"17c5":function(t,s,a){"use strict";a.r(s);var n,e,i={},l=i,c=a("2877"),r=Object(c["a"])(l,n,e,!1,null,null,null);s["default"]=r.exports},"379e":function(t,s,a){"use strict";a.r(s);var n,e,i={},l=i,c=a("2877"),r=Object(c["a"])(l,n,e,!1,null,null,null);s["default"]=r.exports},"7ba4":function(t,s,a){"use strict";a.r(s);var n,e,i={},l=i,c=a("2877"),r=Object(c["a"])(l,n,e,!1,null,null,null);s["default"]=r.exports},ee23:function(t,s,a){"use strict";a.r(s);var n,e,i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dvs-flex dvs-flex-col dvs-items-center"},[a("div",{staticClass:"dvs-relative",style:{width:t.currentWidth}},[a("doughnut",{attrs:{"chart-data":{datasets:[{data:t.chartData,backgroundColor:[t.theme.panel.color],borderWidth:0}],labels:["",""]},options:t.doughnutOptions}}),a("div",{staticClass:"dvs-absolute dvs-absolute-center dvs-text-lg"},[t._v(t._s(t.yesterday))])],1),a("div",{staticClass:"dvs-mt-4 dvs-text-center dvs-text-xs dvs-uppercase"},[a("strong",[t._v(t._s(t.stat))]),t._v("\n    : "+t._s(t.change)+"%\n    "),a("i",{class:t.changeIcon})])])},l=[],c=a("a4bb"),r=a.n(c),u={},o=u,h=a("2877"),d=Object(h["a"])(o,n,e,!1,null,null,null),v=d.exports,p={computed:{doughnutOptions:function(){return{cutoutPercentage:88,legend:!1}},chartData:function(){var t=r()(this.analytics)[0],s=r()(this.analytics)[1],a=this.analytics[s][this.stat]+this.analytics[t][this.stat],n=this.analytics[s][this.stat]/a,e=this.analytics[t][this.stat]/a;return isNaN(n)&&(n=0),isNaN(e)&&(e=1),n/e>1&&(n=0,e=1),[e,n]},yesterday:function(){var t=r()(this.analytics)[1];return this.analytics[t][this.stat]},change:function(){var t=r()(this.analytics)[0],s=r()(this.analytics)[1],a=Math.round(this.analytics[s][this.stat]/this.analytics[t][this.stat]*100-100);return isNaN(a)&&(a=0),a},changeIcon:function(){return this.change<0?"ion-arrow-down-b":"ion-arrow-up-b"},currentWidth:function(){return"50px"}},components:{Doughnut:v},props:["analytics","stat"]},f=p,y=Object(h["a"])(f,i,l,!1,null,null,null);s["default"]=y.exports}}]);
//# sourceMappingURL=devise-charts.15071b06.js.map